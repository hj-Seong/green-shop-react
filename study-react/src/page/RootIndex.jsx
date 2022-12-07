/** 현재 페이지는 라우터의 내용을 정리하기 위한 컴포넌트
 * 아래 내용에 BrowserRouter와 Routes를 정리
 * 아래 내용을 app.js와 index.js에 분리해서 넣어도 상관없다
 */
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './About';
import AboutMain from './AboutMain';
import AboutTest from './AboutTest';
import Home from './Home';

const RootIndex = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                {/** Route를 통해서 주소와 컴포넌트 연결 */}
                {/** http://localhost:3000/ 의 가장 처음 위치 
                 * http://localhost:3000/ 기본위치를 두고 path의 내용을 붙여서 이동
                */}
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About />}>
                    <Route path='/about/test' element={<AboutTest />}>
                         {/** 중첩된 Route는 outlet을 통해 계속 보여줄수 있다 */}
                         <Route path='/about/test/outlet' element={<AboutTest/>}></Route>
                    </Route>
                    <Route path='/about/main' element={<AboutMain />}></Route>
                    {/** 기본주소로 들어왔을때 가장 처음 위치 : index
                     * 기본주소 : 자신을 감싸고 있는 path
                     */}
                    <Route index element={<AboutMain/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

     );
}
 
export default RootIndex;