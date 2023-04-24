import { IConfig } from "../interface";
export declare class CopytWatcher {
    constructor();
    private init;
    run(cnf: IConfig): void;
    exit(cnf: IConfig): void;
}
