import {useState} from 'react';

function NewsWrite() {
    let [제목, 제목변경]=useState(''); // 실시간 입력값 받아오기
    let [내용, 내용변경]=useState(''); // 실시간 입력값 받아오기

    function PostNews(){
        fetch('/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 제목, content: 내용 })
        })
        .then(response => response.json())
        .then(data => {
        console.log('서버 응답:', data);
        })
        .catch(error => {
        console.error('fetch 오류:', error);
        });
    }

    return (
        <>
            <div>글쓰기페이지</div>
            <input onChange={(e) => {
                제목변경(e.target.value);
            }} type="text"/>
            
            <input onChange={(e) => {
                내용변경(e.target.value);
            }} type="text"/>
            <button onClick={PostNews}>글쓰기</button>
        </>
    );
}

export default NewsWrite;