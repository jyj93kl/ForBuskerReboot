import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_main.css';

import React from 'react';
import ReactDOM from 'react-dom';

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

                    <div className="notice-top">
                    
                        {
                            thisPage == "list" && <NoticeLeftMenu />
                        }

                        {
                            thisPage == "list" ? <NoticeContent/> : <NoticeWrite /> 
                        }
                        
                        
                        <div id="notice-btn-container-list">
                            {
                                document.getElementById('session-level').value == 'Admin' 
                                &&
                                <button onClick={this.handleNoticeWrite}>글쓰기</button>
                            }
                        </div>
                    
                        <div className="clear"></div>

                    </div>

                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<NoticeMainPage/>, document.getElementById('root'));