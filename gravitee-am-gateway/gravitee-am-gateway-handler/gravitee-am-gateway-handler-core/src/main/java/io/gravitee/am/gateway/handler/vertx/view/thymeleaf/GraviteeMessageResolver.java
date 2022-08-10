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
package io.gravitee.am.gateway.handler.vertx.view.thymeleaf;

import io.gravitee.am.common.i18n.FileSystemDictionaryProvider;
import io.gravitee.am.model.I18nDictionary;
import org.springframework.util.ObjectUtils;
import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.messageresolver.AbstractMessageResolver;

import java.util.Locale;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
public class GraviteeMessageResolver extends AbstractMessageResolver {
    private final FileSystemDictionaryProvider dictionaryProvider;
    private final DomainBasedDictionaryProvider domainBasedDictionaryProvider;

    public GraviteeMessageResolver(String i18nLocation) {
        this.dictionaryProvider = new FileSystemDictionaryProvider(i18nLocation);
        this.domainBasedDictionaryProvider = new DomainBasedDictionaryProvider();
        this.setOrder(0);
    }

    public boolean isSupported(Locale locale) {
        return this.dictionaryProvider.hasDictionaryFor(locale);
    }

    @Override
    public String resolveMessage(ITemplateContext context, Class<?> origin, String key, Object[] messageParameters) {
        // first we look into the domain custom messages
        final String domainMessage =
                this.domainBasedDictionaryProvider.getDictionaryFor(context.getLocale()).getProperty(key);

        if (!ObjectUtils.isEmpty(domainMessage)) {
            return domainMessage;
        }

        // fallback to the file system one
        return this.dictionaryProvider.getDictionaryFor(context.getLocale()).getProperty(key);
    }

    @Override
    public String createAbsentMessageRepresentation(ITemplateContext context, Class<?> origin, String key, Object[] messageParameters) {
        // leave this method blank to let thymeleaf generate the default form
        return null;
    }

    public void updateDictionary(I18nDictionary i18nDictionary) {
        domainBasedDictionaryProvider.loadDictionary(i18nDictionary);
    }

    public void removeDictionary(String locale) {
        domainBasedDictionaryProvider.removeDictionary(locale);
    }
}