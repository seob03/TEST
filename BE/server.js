const express = require('express')
const app = express()
app.set('view engine', 'ejs') // ejs 사용
app.use(express.static('public')); // 웹 서버가 public 서빙 제대로 하도록
// 요청.body 지원
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// reacr 연동
const path = require('path')
app.use(express.static(path.join(__dirname,'../FE/build')))
// 클라이언트-서버 포트 요청 열기
const cors = require('cors');
app.use(cors());
const { MongoClient } = require('mongodb') // 몽고 DB

app.listen(8080, () => {
  console.log('http://localhost:8080 에서 서버 실행중')
})
let db
const url = 'mongodb://127.0.0.1:27017'

new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
}).catch((err)=>{
  console.log(err)
})

app.get('/',  async (요청, 응답) => {
  응답.sendFile(path.join(__dirname, '../FE/build/index.html'))
})

app.post('/add', async (요청, 응답) => {
  console.log(요청.body)
  let result = await db.collection('post').insertOne( { title : 요청.body.title } )
})