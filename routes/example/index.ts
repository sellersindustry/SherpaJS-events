/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Feb 11 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /example/
 *
 */


import { Request, Environment as Env, Response } from "sherpa-core";


export function GET(request:Request, env:Env) {
    return Response({
        "url": request.url,
    }, {
        "status": 200,
        "headers": {
            "Content-Type": "application/json",
        }
    });
}


// I can do all this through him who gives me strength.
// - Philippians 4:13
