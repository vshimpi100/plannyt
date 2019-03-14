var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.plannyt-mysql-db.c2q1r4wmafxb.us-east-1.rds.amazonaws.com,
  user     : process.env.gt_bootcamp_2019,
  password : process.env.GeorgiaTech_2019,
  port     : process.env.port || 3306,
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();