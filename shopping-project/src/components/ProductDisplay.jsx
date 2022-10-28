import { Button, Col, Container, Row } from "react-bootstrap";

const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img src={require(`../img/${product.productPicture}`)} alt="" />
          </div>
        </Col>
        <Col>
          <div>
            <h1>{product.productName}</h1>
            <p>{product.productDetail}</p>
            <p>색상 설명</p>
            <div>
              {
                // productColor에 있는 color 값을 백그라운드로 사용
                product.productColor.map((color)=>(
                  <div className="m-2" style={{ display:"inline-block", 
                                width: "30px", height:"30px", 
                                backgroundColor: color,
                                border : "3px solid lightgrey"
                              }}></div>
                )) 
              }
            </div>
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
