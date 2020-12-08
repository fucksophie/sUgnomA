/*jslint node, es6, for*/
let i;
import child_process from "child_process";

for (i = 0; i < process.argv[2]; i += 1) {
    child_process.exec("npm run start");
}
