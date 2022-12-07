import { BrowserRouter } from "react-router-dom";

const TestRootIndex = () => {
    return ( 
        <BrowserRouter>
            {/** path='/' 에 Home 컴포넌트를 출력*/}
            {/** path='board'에 Board 컴포넌트 출력 */}
            {/** path= '/board/' 에 params 값으로 page을 사용하여 
             *   BoardPage 컴포넌트 출력 - Board/BoardPage 컴포넌트 수정필요
             *   아울렛 사용*/}
            {/** path= '/board/' 에 params 값으로 page와 num을 사용하여 
             *   BoardNumPage 컴포넌트 출력
             *  - BoardNumPage 컴포넌트를 새로 생성 후 page와 num 출력
             *   아울렛 사용하지않음*/}
            
        </BrowserRouter>
     );
}
 
export default TestRootIndex;