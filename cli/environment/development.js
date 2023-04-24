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
exports.Development = void 0;
const fs = __importStar(require("fs"));
const constant_1 = require("../constant");
const builder_1 = require("../builder");
const watcher_1 = require("../watcher");
class Development {
    attach;
    date;
    watcher;
    constructor() {
        this.date = new Date();
        this.watcher = new watcher_1.WatchManager();
        fs.mkdirSync(constant_1.DevelopmentCachePacketDir, { recursive: true });
    }
    run(cnf) {
        cnf.outdir = constant_1.DevelopmentCachePacketDir;
        this.clean(cnf);
        (0, builder_1.All)(cnf);
        this.watcher.run(cnf);
        return this;
    }
    clean(cnf) {
        fs.rmSync(cnf.outdir, { recursive: true, force: true });
        return this;
    }
    exit(cnf) {
        this.watcher.exit(cnf);
        return this;
    }
}
exports.Development = Development;
//# sourceMappingURL=development.js.map