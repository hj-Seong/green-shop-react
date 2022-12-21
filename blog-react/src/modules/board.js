// board 리듀서
//초기 값
const initalState = [
    {
        boardId :1, 
        userEmail : "hjseong1222@naver.com", 
        title : "첫 게시물입니다",
        content : "문자만들어갈수 있는 공간입니다",
        view : 0,
        like : 1 // 좋아요를 누른 사람의 리스트
    },
    {
        boardId : 2, 
        userEmail : "hjseong1222@naver.com", 
        title : "두번째 게시글",
        content : "두번째 글입니다",
        view : 0,
        like : 1 // 좋아요를 누른 사람의 리스트
    }
]
// board가 증가할때마다 증가되는 아이디
let boardId = 3;


//리듀서 함수
function board (state = initalState, action) {
    switch (action.type) {
        default :
            return state;
    }
}
export default board;
