import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';


class MainHeader extends React.Component {

    render() {
        return (
            <header>
                <div className="block"></div>
                <img src="../../../../../resources/images/busker_main/main_img.jpg" alt="메인이미지" title="메인이미지"></img>
                <nav>
                    <span><a href="main">For-Busker ♬</a></span>
                    <ul>
                        <li><a href="login">로그인</a></li>
                        <li><a href="signup">회원가입</a></li> 
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
                <div className="main-letter">
                    <h1>STREET PERFORMANCE</h1>
                    <h4>무엇 하나 쉽지 않은 거리공연, 여기저기 흩어져 있는 공연정보 <br/> 이제 FOR-BUSKER를 통해 1년 365일 생생한 거리공연의 즐거움을 만나보세요. </h4>
                    <h4>FOR BUSKER</h4>
                </div>
            </header>
        );
    }

}


export default MainHeader;