import { SherpaJS } from "sherpa-core";
import { Config } from "./src/model.js";


export default SherpaJS.New.module({
    name: "events",
});


export type ContextSchema = Config;
