export declare class Attach {
    private child;
    private isRestart;
    private path;
    private cwd;
    constructor(cwd: string, path: string);
    private init;
    private stdout;
    private stderr;
    private close;
    private spawn;
    restart(cwd: string, path: string): Attach;
    exit(): void;
}
