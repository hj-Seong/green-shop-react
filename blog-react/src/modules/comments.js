// 초기값
const initalState = [
    { 
        commentId : 1,
        boardId :1,
        userEamil : "hjseong1222@naver.com",
        text : "반갑습니다"
    }
]

// 리듀서 함수 작성
function comments (state = initalState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default comments;