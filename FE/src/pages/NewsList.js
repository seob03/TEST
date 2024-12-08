import {useState, useEffect} from 'react';

function NewsList(){
    let [postData, setpostData] = useState([]); // 최종 입력값
    // 백엔드에서 데이터 가져오기 (MS)
    useEffect(() => {
      fetch('/getDatabase')
        .then((response) => response.json())
        .then((result) => {
          setpostData(result);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        }, []);
    }, []);  // 컴포넌트가 마운트될 때 한 번만 실행

    return (
    <>
      <div>리스트 페이지임</div>
        {
            postData.map(function(a,i){
              return (
                <div className="list" key={i}>
                  <h4 onClick={()=>{let postId = postData[i]._id}}>
                    {postData[i].title}
                    {postData[i].content}
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