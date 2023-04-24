"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attach = void 0;
const child_process_1 = require("child_process");
class Attach {
    child;
    isRestart;
    path;
    cwd;
    constructor(cwd, path) {
        this.path = path;
        this.isRestart = false;
        this.cwd = cwd;
        this.init();
    }
    init() {
        const [executer, ...executerArgs] = this.path.split(" ");
        this.child = (0, child_process_1.spawn)(executer, executerArgs, {
            cwd: this.cwd
        });
        this.spawn().stdout().stderr().close();
    }
    stdout() {
        this.child?.stdout.on("data", (message) => {
            console.log(message.toString());
        });
        return this;
    }
    stderr() {
        this.child?.stderr.on("data", (message) => {
            console.log(message.toString());
        });
        return this;
    }
    close() {
        this.child?.on("close", (code, single) => {
            console.log("task exit with ", code);
            this.child = null;
            if (this.isRestart) {
            }
        });
        return this;
    }
    spawn() {
        this.child?.on("spawn", () => {
            console.log("进程启动成功");
        });
        return this;
    }
    restart(cwd, path) {
        this.path = path;
        this.cwd = cwd;
        this.isRestart = true;
        if (this.child) {
            this.exit();
        }
        this.init();
        return this;
    }
    exit() {
        this.child?.kill();
    }
}
exports.Attach = Attach;
//# sourceMappingURL=index.js.map