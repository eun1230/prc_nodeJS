const mysql = require("mysql2");

const conn  = mysql.createConnection({
  host:'localhost',
  port:'3000',
  user:'user',
  password:'비밀번호',
  database:'my_db'
})

conn.connect((err)=>{
  if(err) console.log(err);
  else console.log('Connected to the db');
});

module.exports = conn;