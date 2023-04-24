"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
const development_1 = require("./development");
const production_1 = require("./production");
const dict = new Map([
    ["development", new development_1.Development()],
    ["production", new production_1.Production()]
]);
const Runner = (key, cnf) => {
    const instance = dict.get(key);
    if (!instance)
        return false;
    instance.run(cnf);
    return true;
};
exports.Runner = Runner;
//# sourceMappingURL=index.js.map