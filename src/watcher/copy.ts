
/**
 * 
 * 
 * 文件拷贝监控器
 * 
 */

/***
 * 
 * 
 * typescript 实时编译监控器
 * 
 */



import { IConfig } from "../interface";
import * as chokidar from "chokidar"
import * as fs from "fs"
import * as path from "path"
import { DevelopmentCachePacketDir } from "../constant";
export class  CopytWatcher {
    constructor() {}
    private init(files:string[]) {   
        chokidar.watch(files,{
            ignored: [/node_modules/,/.ts$/,/(^|[\/\\])\../]
        }).on('change', (filepath:string) => {    
                const relative = path.relative(process.cwd(),filepath)       
                const targetPath = path.resolve(DevelopmentCachePacketDir,relative)
                // console.log("change",relative,targetPath)
                // 创建路径
                fs.mkdirSync(path.dirname(targetPath),{recursive:true})   
                
                // 拷贝文件到指定的路径
                fs.copyFileSync(filepath,targetPath)
                
        });   
    }
    public run(cnf:IConfig) {
        this.init(cnf.copy)
    }
    public exit(cnf:IConfig) {
        
    }
}





