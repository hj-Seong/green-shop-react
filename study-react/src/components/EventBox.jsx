// 자주 사용하는 이벤트 확인
// 객체와 배열, 객체들을 가진 배열에 대한 내용
// map, filter > 자바스크립트의 메소드(함수) 

import { useEffect } from "react";
import { useState } from "react";

// 데이터 기능 > 자바스크립트의 메소드에서 확인
const EventBox = () => {
    const [changeName, setChangeName] = useState("");
    // state의 changname 받아옴
    const [clickName, setClickName] = useState(""); 
    // 변수 name을 받아옴
    const [varName, setVarName] = useState("");
    
    let name = "aa"; // 화면에 출력되지않고 많이 바뀌는 값들에 사용
    // 이 값을 화면에 출력하고싶다면 - state에 담아서 화면이 바뀌도록
    const funcName = (n)=>{name = n; console.log(name);};
    

    return ( 
        <div>
            <h3>이벤트 박스</h3>
            <h4> state로 작성한 이름 : {changeName}, 변수 이름 : {name} </h4>
            <input type="text" onChange={(e)=>{ setChangeName(e.target.value) }} />
            <button onClick={()=>{ setClickName(changeName)}} >state 값을 저장</button>
            <input type="text" onChange={(e)=>{ funcName(e.target.value) }} />
            <button onClick={()=>{ setVarName(name) }}>변수값을 가져와서 저장</button>
            <h4>state값을 가져와서 저장 : {clickName},변수값을 가져와서 저장:{varName} </h4>
        </div>
    );
}

export default EventBox;