import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addBoard, modifyBoard } from "../modules/board";

import Editor from "@toast-ui/editor";

import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect } from "react";
import { useRef } from "react";

const BoardAddFrom = () => {

  // 로그인정보 중에서 이메일값
  const userEmail = useSelector((state) => state.currentUser.email);
  console.log(userEmail);

  // 새로운 데이터를 담을 Board
  // 미리 객체 형식으로 작성 : 객체로 속성을 접근하면 결과값 undefined가 나옴
  const [board, setBoard] = useState({ userEmail });
  // 에디터의 값을 받아오는 공간
  const [content, setContent] = useState("")
  
  // 리덕스의 dispatch
  const dispatch = useDispatch();
  // 라우터의 navigate
  const navigate = useNavigate();

  // 값을 수정했을때 board의 내용을 수정하는 함수
  const onChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value});
    console.log(board)
  };
  // 에디터에 넣기위한 함수
  const onChangeEditor = () => {
    setContent(editerContent.current.firstChild.firstChild.nextSibling.lastChild.lastChild.lastChild.lastChild.innerHTML);
  };

  // 글쓰기 완료 버튼을 눌렸을 실행하는 함수
  const onAddBoard = () => {
    // 에디터에서 가져오는 값을 따오 가져와서 추가함
    dispatch(addBoard({
      ...board,
      content : content
    }));
    navigate("/board");
  };

  //토스트 에디터 가져옴
  //const Editor = toastui.Editor;
  // toastUI에서 값을 가져오기위해 ref를 사용
  const editerContent = useRef();
  useEffect(() => {
    const editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType :"wysiwyg",
      hideModeSwitch: true,
      initialValue : "글을 작성해주세요",
      events: {
        change: onChangeEditor
      },
    });
    
  }, []);


  return (
    <Container>
      <Row>
        <Col>
          <Form.Control
            name="title"
            value={board.title}
            onChange={(e) => {
              onChange(e);
            }}
          ></Form.Control>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <div id="editor" ref={editerContent} onChange={(e) => {
              onChange(e);
            }}>
            
          </div>
        </Col>
      </Row>

      <Row className="mt-2 ">
        <Col className="justify-content-end">
          <Button
            onClick={() => {
              navigate("/board");
            }}
          >
            취소
          </Button>
          <Button onClick={onAddBoard}>글쓰기완료</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BoardAddFrom;
