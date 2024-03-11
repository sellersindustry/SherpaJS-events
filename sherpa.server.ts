/**
 * This file is not required to create a SherpaJS module.
 * Only needed to run server locally
 */

import { NewServer } from "sherpa-core";

export default NewServer({
    version: 1,
    app: {
        module: ".",
        properties: {
            exampleProperty: "2"
        }
    },
});
