import {useState, useEffect} from 'react';

function NewsList(){
    let [title, setTitle] = useState([]); // 최종 입력값
    // 백엔드에서 데이터 가져오기
    useEffect(() => {
      fetch('/getDatabase')
        .then((response) => response.json())
        .then((result) => {
          let copy = new Array()
          for (let i = 0; i < result.length; i++){
            copy[i] = result[i].title
          }
          setTitle(copy);  // 응답받은 데이터를 title 상태에 저장
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);  // 컴포넌트가 마운트될 때 한 번만 실행
    console.log(title);
    return (
    <>
      <div>리스트 페이지임</div>
        {
            title.map(function(a,i){
              return (
                <div className="list" key={i}>
                  <h4>
                    {title[i]}
                  </h4>
                  {/* <button onClick={()=> DeleteNews(i)}>삭제</button> */}
                </div>
              )
            })
        }
    </>
    );
}

export default NewsList;