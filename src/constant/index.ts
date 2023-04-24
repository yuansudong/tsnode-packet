import path from "path";
export const TscCli = path.resolve(process.cwd(),"node_modules/.bin/tsc")
export const CacheDir = path.resolve(process.cwd(),"node_modules/.cache/tsnode_packet")
export const DevelopmentCacheDir = path.resolve(CacheDir,"development")
export const DevelopmentCachePacketDir = path.resolve(DevelopmentCacheDir,"packet")


