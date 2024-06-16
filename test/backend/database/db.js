const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: 'localhost',
  port: '3307', // MySQL 컨테이너에서 사용하는 포트로 설정
  user: 'root', // MySQL root 사용자
  password: 'my-secret-pw', // MySQL root 비밀번호
  database: 'testdb' // 연결할 데이터베이스 이름
});

conn.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = conn;
