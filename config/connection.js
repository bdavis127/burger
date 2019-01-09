//Requiring MySQL
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql1234',
        database: 'burger_db'
    });
};

// Make connection
connection.connect(function(err) {
    if (err) {
        console.log('error connecting to database', err);
    } else {
        console.log('connected to database')
    }
});

// Export connection for ORM
module.exports = connection;