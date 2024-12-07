import {useState} from 'react';

function NewsList(){
    let [title, setTitle] = useState(['글하나임']); // 최종 입력값

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