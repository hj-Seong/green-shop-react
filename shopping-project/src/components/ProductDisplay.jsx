import { Button, Col, Container, Row } from "react-bootstrap";

const ProductDisplay = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img src="" alt="" />
          </div>
        </Col>
        <Col>
          <div>
            <h1>물건이름</h1>
            <p>물건 설명</p>
            <p>색상 설명</p>
            <div> </div>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                구매
              </Button>
              <Button variant="light" size="lg">
                장바구니
              </Button><Button variant="light" size="lg">
                찜
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDisplay;
