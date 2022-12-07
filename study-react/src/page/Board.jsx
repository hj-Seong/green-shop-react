import { Link, Outlet } from "react-router-dom";

const Board = () => {
    return ( 
        <div>
            <h1>Board 페이지입니다</h1>
            <Link></Link>
            <Outlet />
        </div>
     );
}
 
export default Board;