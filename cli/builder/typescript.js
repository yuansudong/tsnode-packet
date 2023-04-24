"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typescript = void 0;
const child_process_1 = require("child_process");
const constant_1 = require("../constant");
class Typescript {
    constructor() {
    }
    build(cnf) {
        try {
            (0, child_process_1.execSync)([constant_1.TscCli, "--outDir", cnf.outdir].join(" "));
        }
        catch (error) {
            console.log(error);
        }
        return this;
    }
}
exports.Typescript = Typescript;
//# sourceMappingURL=typescript.js.map