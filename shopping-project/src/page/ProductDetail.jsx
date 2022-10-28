import { useEffect } from "react";
import { useContext, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import ProductDisplay from "../components/ProductDisplay";
import DataContext from "../context/DataContext";

const ProductDetaile = () => {
    const data = useContext(DataContext);
    const [product, setProduct ] = useState("");
    const [comments, setComments] = useState("");

    const {id} = useParams();

    // 마운트 하자마자 값을 들고와서 출력함
    useEffect(()=>{

    });

    const getProduct = () => { return data.state.productList.find((product)=>(product.productId == id)) }

    return (  
        <div>
            <ProductDisplay product={ getProduct() }/>
            <br></br>
            <hr />
            <CommentInput />
            <ListGroup style={{textAlign : "left"}}>
                <Comment />
            </ListGroup>

        </div>
        );
}

export default ProductDetaile;