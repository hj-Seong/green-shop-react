import { Col, Container, Row } from 'react-bootstrap';
import { useSelector} from 'react-redux'
import { getAuth } from "firebase/auth";
import ProfileUpdateModal from '../components/ProfileUpdateModal';
import { useEffect } from 'react';
import { useState } from 'react';
const MyPage = () => {
    const auth = getAuth();
    const user = useSelector((state)=>state.currentUser)
    const userInfo = useSelector((state)=>state.userInfoList)
                    .find((info)=>(info.userEmail == user.email))
    const [update, setUpdate] = useState(false);
    useEffect(()=>{
        console.log("확인")
    }, [update])
    return ( 
        <Container>
            <Row>
                <Col>
                    <p>유저 이메일 : {userInfo.userEmail}</p>
                    {
                        auth.currentUser && <img src={auth.currentUser.photoURL} alt=""  style={{width:"300px"}}/>
                    }
                    <ProfileUpdateModal  setUpdate={setUpdate}/>
                </Col>
                <Col style={{border:"solid 1px grey", textAlign:"center"}}>
                    <h5>좋아요 리스트</h5>
                    <ul>
                        {
                            userInfo.like.map((l)=>(
                                <li key={l.boardId}>{l.title}</li>
                            ))
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default MyPage;