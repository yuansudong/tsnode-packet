"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentCachePacketDir = exports.DevelopmentCacheDir = exports.CacheDir = exports.TscCli = void 0;
const path_1 = __importDefault(require("path"));
exports.TscCli = path_1.default.resolve(process.cwd(), "node_modules/.bin/tsc");
exports.CacheDir = path_1.default.resolve(process.cwd(), "node_modules/.cache/tsnode_packet");
exports.DevelopmentCacheDir = path_1.default.resolve(exports.CacheDir, "development");
exports.DevelopmentCachePacketDir = path_1.default.resolve(exports.DevelopmentCacheDir, "packet");
//# sourceMappingURL=index.js.map