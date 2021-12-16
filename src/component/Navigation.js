import React from 'react';
import { Link } from 'react-router-dom';
function Navigation() {
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            {/* pahtname은 url을 의미하며 state는 route props에 보내줄 데이터를 의미한다. */}
            {/* <Link to={{ pathname: '/about', state: { fromNavigation: true } }} > about</Link> */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> a 태그를 사용하면 링크를 클릭할 때마다 기존 페이지가 죽고 새로운 페이지를 렌더링하기 때문에 로딩시간이 오래걸리고 필요한 부분만 업데이트해주는 리액트의 특징을 이용하기 어렵다. */}
        </div>
    )
}
export default Navigation