var mysql = require('mysql')
var connection = mysql.createPool({

    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'livre-express'
})

module.exports = connection