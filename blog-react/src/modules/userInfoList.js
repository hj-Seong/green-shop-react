// 구글인증에서 가져온 이메일과 
// 저장된 이메일을 비교하여 like 값을 저장, 
// 또는 가져오는 리덕스

// 초기값
const initalState = [
    { 
        userEmail : "hjseong1222@naver.com",
        like : [] // board의 id와 title가진 객체 
    }
]

// 리듀서
function userInfoList( state = initalState, action) {
    switch ( action.type ) {
        case "addUserInfo":
            // email을 받아옴, like =[] 생성
            const newUser = { 
                userEmail : action.payload,
                like : []
            }
            return state.concat(newUser); 
        default:
            return state;
    }
}

// 액션함수 내보내기
export const addUserInfo 
    = (email) => ({type:"addUserInfo", payload : email})


// 리듀서 내보내기
export default userInfoList;