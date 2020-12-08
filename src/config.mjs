/* jslint es6 */
import fs from "fs";

const config = {
    "code": "ZZLAHF".toUpperCase(),
    "runTime": 160,
    "annoy": {
        "annoy": false,
        "user": "m43",
        "type": 1
    },
    "imposter": {
        "imposter": true,
        "destroyAfter": true,
        "murderEveryone": false
    },
    "spam": {
        "spam": false,
        "type": 2,
        "message": "fortnite gaming"
    },
    "meeting": {
        "type": 1
    }
};

config.names = fs.readFileSync("src/assets/names.txt").toString().split("\n");

export default config;