import { IConfig, IEnvironment } from "../interface"
import { Development } from "./development"
import { Production } from "./production"


const dict =  new Map<string,IEnvironment>([
   ["development",new Development()],
   ["production",new Production()]
])


export const Runner = (key:string,cnf:IConfig):boolean=>{
    const instance = dict.get(key)
    if (!instance) return false
    instance.run(cnf)
    return true
}





