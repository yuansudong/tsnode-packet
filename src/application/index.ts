


import { Runner } from "../environment"
import { IConfig, IFlag } from "../interface"

import * as path from "path"


export class Application {
    private flag!:IFlag
    private cnf!:IConfig
    private date:Date
     constructor(){
        this.date = new Date()
        this.parseFlag().loadConf() 
    }
    private parseFlag():Application {
        const args = process.argv.filter((value:string)=>{
            return value.includes("--") && value.includes("=")
        })
        this.flag = Object.fromEntries(args.map((value:string)=>{
            const args = value.replace("--","")
            return args.split("=")
        })) as IFlag  
        return this
     }
     private loadConf():Application {
        this.cnf = require( path.resolve(process.cwd(), "ts-node.config"))    
        return this
     }
     public run() {
       console.log(this.flag)
       Runner(this.flag.env,this.cnf)
     }
}








