import {useSelector} from 'react-redux'
const MyPage = () => {
    const user = useSelector((state)=>state.currentUser)
    const userInfo = useSelector((state)=>state.userInfoList)
                    .find((info)=>(info.userEmail == user.email))
    return ( 
        <div>
            <h3>유저 페이지</h3>
            <p>유저 이메일 : {userInfo.userEmail}</p>
            
            <h5>좋아요 리스트</h5>
            <ul>
                {
                    userInfo.like.map((l)=>(
                        <li key={l.boardId}>{l.title}</li>
                    ))
                }
                
            </ul>
        </div>
    );
}

export default MyPage;