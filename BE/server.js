// express 사용
const express = require('express')
const app = express()
app.set('view engine', 'ejs') // ejs 사용
app.use(express.static('public')); // 웹 서버가 public 서빙 제대로 하도록
// 요청.body 지원
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// react 연동
const path = require('path')
app.use(express.static(path.join(__dirname,'../FE/build')))
// 클라이언트-서버 포트 요청 열기
const cors = require('cors');
app.use(cors());
const {ObjectId} = require('mongodb') // URL 파라미터에서 ObjectId 사용하기 위함

let connectDB = require('./database.js') //database.js 파일 경로

let db
connectDB.then((client)=>{	// 이 부분 수정된 것
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
  })
}).catch((err)=>{
  console.log(err)
})

// 데이터베이스에서 데이터를 가져오는 API
app.get('/getDatabase', async (요청, 응답) => {
  try {
    let result = await db.collection('post').find().toArray();
    console.log(result);
    응답.json(result);  // 프론트엔드로 JSON 데이터 응답
  } catch (error) {
    응답.status(500).send('Database error');
  }
});

app.get('/detail/:id', async (요청, 응답) => {
  console.log("URL 파라미터 값" + 요청.params)
  let detailPage = await db.collection('post').findOne({_id : new ObjectId(요청.params.id)})
  응답.json(detailPage);
})

app.get('/',  async (요청, 응답) => {
  응답.sendFile(path.join(__dirname, '../FE/build/index.html'))
})

app.get('/write',  async (요청, 응답) => {
  응답.sendFile(path.join(__dirname, '../FE/build/index.html'))
})

app.post('/add', async (요청, 응답) => {
  console.log(요청.body)
  let result = await db.collection('post').insertOne( { title : 요청.body.title , content : 요청.body.content} )
})