// 초기값
// 로그인여부를 알아보기 위해 초기값을 null
// 안에 [], {}를 넣어두면 값이 있다고 판다
/**
 * 
 */
const initalState = null 


// 리듀서 - switch 문으로 작성
function currentUser( state=initalState, action) {
    switch(action.type) {
        case "userLogin":
            // 비동기의 내용은 컴포넌트에서 실행한 후, 리덕스로 들고옴
            // *비동기를 미들웨어(tunck를 이용하여 진행할 수 있다)

            // 구글인증을 통해서 가져온 값은 객체를 통해서 가져온다
            // 그 값을 통째로 넣어준다면, 받아온 값을 그대로 넣어주면 된다
            // > 그 값을 그대로 넣어주기 보다는 
            // 그 안에 있는 값중에 필요한것만 골라서 넣는게 좋다
            return action.payload
        default :
            return state
    }
}
// 액션함수
export const userLogin = (user)=> ({type:"userLogin", payload :user})

export default currentUser;