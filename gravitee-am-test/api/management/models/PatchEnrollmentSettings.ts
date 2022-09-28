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
/**
 * 
 * @export
 * @interface PatchEnrollmentSettings
 */
export interface PatchEnrollmentSettings {
    /**
     * 
     * @type {boolean}
     * @memberof PatchEnrollmentSettings
     */
    forceEnrollment?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchEnrollmentSettings
     */
    skipTimeSeconds?: number;
}

export function PatchEnrollmentSettingsFromJSON(json: any): PatchEnrollmentSettings {
    return PatchEnrollmentSettingsFromJSONTyped(json, false);
}

export function PatchEnrollmentSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchEnrollmentSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forceEnrollment': !exists(json, 'forceEnrollment') ? undefined : json['forceEnrollment'],
        'skipTimeSeconds': !exists(json, 'skipTimeSeconds') ? undefined : json['skipTimeSeconds'],
    };
}

export function PatchEnrollmentSettingsToJSON(value?: PatchEnrollmentSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forceEnrollment': value.forceEnrollment,
        'skipTimeSeconds': value.skipTimeSeconds,
    };
}
