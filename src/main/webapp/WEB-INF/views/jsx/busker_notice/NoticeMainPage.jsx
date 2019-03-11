import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import NoticeHeader from './component/NoticeHeader.jsx';
import NoticeLeftMenu from './component/NoticeLeftMenu.jsx';
import NoticeContent from './component/NoticeContent.jsx';
import Footer from '../busker_common/Footer.jsx';

import 'react-accessible-accordion/dist/fancy-example.css';

class NoticeMainPage extends React.Component {

    render() {
        return (
            <div className="container">
                <NoticeHeader />
                
                    <div className="notice-top">
                        <NoticeLeftMenu/>
                        <NoticeContent/>
                        <div className="clear"></div>
                    </div>

                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<NoticeMainPage/>, document.getElementById('root'));