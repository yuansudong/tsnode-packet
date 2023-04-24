import path from "path";
import { IConfig } from "../interface";
import { copyFileSync, mkdirSync, rmdir, rmdirSync } from "fs";
import { rmSync } from "fs";
import { execFile, execFileSync } from "child_process";
import { execSync } from "child_process";
import { All } from "../builder";



export  class Production {
    constructor(){}
    public run(cnf:IConfig):Production {
        this.clean(cnf)
        All(cnf)
        return this 
    } 
    public release(cnf:IConfig):Production {
        return this 
    }
    private clean(cnf:IConfig):Production{
        rmSync(cnf.outdir, { recursive: true, force: true })         
        return this
    }
}