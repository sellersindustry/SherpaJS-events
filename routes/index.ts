/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Feb 11 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /
 *
 */


import { Request, Environment as Env, Response } from "sherpa-core";


export function GET(request:Request, env:Env) {
    return Response({
        "url": request.url,
        "method": request.method,
        "moduleID": env.GetModuleID(),
        "moduleName": env.GetModuleConfig()["name"],
        "properties": env.GetProperties()["exampleProperty"],
        "server": env.GetServerConfig()
    }, {
        "status": 200
    });
}


export function POST(request:Request, env:Env) {
    return Response("POST REQUEST");
}



export function PATCH(request:Request, env:Env) {
    return Response("PATCH REQUEST");
}



export function DELETE(request:Request, env:Env) {
    return Response("DELETE REQUEST");
}


// For God so loved the world that He gave His only begotten Son, that whoever
// believes in Him should not perish but have everlasting life.
// - John 3:16
