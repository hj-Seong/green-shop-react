import { useDispatch, useSelector } from "react-redux";
import { increase } from "./modules/number";

const NumberBox = () => {
    const num = useSelector((state)=>(state.number.num));
    const dispatch = useDispatch();
    return ( 
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{dispatch( increase() )}}>1증가</button>
        </div>
     );
}
 
export default NumberBox;