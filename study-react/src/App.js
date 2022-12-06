import logo from './logo.svg';
import './App.css';
import StateBox from './components/StateBox';
import PropsParent from './components/PropsParent';
import TestState from './components/TestState';
import EventBox from './components/EventBox';
import TestEvent from './components/TestEvent';
import EventOBJ from './components/EventOBJ';
import Hook from './components/Hook';
import TestHook from './components/TestHook';
import APIComp from './components/APIComp';
import TestAPI from './components/TestAPI';

// App안에 원하는 내용을 바로 작성할 수 있지만
// 각 내용을 컴포넌트로 만들어서 화면에 출력을 하고 있다
// 빈 컴포넌트를 먼저 만들고 App으로 불러와서 화면보고 작성
function App() {
  // fuction App 안에서는 자바스크립트의 내용을 자유롭게 쓸수 있다

  // return은 렌더될 html의 내용+ {}를 통해서 자바스크립트 함께 사용
  // return 안에서 실행순서는 위에서 아래로 실행이 된다
  // *오류가 났을 때 전체가 출력이 되지 않는다

  // return 안에 원하는 컴포넌트를 넣어서 확인하면서 공부하시면됩니다
  return (
    <div className="App">
      <TestAPI />
    </div>
  );
}

// export를 통해서 모듈 형식으로 함수나 변수를 내보내줄수 있다
// default가 붙게되면 {} 없이 들고올 수 있다
// export로만 내보내주면 {}를 통해서 값을 들고올 수 있다
export default App;

