"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = exports.Handler = void 0;
const copy_1 = require("./copy");
const protobuffer_1 = require("./protobuffer");
const typescript_1 = require("./typescript");
const dict = new Map([
    [".ts", new typescript_1.Typescript()],
    [".proto", new protobuffer_1.Protobuffer()],
    [".copy", new copy_1.CopyFile()]
]);
function Handler(ext, cnf) {
    const instance = dict.get(ext);
    if (!instance) {
        return false;
    }
    instance.build(cnf);
    return true;
}
exports.Handler = Handler;
function All(cnf) {
    dict.forEach((instance) => {
        instance.build(cnf);
    });
}
exports.All = All;
//# sourceMappingURL=index.js.map