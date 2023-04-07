/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Access Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ResetPasswordSettings,
    ResetPasswordSettingsFromJSON,
    ResetPasswordSettingsFromJSONTyped,
    ResetPasswordSettingsToJSON,
} from './ResetPasswordSettings';

/**
 * 
 * @export
 * @interface SelfServiceAccountManagementSettings
 */
export interface SelfServiceAccountManagementSettings {
    /**
     * 
     * @type {boolean}
     * @memberof SelfServiceAccountManagementSettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {ResetPasswordSettings}
     * @memberof SelfServiceAccountManagementSettings
     */
    resetPassword?: ResetPasswordSettings;
}

export function SelfServiceAccountManagementSettingsFromJSON(json: any): SelfServiceAccountManagementSettings {
    return SelfServiceAccountManagementSettingsFromJSONTyped(json, false);
}

export function SelfServiceAccountManagementSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfServiceAccountManagementSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'resetPassword': !exists(json, 'resetPassword') ? undefined : ResetPasswordSettingsFromJSON(json['resetPassword']),
    };
}

export function SelfServiceAccountManagementSettingsToJSON(value?: SelfServiceAccountManagementSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'resetPassword': ResetPasswordSettingsToJSON(value.resetPassword),
    };
}

