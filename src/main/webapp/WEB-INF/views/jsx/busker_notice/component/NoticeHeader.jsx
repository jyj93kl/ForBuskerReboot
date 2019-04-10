import React from 'react';

import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_header.css';

import HeaderNav from '../../busker_common/HeaderNav.jsx';
import NoticeSearch from './NoticeSearch.jsx';

class NoticeHeader extends React.Component {

    render() {
        return (
            <header>
                <img src="../../../../../resources/images/busker_notice/notice_main.jpg" alt="메인이미지" title="메인이미지"></img>
                <HeaderNav/>
                <div className="main-letter">
                    <h1>FOR BUSKER에서 알려드립니다 !</h1>
                    <NoticeSearch />
                </div>
            </header>
        );
    }

}

export default NoticeHeader;