import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NoticeHeader from './component/NoticeHeader.jsx';
import NoticeContent from './component/NoticeContent.jsx';
import NoticeWrite from './component/NoticeWrite.jsx';
import NoticeView from './component/NoticeView.jsx';
import Footer from '../busker_common/Footer.jsx';

import 'react-accessible-accordion/dist/fancy-example.css';

class NoticeMainPage extends React.Component {

    render() {

        return (
            <div className="container">
                <NoticeHeader />
                    <div className="notice-top">

                    <Router>
                        <Route exact path="/notice/notice_main" component={NoticeContent}/>
                        <Route path="/notice/NoticeContent" component={NoticeContent}/>
                        <Switch>
                            <Route path="/notice/NoticeWrite/:num" component={NoticeWrite}/>  
                            <Route path="/notice/NoticeWrite" component={NoticeWrite}/>    
                        </Switch>
                        <Switch>
                            <Route path="/notice/NoticeView/:num" component={NoticeView}/>
                            <Route path="/notice/NoticeView" component={NoticeView}/>  
                        </Switch>
                        <div className="clear"></div>
                    </Router>

                    </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<NoticeMainPage/>, document.getElementById('root'));