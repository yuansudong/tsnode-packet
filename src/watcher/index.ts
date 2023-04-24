import { IConfig, IWatcher } from "../interface";
import { CopytWatcher } from "./copy";
import { TypescriptWatcher } from "./typescript";

const watcherList:Array<IWatcher> = [
    new CopytWatcher(),
   //  new RunnerWatcher(),
    new TypescriptWatcher(),
]




export class WatchManager {

    constructor() {

    }

    public run(cnf:IConfig) {
        for (const iterator of watcherList) {
            iterator.run(cnf)
        }
    }

    public exit(cnf:IConfig) {
        for (const iterator of watcherList) {
            iterator.exit(cnf)
        }
    }
}

