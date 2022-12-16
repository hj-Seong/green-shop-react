import {Link} from 'react-router-dom'
const HomeLink = () => {
    // 로그인 유무를 확인하기위한 변수
    const login = false;

    return ( 
        <div className='Home_Link'>
            {
                login ? 
                /**로그인했을때 보이는 화면, 
                 * 단 관리자페이지는 홈페이지주인만보이기 */
                (<div>
                    <Link>포스트</Link>
                    <Link>방명록</Link>
                    <Link>관리자페이지</Link>
                    <Link>마이페이지</Link>
                    <Link>로그아웃</Link>
                </div>)
                :
                /** 로그인되어있지 않을때 보여지는 링크 */
                (
                    <div>
                        <Link>포스트</Link>
                        <Link to='/gest'>방명록</Link>
                        <Link to='/loginform'>로그인</Link>
                    </div>
                )
            }

        </div>
    );
}

export default HomeLink;