import React from 'react';


class NavLogout extends React.Component {
    render() {
        return (
            <nav>
                <span><a href="main">For-Busker ♬</a></span>
                <ul>
                    <li><a href="login">로그인</a></li>
                    <li><a href="signup">회원가입</a></li>
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

export default NavLogout;