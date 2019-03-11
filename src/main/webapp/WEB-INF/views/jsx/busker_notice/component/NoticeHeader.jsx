import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_header.css';

import React from 'react';
import Search from '../../busker_common/Search.jsx';


class MainHeader extends React.Component {

    render() {
        return (
            <header>
                <img src="../../../../../resources/images/busker_notice/notice_main.jpg" alt="메인이미지" title="메인이미지"></img>
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
                <div className="main-letter">
                    <h1>FOR BUSKER에서 알려드립니다 !</h1>
                    <Search />
                </div>
            </header>
        );
    }

}


export default MainHeader;