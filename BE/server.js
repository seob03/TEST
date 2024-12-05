const express = require('express')
const app = express()
app.set('view engine', 'ejs') // ejs 사용
app.use(express.static('public')); // 웹 서버가 public 서빙 제대로 하도록
// 요청.body 쓸 수 있게
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const { MongoClient } = require('mongodb')

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

app.get('/', (요청, 응답) => {
  응답.send('메인 페이지 입니다.')
  db.collection('post').insertOne({title : "ㅎㅇ?"})
})

app.get('/list', async (요청, 응답) => {
  let result = await db.collection('post').find().toArray()
  응답.render('list.ejs', { 글목록 : result })
})

app.get('/write', async (요청, 응답) => {
  let result = await db.collection('post').find().toArray()
  응답.render('write.ejs')
})

app.post('/add', async (요청, 응답) => {
  await db.collection('post').insertOne({ title : 요청.body.title, content : 요청.body.content })
  응답.send('게시글 등록 끝')
})