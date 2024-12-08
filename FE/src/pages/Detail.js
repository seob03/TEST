import { useParams } from "react-router-dom";

function Detail(props) {
    let { id } = useParams();
    let id_match = [{title : "제모옥은", content : "내요옹은"}];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    디테일 페이지임
                    <h4 className="pt-5">{id_match.title}</h4>
                    <p>{id_match.content}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;