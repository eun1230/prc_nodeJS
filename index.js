const express = require('express')
const app = express()
const port = 3000;

app.get('/', function (req, res) {
  //http메소드, 라우팅, 콜백함수
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  //http메소드, 라우팅, 콜백함수
  res.json({"강아지":"멍멍"})
})

app.get('/cat', function (req, res) {
  //http메소드, 라우팅, 콜백함수
  res.json({"고양이":"야옹"})

})

app.get('/user/:id', function (req, res) {
  //변수로 받는 두가지 방법 
  
  // 파라미터로 받는 법 
  // const q = req.params
  // console.log(q.id);

  //쿼리로 받는법
  const q = req.query
  console.log(q)
  res.json({})
})

app.listen(port, ()=>{
  console.log(`app listening on port ${port}`)
}
); // 3000번을 듣고있을 때 get을 실행할 수 있다는 뜻