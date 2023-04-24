export interface IWatchConfig {
    rootdir: string;
    resolve: Array<string>;
}
export interface IScript {
    dev: string;
}
export interface IFlag {
    env: string;
}
export interface IConfig {
    copy: Array<string>;
    outdir: string;
    watch: IWatchConfig;
    script: IScript;
    exclude: string[];
}
export interface IBuilder {
    build(cnf: IConfig): void;
}
export interface IEnvironment {
    run(cnf: IConfig): void;
}
export interface IWatcher {
    run(cnf: IConfig): void;
    exit(cnf: IConfig): void;
}
