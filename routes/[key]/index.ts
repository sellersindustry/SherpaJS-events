/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 27 2024
 *   file: index.ts
 *   project: SherpaJS Events Module
 *   purpose: Endpoint /[key]
 *
 */


import { SendEvent } from "../../src";
import { BodyType, Request, Response } from "sherpa-core";
import { Config } from "../../sherpa.module";
import { Payload } from "../../src/model";


export async function POST(request:Request, context:Config) {
    let key   = request.params.path.get("key") as string;
    let event = context.events[key];
    if (!event) {
        return Response.new({ status: 404 });
    }
    
    if (request.bodyType != BodyType.JSON) {
        return Response.text("Request body must be in JSON format.", { status: 400 });
    }

    let errorMsg = await SendEvent(context.service, event, request.body as Payload);
    if (errorMsg) {
        return Response.text(errorMsg, { status: 400 });
    }

    return Response.text("Successfully Logged Event", { status: 201 });
}


// For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.
// - Romans 6:23
