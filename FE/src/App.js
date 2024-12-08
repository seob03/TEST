import Header from './components/Header';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NewsList from './pages/NewsList';
import NewsWrite from './pages/NewsWrite';
import './App.css';


function App() {
  let currentDate = new Date();
  let [title, setTitle] = useState([]); // 최종 입력값
  let [입력값, 입력값변경]=useState(''); // 실시간 입력값 받아오기

  function DeleteNews(i){
    let copy = [...title];
    copy.splice(i, 1);
    setTitle(copy);
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<NewsList/>}/>
        <Route path="/write" element={<NewsWrite/>}/>
      </Routes>
    </>
  );
}

export default App;
