/** 현재 페이지는 라우터의 내용을 정리하기 위한 컴포넌트
 * 아래 내용에 BrowserRouter와 Routes를 정리
 * 아래 내용을 app.js와 index.js에 분리해서 넣어도 상관없다
 */
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';

const RootIndex = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                {/** Route를 통해서 주소와 컴포넌트 연결 */}
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>

     );
}
 
export default RootIndex;