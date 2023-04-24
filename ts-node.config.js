
const path = require("path")

module.exports = {
    watch: {rootdir:process.cwd()},
    outdir:path.resolve(__dirname,"./cli"),
    copy:[
       path.resolve(__dirname,"./package.json"),
       path.resolve(__dirname,"./package-lock.json"),
    ],
    script:{
        dev:"node index.js"
    },
    exclude:["node_modules"]

}