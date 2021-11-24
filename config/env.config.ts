import fs from 'fs'
import path from 'path'
let rawdata: any = fs.readFileSync(path.resolve(__dirname, 'config.json'));
let config = JSON.parse(rawdata);

config = config[process.env.NODE_ENV as string]

let DATABASE_MYSQL = {
    database: "dinas-pu",
    username: "admin",
    password: "admin",
    host: "localhost",
    port: 3306,
    logging: true,
    dialect: "mysql",
}

if (config) {
    DATABASE_MYSQL = {
        ...config
    }
}

const SECRET_KEY = "R/<#YC9>yX.$~1j$c}B`DOa'AJ[km#!u:JKu.Mk`Mbcs9+Z5!?{a_ZDTkF6a"
export { DATABASE_MYSQL, SECRET_KEY }