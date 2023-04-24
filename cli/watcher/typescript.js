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
exports.TypescriptWatcher = void 0;
const child_process = __importStar(require("child_process"));
const constant_1 = require("../constant");
class TypescriptWatcher {
    watcherControl;
    runnerControl;
    constructor() { }
    init(cnf) {
        if (this.watcherControl) {
            this.watcherControl.abort();
        }
        this.watcherControl = new AbortController();
        let child = child_process.spawn(constant_1.TscCli, ["--watch", "--outDir", constant_1.DevelopmentCachePacketDir], {
            shell: true,
            signal: this.watcherControl.signal,
            cwd: process.cwd(),
        });
        child.stdout.on("data", (message) => {
            const str = message.toLocaleString();
            if (str.includes("Found 0 errors.")) {
                this.initRunner(cnf);
            }
        });
        child.stderr.on("data", (message) => {
            console.log(message.toLocaleString());
        });
    }
    initRunner(cnf) {
        if (this.runnerControl) {
            this.runnerControl.abort();
        }
        this.runnerControl = new AbortController();
        const [interpreter, ...args] = cnf.script.dev.split(" ");
        let child = child_process.spawn(cnf.script.dev, args, {
            shell: true,
            stdio: "inherit",
            cwd: constant_1.DevelopmentCachePacketDir,
            signal: this.runnerControl.signal,
        });
    }
    run(cnf) {
        this.init(cnf);
    }
    exit(cnf) {
        this.watcherControl?.abort();
        this.runnerControl?.abort();
    }
}
exports.TypescriptWatcher = TypescriptWatcher;
//# sourceMappingURL=typescript.js.map