import { IConfig } from "../interface";
export declare class Development {
    private attach;
    private date;
    private watcher;
    constructor();
    run(cnf: IConfig): Development;
    private clean;
    exit(cnf: IConfig): Development;
}
