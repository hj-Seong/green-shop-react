// 초기값 - 원하는 변수값을 다 넣을수 있음.
// 여러개의 값을 사용하기 때문에 객체
const initalState = {
    number : 0,
}

// 값을 수정 또는 사용하는 리듀서 함수
// 함수의 매개변수로 들어갈 값 : state와 action
function number(state=initalState, action) {
    // switch문을 사용해서 action.type 따른
    // 코드를 작성
    switch (action.type) {
        case "increase":
            // increase 액션이 발생했을 때, 값을 1증가
            // return 을 통해서 값이 바뀐 state를 전달
            // ...(스프레드 연산자)를 통해서 그대로 들고옴
            // 이때 접근하는 state는 
            // 현재 number.js에서 작성한 initalState이다
            return {...state, number : state.number +1 }
        default :
            return state;
    }
}

// 리듀서함수 number를 modules/index.js에 연결하기 위해 내보내줌
export default number;