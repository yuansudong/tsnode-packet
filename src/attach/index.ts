import { spawn, spawnSync,ChildProcessWithoutNullStreams } from "child_process";


export class Attach {
    private child!:ChildProcessWithoutNullStreams|null
    private isRestart:boolean
    private path:string
    private cwd:string
    constructor(cwd:string,path:string) {
        this.path =  path
        this.isRestart =  false
        this.cwd =  cwd
        this.init()
    }
    private init() {
        const [executer,...executerArgs] = this.path.split(" ")
        this.child = spawn(executer,executerArgs,{
            cwd:this.cwd
        }) 
        this.spawn().stdout().stderr().close()
    }
    private stdout():Attach {
        this.child?.stdout.on("data",(message)=>{
            console.log(message.toString())
         })
        return this;
    }

    private stderr():Attach {
        this.child?.stderr.on("data",(message)=>{
            console.log(message.toString())
         })
        return this;
    }
    private close():Attach {
        this.child?.on("close",(code,single)=>{
            console.log("task exit with ",code)
            this.child =  null
            if(this.isRestart) {
                // console.log("我执行了重启啊")
                // this.init()
                // this.isRestart = false
            }
            
        })
        return this 
    }
    private spawn():Attach {
        this.child?.on("spawn",()=>{
            console.log("进程启动成功")
        })
        return this 
    }
    
    public restart(cwd:string,path:string):Attach {
        this.path  = path
        this.cwd = cwd
        this.isRestart =  true
        if(this.child) {
            this.exit()
            
        }
            this.init()
        
        return this
    }
    public exit() {
        this.child?.kill()
    }
}