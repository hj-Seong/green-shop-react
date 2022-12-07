import { useParams } from "react-router-dom";

const BoardPage = () => {
    // 주소를 통해 전달해준 params 값을 가져와서 사용할수 있다
    // params 안에 객체 형태로 들어있기 때문에, 
    // 구조화 할당을 통해서 사용가능
    const {page} = useParams();
    return ( 
        <div>
            board의 {page}페이지입니다
        </div>
     );
}
 
export default BoardPage;