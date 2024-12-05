import Header from './components/Header';
import {useState} from 'react';
import './App.css';

function App() {
  let currentDate = new Date();
  let [title, setTitle] = useState([]);
  let [입력값, 입력값변경]=useState('');

  function PostNews(){
    let copy = [...title];
    copy.unshift(입력값);
    setTitle(copy);
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
