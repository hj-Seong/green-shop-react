import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modifyBoard } from "../modules/board";

import Editor from "@toast-ui/editor";

import { useEffect } from "react";
import { useRef } from "react";

const BoardWriteFrom = () => {
  //navigate를 통해서 값을 보내주고 state에 사용
  const location = useLocation();
  const [board, setBoard] = useState(location.state);

  // 에디터의 값을 받아오는 공간
  const [content, setContent] = useState(board.content);

  // 리덕스의 dispatch
  const dispatch = useDispatch();
  // 라우터의 navigate
  const navigate = useNavigate();

  // 값을 수정했을때 board의 내용을 수정하는 함수
  const onChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };
  // 수정완료 버튼을 눌렸을 실행하는 함수
  const onModifyBoard = () => {
    dispatch(
      modifyBoard({
        ...board,
        content: content,
      })
    );
    navigate("/board/" + board.boardId);
  };

  // 에디터에 넣기위한 함수
  const onChangeEditor = () => {
    setContent(
      editerContent.current.firstChild.firstChild.nextSibling.lastChild
        .lastChild.lastChild.lastChild.innerHTML
    );
  };

  //토스트 에디터 가져옴
  //const Editor = toastui.Editor;
  // toastUI에서 값을 가져오기위해 ref를 사용
  const editerContent = useRef();
  useEffect(() => {
    const editor = new Editor({
      el: document.querySelector("#editor"),
      height: "500px",
      initialEditType: "wysiwyg",
      hideModeSwitch: true,
      initialValue: board.content,
      events: {
        change: onChangeEditor,
      },
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={1}>{board.boardId}</Col>
        <Col>
          <input
            name="title"
            value={board.title}
            onChange={(e) => {
              onChange(e);
            }}
          ></input>
        </Col>
        <Col>
          <Button onClick={onModifyBoard}>수정완료</Button>
        </Col>
      </Row>
      <Row>
        <Col>{board.userEmail}</Col>
      </Row>
       <Row className="mt-2">
        <Col>
          <div id="editor" ref={editerContent} onChange={(e) => {
              onChange(e);
            }}>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BoardWriteFrom;
