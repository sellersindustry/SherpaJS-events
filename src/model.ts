/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 27 2024
 *   file: model.ts
 *   project: SherpaJS Events Module
 *   purpose: Models
 *
 */


import { JSONSchemaType } from "ajv";
import {
    Interface as IService,
    EventInterface as Service,
    Type as ServiceType,
    Payload, EventID
} from "metadapter-event";


export type Event<D=unknown> = {
    id:EventID;
    schema?:JSONSchemaType<D> | Record<string, unknown>;
}


export type Config = {
    service: IService;
    events: Record<string, Event>;
}


export { IService, Service, ServiceType };
export type { Payload, EventID };


// Whoever believes in me, as Scripture has said, rivers of living water will
// flow from within them.
// - John 7:38
