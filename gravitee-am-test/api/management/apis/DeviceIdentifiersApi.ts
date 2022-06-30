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


import * as runtime from '../runtime';
import {
    BotDetection,
    BotDetectionFromJSON,
    BotDetectionToJSON,
    NewDeviceIdentifier,
    NewDeviceIdentifierFromJSON,
    NewDeviceIdentifierToJSON,
    UpdateDeviceIdentifier,
    UpdateDeviceIdentifierFromJSON,
    UpdateDeviceIdentifierToJSON,
} from '../models';

export interface Create13Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    deviceIdentifier: NewDeviceIdentifier;
}

export interface Delete16Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    deviceIdentifier: string;
}

export interface Get25Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    deviceIdentifier: string;
}

export interface List25Request {
    organizationId: string;
    environmentId: string;
    domain: string;
}

export interface Update16Request {
    organizationId: string;
    environmentId: string;
    domain: string;
    deviceIdentifier: string;
    deviceIdentifier2: UpdateDeviceIdentifier;
}

/**
 * 
 */
export class DeviceIdentifiersApi extends runtime.BaseAPI {

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[CREATE] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[CREATE] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[CREATE] permission on the specified organization
     * Create a device identifier
     */
    async create13Raw(requestParameters: Create13Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling create13.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling create13.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling create13.');
        }

        if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
            throw new runtime.RequiredError('deviceIdentifier','Required parameter requestParameters.deviceIdentifier was null or undefined when calling create13.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/device-identifiers`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewDeviceIdentifierToJSON(requestParameters.deviceIdentifier),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[CREATE] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[CREATE] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[CREATE] permission on the specified organization
     * Create a device identifier
     */
    async create13(requestParameters: Create13Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.create13Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[DELETE] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[DELETE] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[DELETE] permission on the specified organization
     * Delete a Device identifier
     */
    async delete16Raw(requestParameters: Delete16Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling delete16.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling delete16.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling delete16.');
        }

        if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
            throw new runtime.RequiredError('deviceIdentifier','Required parameter requestParameters.deviceIdentifier was null or undefined when calling delete16.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/device-identifiers/{deviceIdentifier}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"deviceIdentifier"}}`, encodeURIComponent(String(requestParameters.deviceIdentifier))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[DELETE] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[DELETE] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[DELETE] permission on the specified organization
     * Delete a Device identifier
     */
    async delete16(requestParameters: Delete16Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.delete16Raw(requestParameters, initOverrides);
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[READ] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[READ] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[READ] permission on the specified organization
     * Get a Device identifier
     */
    async get25Raw(requestParameters: Get25Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling get25.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling get25.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling get25.');
        }

        if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
            throw new runtime.RequiredError('deviceIdentifier','Required parameter requestParameters.deviceIdentifier was null or undefined when calling get25.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/device-identifiers/{deviceIdentifier}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"deviceIdentifier"}}`, encodeURIComponent(String(requestParameters.deviceIdentifier))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[READ] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[READ] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[READ] permission on the specified organization
     * Get a Device identifier
     */
    async get25(requestParameters: Get25Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any> {
        const response = await this.get25Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIERS[LIST] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIERS[LIST] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIERS[LIST] permission on the specified organization Each returned bot detections is filtered and contains only basic information such as id, name.
     * List registered device identifiers for a security domain
     */
    async list25Raw(requestParameters: List25Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<BotDetection>>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling list25.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling list25.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling list25.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/device-identifiers`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BotDetectionFromJSON));
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIERS[LIST] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIERS[LIST] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIERS[LIST] permission on the specified organization Each returned bot detections is filtered and contains only basic information such as id, name.
     * List registered device identifiers for a security domain
     */
    async list25(requestParameters: List25Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<BotDetection>> {
        const response = await this.list25Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[UPDATE] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[UPDATE] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[UPDATE] permission on the specified organization
     * Update a Device identifier
     */
    async update16Raw(requestParameters: Update16Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<BotDetection>> {
        if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
            throw new runtime.RequiredError('organizationId','Required parameter requestParameters.organizationId was null or undefined when calling update16.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling update16.');
        }

        if (requestParameters.domain === null || requestParameters.domain === undefined) {
            throw new runtime.RequiredError('domain','Required parameter requestParameters.domain was null or undefined when calling update16.');
        }

        if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
            throw new runtime.RequiredError('deviceIdentifier','Required parameter requestParameters.deviceIdentifier was null or undefined when calling update16.');
        }

        if (requestParameters.deviceIdentifier2 === null || requestParameters.deviceIdentifier2 === undefined) {
            throw new runtime.RequiredError('deviceIdentifier2','Required parameter requestParameters.deviceIdentifier2 was null or undefined when calling update16.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // gravitee-auth authentication
        }

        const response = await this.request({
            path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/device-identifiers/{deviceIdentifier}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))).replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"domain"}}`, encodeURIComponent(String(requestParameters.domain))).replace(`{${"deviceIdentifier"}}`, encodeURIComponent(String(requestParameters.deviceIdentifier))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDeviceIdentifierToJSON(requestParameters.deviceIdentifier2),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BotDetectionFromJSON(jsonValue));
    }

    /**
     * User must have the DOMAIN_DEVICE_IDENTIFIER[UPDATE] permission on the specified domain or DOMAIN_DEVICE_IDENTIFIER[UPDATE] permission on the specified environment or DOMAIN_DEVICE_IDENTIFIER[UPDATE] permission on the specified organization
     * Update a Device identifier
     */
    async update16(requestParameters: Update16Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<BotDetection> {
        const response = await this.update16Raw(requestParameters, initOverrides);
        return await response.value();
    }

}