import 'css/busker_common/reset.css';
import 'css/busker_common/header.css';

import React from 'react';


class Header extends React.Component {

    render() {
        return (
            <header>
                <nav>
                    <span>For-Busker ~ ♬</span>
                    <ul>
                        <li><a href="login">로그인</a></li>
                        <li><a href="">회원가입</a></li> 
                        <li><a href="">공지사항</a></li>
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
            </header>
        );
    }

}


export default Header;