const PropsChildren = (props) => {
    // props의 값의 여러개가 들어오기때문에
    // 객체의 형태로 사용 > 구조화분해이용
    const {name, count, setCount, onClick} = props;
    // props으로 받아올수 있는 값들
    // : 문자열, {}로 감싸서 보내진 자바스크립트의 변수/함수
    // *작성한 컴포넌트에 on이벤트를 작성하면 props 값으로 들어온다
    const {children} = props;
    // children은 태그와 태그사이에 작성한 값을 들고온다
    return ( 
        <div onClick={onClick}>
            <h3>PropsChildren : {name}, count: {count}</h3>
            <button onClick={()=>{ setCount(count+1) }}>+1</button>
            {children}
        </div>
    );
}
 
export default PropsChildren;