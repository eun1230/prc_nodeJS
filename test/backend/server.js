const express = require('express');
const cors = require('cors');
const db = require('./database/db');

const app = express();
const port = process.env.PORT || 3001;

const server = require('http').createServer(app);
app.use(cors()); // CORS 설정

app.get('/api', (req, res) => {  // '/api' 경로로 변경
  res.send({ message: 'hello' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
