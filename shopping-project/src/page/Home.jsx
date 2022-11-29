import { Col, Container, Row } from "react-bootstrap";
// 슬릭 라이브러리 추가
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";


const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
  };
	const {state} = useContext(DataContext)
  return (
    <div>
      <Container>
        <Row >
          <Col >
          <div style={{  textAlign: "center"}}>
          <Slider {...settings} >
              { state.productList.map((product)=>(
								<div >
									<ProductCard key={product.productId} product={product} />
								</div>
							))}
            </Slider>
          </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
		<FontAwesomeIcon
      icon={faChevronRight}
			className={className}
			onClick={onClick}
			style={{color:"#0d6efd"}}
		></FontAwesomeIcon>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
		<FontAwesomeIcon 
			icon={faChevronLeft}
			className={className}
			onClick={onClick}
			style={{color:"#0d6efd", left:"50em" ,zIndex:"100"}}
		/>
  );
}
