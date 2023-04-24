"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Production = void 0;
const fs_1 = require("fs");
const builder_1 = require("../builder");
class Production {
    constructor() { }
    run(cnf) {
        this.clean(cnf);
        (0, builder_1.All)(cnf);
        return this;
    }
    release(cnf) {
        return this;
    }
    clean(cnf) {
        (0, fs_1.rmSync)(cnf.outdir, { recursive: true, force: true });
        return this;
    }
}
exports.Production = Production;
//# sourceMappingURL=production.js.map