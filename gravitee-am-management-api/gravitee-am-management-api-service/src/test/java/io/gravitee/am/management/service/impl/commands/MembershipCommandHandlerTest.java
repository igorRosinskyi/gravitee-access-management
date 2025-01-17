/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.am.management.service.impl.commands;

import io.gravitee.am.model.ReferenceType;
import io.gravitee.am.model.Role;
import io.gravitee.am.model.User;
import io.gravitee.am.model.membership.MemberType;
import io.gravitee.am.model.permissions.DefaultRole;
import io.gravitee.am.model.permissions.SystemRole;
import io.gravitee.am.service.MembershipService;
import io.gravitee.am.service.OrganizationUserService;
import io.gravitee.am.service.RoleService;
import io.gravitee.cockpit.api.command.v1.CockpitCommandType;
import io.gravitee.cockpit.api.command.v1.membership.MembershipCommand;
import io.gravitee.cockpit.api.command.v1.membership.MembershipCommandPayload;
import io.gravitee.cockpit.api.command.v1.membership.MembershipReply;
import io.gravitee.common.utils.UUID;
import io.gravitee.exchange.api.command.CommandStatus;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Single;
import io.reactivex.rxjava3.observers.TestObserver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * @author Jeoffrey HAEYAERT (jeoffrey.haeyaert at graviteesource.com)
 * @author GraviteeSource Team
 */
@ExtendWith(MockitoExtension.class)
public class MembershipCommandHandlerTest {

    @Mock
    private OrganizationUserService userService;

    @Mock
    private RoleService roleService;

    @Mock
    private MembershipService membershipService;

    public MembershipCommandHandler cut;

    @BeforeEach
    public void before() {
        cut = new MembershipCommandHandler(userService, roleService, membershipService);
    }

    @Test
    public void supportType() {
        assertEquals(CockpitCommandType.MEMBERSHIP.name(), cut.supportType());
    }

    @Test
    public void handleWithSystemRole() {

        MembershipCommandPayload membershipPayload = MembershipCommandPayload
                .builder()
                .userId("user#1")
                .organizationId("orga#1")
                .referenceType(ReferenceType.ENVIRONMENT.name())
                .referenceId("env#1")
                .role(SystemRole.ENVIRONMENT_PRIMARY_OWNER.name())
                .build();

        MembershipCommand command = new MembershipCommand(membershipPayload);

        User user = new User();
        user.setId(UUID.random().toString());

        Role role = new Role();
        role.setId(UUID.random().toString());

        when(userService.findByExternalIdAndSource(ReferenceType.ORGANIZATION, membershipPayload.organizationId(), membershipPayload.userId(), "cockpit")).thenReturn(Maybe.just(user));
        when(roleService.findSystemRole(SystemRole.ENVIRONMENT_PRIMARY_OWNER, ReferenceType.ENVIRONMENT)).thenReturn(Maybe.just(role));
        when(membershipService.addOrUpdate(eq(membershipPayload.organizationId()),
                argThat(membership -> membership.getReferenceType() == ReferenceType.ENVIRONMENT
                        && membership.getReferenceId().equals(membershipPayload.referenceId())
                        && membership.getMemberType() == MemberType.USER
                        && membership.getMemberId().equals(user.getId())
                        && membership.getRoleId().equals(role.getId()))))
                .thenAnswer(i -> Single.just(i.getArgument(1)));

        TestObserver<MembershipReply> obs = cut.handle(command).test();

        obs.awaitDone(10, TimeUnit.SECONDS);
        obs.assertNoErrors();
        obs.assertValue(reply -> reply.getCommandId().equals(command.getId()) && reply.getCommandStatus().equals(CommandStatus.SUCCEEDED));
    }

    @Test
    public void handleWithDefaultRole() {

        MembershipCommandPayload membershipPayload = MembershipCommandPayload
                .builder()
                .userId("user#1")
                .organizationId("orga#1")
                .referenceType(ReferenceType.ENVIRONMENT.name())
                .referenceId("env#1")
                .role(DefaultRole.ENVIRONMENT_OWNER.name())
                .build();

        MembershipCommand command = new MembershipCommand(membershipPayload);

        User user = new User();
        user.setId(UUID.random().toString());

        Role role = new Role();
        role.setId(UUID.random().toString());

        when(userService.findByExternalIdAndSource(ReferenceType.ORGANIZATION, membershipPayload.organizationId(), membershipPayload.userId(), "cockpit")).thenReturn(Maybe.just(user));
        when(roleService.findDefaultRole(membershipPayload.organizationId(), DefaultRole.ENVIRONMENT_OWNER, ReferenceType.ENVIRONMENT)).thenReturn(Maybe.just(role));
        when(membershipService.addOrUpdate(eq(membershipPayload.organizationId()),
                argThat(membership -> membership.getReferenceType() == ReferenceType.ENVIRONMENT
                        && membership.getReferenceId().equals(membershipPayload.referenceId())
                        && membership.getMemberType() == MemberType.USER
                        && membership.getMemberId().equals(user.getId())
                        && membership.getRoleId().equals(role.getId()))))
                .thenAnswer(i -> Single.just(i.getArgument(1)));

        TestObserver<MembershipReply> obs = cut.handle(command).test();

        obs.awaitDone(10, TimeUnit.SECONDS);
        obs.assertNoErrors();
        obs.assertValue(reply -> reply.getCommandId().equals(command.getId()) && reply.getCommandStatus().equals(CommandStatus.SUCCEEDED));
    }

    @Test
    public void handleWithUnknownRole() {

        MembershipCommandPayload membershipPayload = MembershipCommandPayload
                .builder()
                .userId("user#1")
                .organizationId("orga#1")
                .referenceType(ReferenceType.ENVIRONMENT.name())
                .referenceId("env#1")
                .role("UNKNOWN")
                .build();

        MembershipCommand command = new MembershipCommand(membershipPayload);

        User user = new User();
        user.setId(UUID.random().toString());

        Role role = new Role();
        role.setId(UUID.random().toString());

        // Need to switch to lenient because we can be sure of what method will be executed (cause it's reactive and executed in //).
        lenient().when(userService.findByExternalIdAndSource(ReferenceType.ORGANIZATION, membershipPayload.organizationId(), membershipPayload.userId(), "cockpit")).thenReturn(Maybe.just(user));
        lenient().when(roleService.findDefaultRole(membershipPayload.organizationId(), DefaultRole.ENVIRONMENT_OWNER, ReferenceType.ENVIRONMENT)).thenReturn(Maybe.just(role));

        TestObserver<MembershipReply> obs = cut.handle(command).test();

        obs.awaitDone(10, TimeUnit.SECONDS);
        obs.assertNoErrors();
        obs.assertValue(reply -> reply.getCommandId().equals(command.getId()) && reply.getCommandStatus().equals(CommandStatus.ERROR));

        verify(membershipService, times(0)).addOrUpdate(any(), any());
    }

}