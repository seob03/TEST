import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function Detail(props) {
    let { id } = useParams();
    console.log(id)
    // 페이지 결과를 상태로 관리
  const [pageResult, setPageResult] = useState([]);

  useEffect(() => {
    // fetch 요청
    fetch('/detail/' + id)
      .then((response) => response.json())
      .then((result) => {
        // 상태 업데이트
        setPageResult(result);
        console.log(result); // 데이터를 콘솔에 출력
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]); // id가 바뀔 때마다 요청을 다시 보냄
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    디테일 페이지임
                    <h4 className="pt-5">{pageResult.title}</h4>
                    <p>{pageResult.content}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;