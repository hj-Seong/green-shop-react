import { useState } from "react";

const BookBox = () => {
    const [input, setInput] = useState("");
    //useSelector를 이용해서 값을 가져오기

    //useDispatch를 이용해서 dispatch 가져오기

    return ( 
        <div>
            {/** 책 제목과 금액을 출력하세요 */}
            <input type="text" onChange={(e)=>{ setInput(e.target.value)}}/>
            {/** button에 onClick을 이용하여 값을 전달하세요 
             * 리덕스의 값은 onChange 를 통해 바꾸기 보단, 
             * 값이 정해졌을때 onClick을 통해 한번에 바꿀수있도록하는게 좋다
            */}
            <button >제목 수정</button>
        </div>
     );
}
 
export default BookBox;