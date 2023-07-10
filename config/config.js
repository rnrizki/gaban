const mysql = require('mysql')
const con = mysql.createPool({
    connectionLimit: 500,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
})


con.getConnection((err) => {
    if (err) {
        console.log({
            err: err,
            msg: "Database connected error"
        })
        return
    } else {
        console.log('Database has been connected')
    }
})

module.exports = con