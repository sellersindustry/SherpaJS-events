# SherpaJS Events
![NPM Version](https://img.shields.io/npm/v/sherpajs-events)

Connect to event tracking platforms like PostHog
using [Metadapter Event](https://github.com/sellersindustry/metadapter-event)
and create event tracking endpoints for
[SherpaJS](https://github.com/sellersindustry/SherpaJS) an agnostic and modular
serverless platform.


<br>


## Features
- ✅ [SherpaJS](https://github.com/sellersindustry/SherpaJS) Module, an Agnostic and Modular Serverless Platform
- ✅ Log event using [Metadapter Event](https://github.com/sellersindustry/metadapter-event)
- ✅ Supports PostHog


<br>


## Installation
```
npm install sherpajs-events
```


<br>


## Example Usage
Services are loaded using [Metadapter Event](https://github.com/sellersindustry/metadapter-event). The `id` is the eventID that is logged with your event platform. The `schema` is optional, but uses [AJV schema](https://ajv.js.org/).
```typescript
// sherpa.server.ts
import { SherpaJS } from "sherpa-core";
import { ContextSchema, Service, ServiceType } from "sherpajs-events";

export default SherpaJS.Load.module<ContextSchema>({
    entry: "sherpajs-events",
    context: {
        service: Service(ServiceType.Skeleton, undefined),
        events: {
            "test": {
                id: "test",
                schema: {
                    type: "object",
                    properties: {
                      foo: {type: "integer"},
                      bar: {type: "string"}
                    },
                    required: ["foo"],
                    additionalProperties: false
                }
            },
            "test2": {
                id: "test2"
            }
        }
    }
});

```

### Endpoint `POST:/test`
**Body**
```json
{
    "foo": true
}
```
**Response**
```
400 Bad Request
Property 'foo': must be integer
```

### Endpoint `POST:/test`
**Body**
```json
Hello World
```
**Response**
```
400 Bad Request
Request body must be in JSON format.
```

### Endpoint `POST:/test`
**Body**
```json
{
    "foo": 3,
    "bar": "hello world"
}
```
**Response**
```
201 Created
Successfully Logged Event
```


### Endpoint `POST:/test2`
**Body**
```json
{
    "test": "hello world",
}
```
**Response**
```
201 Created
Successfully Logged Event
```

### Endpoint `POST:/test2`
**Body**
```json
{
    "test": true,
}
```
**Response**
```
201 Created
Successfully Logged Event
```