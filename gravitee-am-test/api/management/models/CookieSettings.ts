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
    SessionSettings,
    SessionSettingsFromJSON,
    SessionSettingsFromJSONTyped,
    SessionSettingsToJSON,
} from './SessionSettings';

/**
 * 
 * @export
 * @interface CookieSettings
 */
export interface CookieSettings {
    /**
     * 
     * @type {boolean}
     * @memberof CookieSettings
     */
    inherited?: boolean;
    /**
     * 
     * @type {SessionSettings}
     * @memberof CookieSettings
     */
    session?: SessionSettings;
}

export function CookieSettingsFromJSON(json: any): CookieSettings {
    return CookieSettingsFromJSONTyped(json, false);
}

export function CookieSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CookieSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inherited': !exists(json, 'inherited') ? undefined : json['inherited'],
        'session': !exists(json, 'session') ? undefined : SessionSettingsFromJSON(json['session']),
    };
}

export function CookieSettingsToJSON(value?: CookieSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inherited': value.inherited,
        'session': SessionSettingsToJSON(value.session),
    };
}
