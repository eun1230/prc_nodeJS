const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors()); // cors 가 있어야 front에서 요청에 응답이 가능!!!! 없으면 cors에러난다.


app.get('/', function (req, res) {
  //http메소드, 라우팅, 콜백함수
  res.send('Hello World');
});

// app.get('/dog', function (req, res) {
//   //http메소드, 라우팅, 콜백함수
//   res.json({"강아지":"멍멍"})
// })

// app.get('/cat', function (req, res) {
//   //http메소드, 라우팅, 콜백함수
//   res.json({"고양이":"야옹"})

// })

app.get('/user/:id', function (req, res) {
  //변수로 받는 두가지 방법

  // 파라미터로 받는 법
  // const q = req.params
  // console.log(q.id);

  //쿼리로 받는법
  const q = req.query;
  console.log(q);
  res.json({});
});

app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  if (name == 'dog') {
    res.json({ sound: '멍멍' });
  } else if (name == 'cat') {
    res.json({ sound: '야옹' });
  } else if (name == 'pig') {
    res.json({ sound: '꿀꿀' });
  } else {
    res.json({ sound: '찾을 수 없습니다' });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
}); // 3000번을 듣고있을 때 get을 실행할 수 있다는 뜻
