import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import NoticeHeader from './component/NoticeHeader.jsx';
import Footer from '../busker_common/Footer.jsx';


class NoticeMainPage extends React.Component {

    render() {
        return (
            <div className="container">
                <NoticeHeader />
                
                    <div className="top-notice">
                        
                    </div>

                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<NoticeMainPage/>, document.getElementById('root'));