import {useSelector} from 'react-redux'
const MyPage = () => {
    const user = useSelector((state)=>state.currentUser)
    const userInfo = useSelector((state)=>state.userInfoList)
                    .find((info)=>(info.userEmail == user.email))
    return ( 
        <div>{userInfo.userEmail}</div>
    );
}

export default MyPage;