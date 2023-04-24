"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const environment_1 = require("../environment");
const path = __importStar(require("path"));
class Application {
    flag;
    cnf;
    date;
    constructor() {
        this.date = new Date();
        this.parseFlag().loadConf();
    }
    parseFlag() {
        const args = process.argv.filter((value) => {
            return value.includes("--") && value.includes("=");
        });
        this.flag = Object.fromEntries(args.map((value) => {
            const args = value.replace("--", "");
            return args.split("=");
        }));
        return this;
    }
    loadConf() {
        this.cnf = require(path.resolve(process.cwd(), "ts-node.config"));
        return this;
    }
    run() {
        console.log(this.flag);
        (0, environment_1.Runner)(this.flag.env, this.cnf);
    }
}
exports.Application = Application;
//# sourceMappingURL=index.js.map