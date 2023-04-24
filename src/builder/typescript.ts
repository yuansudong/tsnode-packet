import path from "path";
import { copyFileSync, mkdirSync, rmdir, rmdirSync } from "fs";
import { rmSync } from "fs";
import { execSync, spawn } from "child_process";
import { TscCli } from "../constant";
import { IConfig } from "../interface";


export class Typescript {
    constructor(){
    }
    public build(cnf:IConfig):Typescript {
       
       try {
        execSync( [TscCli,"--outDir",cnf.outdir].join(" ")) 
       } catch (error) {
        console.log(error)
       }
       
       return this 
    }
}

