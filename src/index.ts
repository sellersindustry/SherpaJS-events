/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 27 2024
 *   file: index.ts
 *   project: SherpaJS Events Module
 *   purpose: Event Validator
 *
 */


import addFormats from "ajv-formats"
import Ajv, { ValidateFunction } from "ajv";
import { Event, Payload, IService } from "./model";


export async function SendEvent(service:IService, event:Event, data:Payload):Promise<string|null> {
    if (process.env.VERCEL == undefined) { //! FIXME
        let validate = getSchema(event);
        if (validate != undefined && !validate(data)) {
            return getErrors(validate);
        }
    }
    await service.add(event.id, data);
    return null;
}


function getErrors<T>(validate:ValidateFunction<T>):string {
    if (validate.errors == null) {
        return "Unable to process data";
    }
    return validate.errors.map(error => {
        return `Property '${error.instancePath.slice(1)}': ${error.message}`;
    }).join("\n");
}


function getSchema<T>(event:Event):ValidateFunction<T>|undefined {
    if (!event.schema) return undefined;
    return addFormats(new Ajv({ allErrors: true })).compile<T>(event.schema);
}


// Surely your goodness and love will follow me all the days of my life, and
// I will dwell in the house of the Lord forever.
// - Psalm 23:6
