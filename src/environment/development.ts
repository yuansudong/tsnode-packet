
import * as  fs from "fs"
import { DevelopmentCachePacketDir } from "../constant"
import { All, Handler } from "../builder"
import { IConfig } from "../interface"
import { Attach } from "../attach"
import { WatchManager } from "../watcher"
export class Development {
    private attach!:Attach
    private date:Date
    private watcher:WatchManager
    constructor() {
       this.date = new Date()
       this.watcher =  new WatchManager()
       fs.mkdirSync(DevelopmentCachePacketDir,{recursive:true})
    }
    public run(cnf:IConfig):Development {
        // 开发模式下，需要将工程生成的文件隐藏在.cache目录下。
        cnf.outdir = DevelopmentCachePacketDir
        this.clean(cnf)
        //  首先需要执行所有的构建工作
        All(cnf)
        this.watcher.run(cnf)
        return this 
    }
    private clean(cnf:IConfig):Development{
        fs.rmSync(cnf.outdir, { recursive: true, force: true })         
        return this
    }
    public exit(cnf:IConfig):Development {
        this.watcher.exit(cnf)
        return this 
    }
}