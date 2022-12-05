const {createPool} = require("mysql");

const pool = createPool({
    port : process.env.DB_PORT,//3306
    host : process.env.DB_HOST,//localhost
    user : process.env.DB_USER,//root
    password : process.env.DB_PASS,//''
    database : process.env.MYSQL_DB,//test
    connectionLimit : 10,
})

module.exports = pool;