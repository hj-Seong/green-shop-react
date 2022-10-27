// css 파일 import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 라이브러리 컴포넌트 import
import {Routes, Route} from 'react-router-dom'
import Layout from './page/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
