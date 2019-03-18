import React from 'react';


class NavLogin extends React.Component {
    render() {
        return (
            <nav>
                <span><a href="main">For-Busker ♬</a></span>
                <ul>
                    <li><a href="/member/logout.do">로그아웃</a></li>
                    <li><a href="mypage">마이페이지</a></li>
                    <li><a href="notice_main">공지사항</a></li>
                    <li>
                        <ul>
                            <li>카테고리</li>
                            <li><a href="">공연예정</a></li>
                            <li><a href="">공연영상</a></li>
                            <li><a href="">콜라보</a></li>
                            <li><a href="">커뮤니티</a></li>
                        </ul>
                    </li>
                </ul> 
            </nav>
        );
    }
}

export default NavLogin;