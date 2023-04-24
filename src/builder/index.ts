import { IBuilder, IConfig } from "../interface";
import { CopyFile } from "./copy";
import { Protobuffer } from "./protobuffer";
import { Typescript } from "./typescript";


const dict = new Map<string,IBuilder>([
    [ ".ts", new Typescript()],
    [ ".proto", new Protobuffer()], 
    [".copy",  new CopyFile()]
]) 




export function Handler(ext:string,cnf:IConfig):boolean {
    const instance = dict.get(ext)
    if (!instance) {
        return false
    }
    instance.build(cnf)
    return true 
}




export function All(cnf:IConfig) {
    dict.forEach((instance:IBuilder)=>{
        instance.build(cnf)
    })
}












