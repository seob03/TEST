import {useState} from 'react';

function NewsWrite() {
    let [입력값, 입력값변경]=useState(''); // 실시간 입력값 받아오기

    function PostNews(){
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

    return (
        <>
            <div>글쓰기페이지</div>
            <input onChange={(e) => {
                입력값변경(e.target.value);
            }} type="text"/>
            <button onClick={PostNews}>글쓰기</button>
        </>
    );
}

export default NewsWrite;