import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const CommentInput = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={10} >
            <FloatingLabel 
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
          </Col>
          <Col xs={2} className="d-grid gap-2">
            <Button variant="primary">입력</Button>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default CommentInput;
