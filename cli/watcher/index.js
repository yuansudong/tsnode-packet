"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchManager = void 0;
const copy_1 = require("./copy");
const typescript_1 = require("./typescript");
const watcherList = [
    new copy_1.CopytWatcher(),
    new typescript_1.TypescriptWatcher(),
];
class WatchManager {
    constructor() {
    }
    run(cnf) {
        for (const iterator of watcherList) {
            iterator.run(cnf);
        }
    }
    exit(cnf) {
        for (const iterator of watcherList) {
            iterator.exit(cnf);
        }
    }
}
exports.WatchManager = WatchManager;
//# sourceMappingURL=index.js.map