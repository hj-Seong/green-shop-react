import { useSelector } from "react-redux";

const Board = () => {
  const boardList = useSelector((state) => state.board);
  return (
  <div>
    { boardList.map((board)=>(
        <h1>{board.boardId}</h1>
    ))}
  </div>);
};

export default Board;
