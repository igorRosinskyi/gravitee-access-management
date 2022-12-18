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
 * @interface Group
 */
export interface Group {
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    referenceType?: GroupReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Group
     */
    members?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Group
     */
    roles?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof Group
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Group
     */
    updatedAt?: Date;
}


/**
 * @export
 */
export const GroupReferenceTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type GroupReferenceTypeEnum = typeof GroupReferenceTypeEnum[keyof typeof GroupReferenceTypeEnum];


export function GroupFromJSON(json: any): Group {
    return GroupFromJSONTyped(json, false);
}

export function GroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): Group {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'members': !exists(json, 'members') ? undefined : json['members'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function GroupToJSON(value?: Group | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'name': value.name,
        'description': value.description,
        'members': value.members,
        'roles': value.roles,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
