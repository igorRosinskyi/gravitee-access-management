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
 * @interface UserCredentialsResource
 */
export interface UserCredentialsResource {
    /**
     * 
     * @type {any}
     * @memberof UserCredentialsResource
     */
    userCredentialResource?: any;
}

export function UserCredentialsResourceFromJSON(json: any): UserCredentialsResource {
    return UserCredentialsResourceFromJSONTyped(json, false);
}

export function UserCredentialsResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCredentialsResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userCredentialResource': !exists(json, 'userCredentialResource') ? undefined : json['userCredentialResource'],
    };
}

export function UserCredentialsResourceToJSON(value?: UserCredentialsResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userCredentialResource': value.userCredentialResource,
    };
}
