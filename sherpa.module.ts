import { ContextSchema, SherpaJS } from "sherpa-core";
import { Config, Service, ServiceType } from "./src/model.js";

export type { Config };
export { Service, ServiceType };

export default SherpaJS.New.module({
    name: "events",
    interface: ContextSchema<Config>
});

