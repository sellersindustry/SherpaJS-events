import { Type as ServiceType } from "metadapter-event";
import { SherpaJS } from "sherpa-core";
import { Config, Service } from "./src/model";


export default SherpaJS.New.server<Config>({
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
                id: "test2",
            }
        }
    }
});
