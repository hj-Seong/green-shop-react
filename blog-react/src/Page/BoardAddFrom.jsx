import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addBoard, modifyBoard } from "../modules/board";

const BoardAddFrom = () => {
    // 로그인정보 중에서 이메일값
    const userEmail = useSelector((state)=>state.currentUser.email);
    console.log(userEmail)

    // 새로운 데이터를 담을 Board 
    // 미리 객체 형식으로 작성 : 객체로 속성을 접근하면 결과값 undefined가 나옴
    const [board, setBoard] = useState({userEmail});

    // 리덕스의 dispatch
    const dispatch = useDispatch();
    // 라우터의 navigate
    const navigate = useNavigate();

    // 값을 수정했을때 board의 내용을 수정하는 함수
    const onChange = (e) => {
        setBoard({...board, [e.target.name]: e.target.value})
    }
    // 글쓰기 완료 버튼을 눌렸을 실행하는 함수
    const onAddBoard = () => {
        dispatch(addBoard(board));
        navigate('/board');
    }

    return ( 
        <Container>
            <Row>
                <Col>
                    <input
                        name="title" 
                        value={board.title} 
                        onChange={(e)=>{onChange(e)}}>
                    </input>
                </Col>


            </Row>
            <Row>
                <Col>{board.userEmail}</Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <textarea 
                        name="content"
                        onChange={(e)=>{onChange(e)}}>
                        {board.content}
                    </textarea>
                </Col>

            </Row>
            <Row>
                <Col>
                    <Button onClick={()=>{navigate('/board')}}>취소</Button>
                    <Button onClick={onAddBoard}>글쓰기완료</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default BoardAddFrom;