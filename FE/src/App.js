import Header from './components/Header';
import {useState} from 'react';
import './App.css';


function App() {
  let currentDate = new Date();
  let [title, setTitle] = useState([]); // 최종 입력값
  let [입력값, 입력값변경]=useState(''); // 실시간 입력값 받아오기

  function PostNews(){
    let copy = [...title];
    copy.unshift(입력값);
    setTitle(copy);
    fetch('http://localhost:8080/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 입력값 })
    })
    .then(response => response.json())
    .then(data => {
      console.log('서버 응답:', data);
    })
    .catch(error => {
      console.error('fetch 오류:', error);
    });
  }

  function DeleteNews(i){
    let copy = [...title];
    copy.splice(i, 1);
    setTitle(copy);
  }

  return (
    <div className="App">
      <Header/>
      <div>
        {currentDate.getMonth()+1}월의 신상
      </div>
      {
        title.map(function(a,i){
          return (
            <div className="list" key={i}>
              <h4>
                {title[i]}
              </h4>
              <button onClick={()=> DeleteNews(i)}>삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} type="text"/>
      <button onClick={PostNews}>글쓰기</button>
    </div>
  );
}

export default App;
