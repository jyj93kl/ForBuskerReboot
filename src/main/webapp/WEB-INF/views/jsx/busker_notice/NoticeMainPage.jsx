import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link, BrowserHistory, IndexRoute} from 'react-router-dom';

import NoticeHeader from './component/NoticeHeader.jsx';
import NoticeLeftMenu from './component/NoticeLeftMenu.jsx';
import NoticeContent from './component/NoticeContent.jsx';
import NoticeWrite from './component/NoticeWrite.jsx';
import Footer from '../busker_common/Footer.jsx';

import 'react-accessible-accordion/dist/fancy-example.css';
import 'css/busker_notice/notice_leftmenu.css';

class NoticeMainPage extends React.Component {

    constructor(props) { 
        super(props); 
        
        this.state = {
            page : "list"
        };
        
        this.handleNoticeWrite = this.handleNoticeWrite.bind(this);
    }
    
    handleNoticeWrite() {
        
        this.setState({
            page : "write"
        });

        document.getElementById('notice-btn-container-list').style.display = 'none';
        
    }



    render() {

        const thisPage = this.state.page;

        return (
            <div className="container">
                <NoticeHeader />
                <Router>
                    <div className="notice-top">
                    
                        {/* {
                            thisPage == "list" && <NoticeLeftMenu />
                        }

                        {
                            thisPage == "list" ? <NoticeContent/> : <NoticeWrite /> 
                        } */}

                        
                        {
                            thisPage == "list" && <NoticeLeftMenu />
                        }

                        {
                            thisPage == "list" ? <NoticeContent /> : <Route path="/NoticeWrite" component={NoticeWrite}/>   
                        }

                        <div id="notice-btn-container-list">
                            {
                                document.getElementById('session-level').value == 'Admin' 
                                &&
                                
                                <Link to="/NoticeWrite">
                                    <button onClick={this.handleNoticeWrite}>글쓰기</button>
                                </Link>
                            }
                        </div>
                    
                        <div className="clear"></div>

                    </div>

                </Router>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
<Router history={BrowserHistory}>
    <Route path = "/notice_main" component = {NoticeMainPage} />
    <Route path = "NoticeWrite" component = {NoticeWrite} />
</Router>
,document.getElementById('root'));