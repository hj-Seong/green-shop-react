import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BoardPage = () => {
    // params을 통해서 board의 boardId값 전달
    const {id} = useParams();
    // board의 내용을 출력하기위해 리덕스에서 값 가져오기
    const boardList = useSelector((state)=>(state.board))
    // board의 내용중에 하나만 찾아서 가져오기
    // 배열의 find( return 값 : 배열값중 하나만 추력)
    const board = boardList.find((board)=>(board.boardId == id))

    // useSeletor를 이용해서 가져올때 바로 find 사용하기.
    const boardFind = useSelector((state)=>(state.board.find((board)=>(board.boardId== id))) )

    return ( 
        <div>
            <h1>BoardPage입니다</h1>
            <p>{board ? board.content : "없는 페이지입니다"}</p>
            <p>{boardFind ? boardFind.content : "없는 페이지입니다"}</p>
        </div>
     );
}
 
export default BoardPage;