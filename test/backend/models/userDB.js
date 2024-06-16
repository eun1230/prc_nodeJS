// userDB.js

const db = require('../db'); // db.js 파일의 상대 경로에 따라 경로를 수정해야 합니다.

// 사용자 생성
exports.createUser = (userData, callback) => {
  const { u_id, id, pw } = userData;
  const sql = 'INSERT INTO users (u_id, id, pw) VALUES (?, ?, ?)';
  db.query(sql, [u_id, id, pw], (err, result) => {
    if (err) {
      return callback(err);
    }
    return callback(null, result);
  });
};

// 사용자 조회
exports.getUserById = (userId, callback) => {
  const sql = 'SELECT * FROM users WHERE u_id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      return callback(err);
    }
    if (results.length > 0) {
      return callback(null, results[0]);
    }
    return callback(null, null); // 사용자가 없는 경우
  });
};

// 기타 사용자 관련 데이터베이스 작업을 추가할 수 있습니다.
