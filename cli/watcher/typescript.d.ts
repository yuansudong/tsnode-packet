import { IConfig } from "../interface";
export declare class TypescriptWatcher {
    private watcherControl?;
    private runnerControl?;
    constructor();
    private init;
    private initRunner;
    run(cnf: IConfig): void;
    exit(cnf: IConfig): void;
}
