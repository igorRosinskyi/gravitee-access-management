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
    CIBASettingNotifier,
    CIBASettingNotifierFromJSON,
    CIBASettingNotifierFromJSONTyped,
    CIBASettingNotifierToJSON,
} from './CIBASettingNotifier';

/**
 * 
 * @export
 * @interface CIBASettings
 */
export interface CIBASettings {
    /**
     * 
     * @type {boolean}
     * @memberof CIBASettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CIBASettings
     */
    authReqExpiry?: number;
    /**
     * 
     * @type {number}
     * @memberof CIBASettings
     */
    tokenReqInterval?: number;
    /**
     * 
     * @type {number}
     * @memberof CIBASettings
     */
    bindingMessageLength?: number;
    /**
     * 
     * @type {Array<CIBASettingNotifier>}
     * @memberof CIBASettings
     */
    deviceNotifiers?: Array<CIBASettingNotifier>;
}

export function CIBASettingsFromJSON(json: any): CIBASettings {
    return CIBASettingsFromJSONTyped(json, false);
}

export function CIBASettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CIBASettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'authReqExpiry': !exists(json, 'authReqExpiry') ? undefined : json['authReqExpiry'],
        'tokenReqInterval': !exists(json, 'tokenReqInterval') ? undefined : json['tokenReqInterval'],
        'bindingMessageLength': !exists(json, 'bindingMessageLength') ? undefined : json['bindingMessageLength'],
        'deviceNotifiers': !exists(json, 'deviceNotifiers') ? undefined : ((json['deviceNotifiers'] as Array<any>).map(CIBASettingNotifierFromJSON)),
    };
}

export function CIBASettingsToJSON(value?: CIBASettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'authReqExpiry': value.authReqExpiry,
        'tokenReqInterval': value.tokenReqInterval,
        'bindingMessageLength': value.bindingMessageLength,
        'deviceNotifiers': value.deviceNotifiers === undefined ? undefined : ((value.deviceNotifiers as Array<any>).map(CIBASettingNotifierToJSON)),
    };
}
