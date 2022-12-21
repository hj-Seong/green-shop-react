import { Col, Container, Row } from "react-bootstrap";

const BoardWriteFrom = () => {
    return ( 
        <Container>
            <Row>
                <Col xs={1} >
                    {board.boardId}
                </Col>
                <Col><h2>{board.title}</h2></Col>
                <Col>
                    <Button>수정</Button>
                    <Button onClick={()=>{onDeleteBoard(board.boardId)}}>삭제</Button>
                </Col>

            </Row>
            <Row>
                <Col>{board.userEmail}</Col>
            </Row>
            <Row className="my-4">
                <Col><h4>{board.content}</h4></Col>
            </Row>
            <Row>
                <Col><span>조회수 {board.view}</span></Col>
                <Col><span>좋아요 {board.like}</span></Col>
            </Row>

        </Container>
     );
}
 
export default BoardWriteFrom;