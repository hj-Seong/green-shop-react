import { useState } from "react";

const TestAPI = () => {
    const [news, setNews] = useState();
    
    const getData = async (country) => {
        const url = "https://newsapi.org/v2/top-headlines/sources?"+
                    "category=business&"+
                    "country="+country+
                    "&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
        // 위의 주소를 이용하여 버튼을 누를 때마다 
        // 다른 나라의 값을 받아올 수 있도록 작성하세요
    }
    
    return (
        <div>
            <h1>뉴스 API 확인</h1>
            <p>버튼을 누를 때 관련 나라의 기사 가져오기</p>
            {/* 필요한 값을 전달하여 url의 내용을 채울수 있게 작성하세요 */}
            <button onClick={ ()=>{getData()} }>us</button>
            <button onClick={ ()=>{getData()} }>fr</button>
            {/** 아래에 map을 이용하여 기사를 출력하세요 */}
            {}
        </div>
     );
}

export default TestAPI;