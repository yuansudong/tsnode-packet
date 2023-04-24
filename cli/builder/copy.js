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
exports.CopyFile = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class CopyFile {
    constructor() {
    }
    build(cnf) {
        const cwd = process.cwd();
        cnf.copy.forEach((filepath) => {
            const relativePath = path.relative(cwd, filepath);
            const targetPath = path.resolve(cnf.outdir, relativePath);
            fs.mkdirSync(path.dirname(targetPath), { recursive: true });
            fs.copyFileSync(filepath, targetPath);
        });
    }
}
exports.CopyFile = CopyFile;
//# sourceMappingURL=copy.js.map