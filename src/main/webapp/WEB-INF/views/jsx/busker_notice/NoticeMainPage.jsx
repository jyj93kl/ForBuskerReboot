import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import NoticeHeader from './component/NoticeHeader.jsx';
import NoticeContent from './component/NoticeContent.jsx';
import NoticeWrite from './component/NoticeWrite.jsx';
import Footer from '../busker_common/Footer.jsx';

import 'react-accessible-accordion/dist/fancy-example.css';
import 'css/busker_notice/notice_leftmenu.css';

class NoticeMainPage extends React.Component {

    render() {

        return (
            <div className="container">
                <NoticeHeader />
                    <div className="notice-top">

                    <Router>
                        <Route exact path="/notice_main" component={NoticeContent}/>
                        {/* <Route exact path="/notice_main" component={NoticeWrite}/> */}
                        <Route path="/NoticeContent" component={NoticeContent}/>
                        <Route path="/NoticeWrite" component={NoticeWrite}/>    

                        <div className="clear"></div>
                    </Router>

                    </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<NoticeMainPage/>, document.getElementById('root'));