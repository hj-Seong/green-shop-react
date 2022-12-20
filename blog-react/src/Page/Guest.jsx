import { useState } from "react";

const Guest = () => {
    const [name, setName] = useState("익명");
    const [text, setText] = useState();

    return ( 
        <div>
            <h3>글을 쓰는 공간</h3>
            <label htmlFor="">이름</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
            <label htmlFor="">작성할 내용</label>
            <textarea onChange={(e)=>{setText(e.target.value)}}></textarea>
            {/** 버튼을 클릭했을때 리듀서에 내용을 추가 */}
            <button >작성</button>
            <hr />
            <h3>글 쓴 내용을 출력하는 공간</h3>
        </div>
     );
}
 
export default Guest;