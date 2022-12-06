// 데이터 API를 통해서 값을 뉴스 데이터를 가져오는 컴포넌트
// 데이터 API의 특징
// - 데이터를 가져오기위해 Ajax를 사용하여 
//   비동기로 값을 가져와서 사용 (http객체, fetchAPI, axios)

import { useEffect } from "react";
import { useState } from "react";

const APIComp = () => {
    // news를 저장할 공간 state
    const [news, setNews] = useState();
    // api의 내용이 많을 시 그 값이 빨리 전달이 되지않을때가 있기에
    // 그 값이 왔을때 제어하기 위한 state
    const [newsloading, setNewsloading] = useState(false);

    useEffect(()=>{
        // 시작하자마자 값을 들고오기 위해 useEffect에 작성
        // 비동기함수로 작성 async / 기다려야할 함수 await
        // 
        const getData = async () => {
            // fetch는 주소를 통해서 값을 가져오기 때문에 await를 써서 값을 들고 온다
            // await를 쓰지않으면 Promise데이터로 들고오게 된다.
            // Promise는 값을 가져오겠다고 약속한 데이터 형식
            //  => then, await 을 이용하여 값을 가져와서 사용
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
            console.log(response);
            const body = await response.json();
            console.log(body);
            setNews(body);
            // useState에 들어가는 값이 클 때, 
            // 바로 반영이 되지않는 경우가 있다
            console.log(news);
            
            // 그 값이 들어올 때까지 기다림
            if (!news) {
                setNewsloading(true)
                console.log("내용이 들어왔습니다")
            }
        }
        getData();
    },[newsloading])

    return ( 
        <div>
            <h1>API 컴포넌트입니다</h1>
            {/** 리액트는 객체 형식을 바로 출력할 수 없다
             *  >> 객체 형식이 아닌 문자열이나, 숫자를 출력
             */}
            {/** 
             * 리액트는 undefined에서 값을 찾을 수 없다
             *  : 외부값이 들어오기 전에는 undefined가 들어가있다
             *  ex) 값이 들어가있지 않을때 속성에서 값을 찾아오려고함
             *  >> 삼항 연산자를 사용해서 값이 있을 때만 접근할 수 있게
            */}
            {/** news를 조건식으로 넣으면, 
             * 값이 있을 때 : true, 값이 없을때 false */}
            { news ? news.status
                    : "값이 아직 오지 않았습니다" }
            {/** 실습 : articles의 0번째 인덱스의 title출력   */}
            <h3>
                { news ? news.articles[0].title
                    : "값이 아직 오지 않았습니다" }
            </h3>
        </div>
    );
}

export default APIComp;