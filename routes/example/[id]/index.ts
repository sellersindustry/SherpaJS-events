/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Feb 11 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /example/:id/
 *
 */


import { Request, Environment as Env, Response } from "sherpa-core";


export function GET(request:Request, env:Env) {
    return Response({
        "url": request.url,
        "id": request.params.id,
    }, {
        "status": 200
    });
}


// For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.
// - Romans 6:23
