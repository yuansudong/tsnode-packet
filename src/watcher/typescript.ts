/***
 * 
 * 
 * typescript 实时编译监控器
 * 
 */

import * as child_process from "child_process"
import { DevelopmentCachePacketDir, TscCli } from "../constant"
import { IConfig } from "../interface";


export class  TypescriptWatcher {
    private watcherControl?:AbortController
    private runnerControl?:AbortController
    constructor() {}
    private init(cnf:IConfig) {   
        if (this.watcherControl) {
            this.watcherControl.abort()
        }
        this.watcherControl = new AbortController();
        let child = child_process.spawn(TscCli,["--watch","--outDir",DevelopmentCachePacketDir],{
            shell:true,
            signal: this.watcherControl.signal,
            cwd:process.cwd(),
            
        })
        child.stdout.on("data",(message:Buffer)=>{
            const str = message.toLocaleString()
            console.log(str)
            if (str.includes("Found 0 errors.")) {
                this.initRunner(cnf)
            }          
        })
        child.stderr.on("data",(message:Buffer)=>{
            console.log(message.toLocaleString())
        })       
    }
    private initRunner(cnf:IConfig) {   
        if (this.runnerControl) { 
            this.runnerControl.abort()
        }
        this.runnerControl =  new AbortController()
        const [interpreter,...args] = cnf.script.dev.split(" ") 
        let child = child_process.spawn(cnf.script.dev,args,{
            shell:true,
            stdio:"inherit",
            cwd:DevelopmentCachePacketDir,
            signal:this.runnerControl.signal,
        })    
    }
    public run(cnf:IConfig) {
        this.init(cnf)
    }
    public exit(cnf:IConfig) {
        this.watcherControl?.abort()
        this.runnerControl?.abort()
    }
}





