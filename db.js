const mysql = require('mysql2');

// Создаем подключение
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'asd'
});

module.exports = connection;