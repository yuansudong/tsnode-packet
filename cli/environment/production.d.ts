import { IConfig } from "../interface";
export declare class Production {
    constructor();
    run(cnf: IConfig): Production;
    release(cnf: IConfig): Production;
    private clean;
}
