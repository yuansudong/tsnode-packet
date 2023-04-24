
import * as fs from "fs"
import * as path from "path"
import { IConfig } from "../interface";


export class CopyFile {
    constructor() {

    }
    public build(cnf:IConfig) {
        const cwd =  process.cwd()
        cnf.copy.forEach((filepath:string)=>{
            const relativePath =  path.relative(cwd,filepath)
            const targetPath = path.resolve(cnf.outdir,relativePath)
            // 创建路径
            fs.mkdirSync(path.dirname(targetPath),{recursive:true})   
            // 拷贝文件到指定的路径
            
            fs.copyFileSync(filepath,targetPath)
        })
    }

}