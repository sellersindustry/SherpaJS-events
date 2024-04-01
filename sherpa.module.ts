import { ContextSchema, SherpaJS } from "sherpa-core";
import { Config } from "./src/model.js";


export default SherpaJS.New.module({
    name: "events",
    interface: ContextSchema<Config>
});

