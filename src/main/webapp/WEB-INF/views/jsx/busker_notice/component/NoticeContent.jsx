import React from 'react';
import axios from 'axios';

import NoticeTable from './NoticeTable.jsx';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../actions';  

class NoticeContent extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {list : ""};

        this.onClickMenu = this.onClickMenu.bind(this);
    }
    
    onClickMenu = (event) => {
        
        var categori = event.target.getAttribute('name');
        
        var requestData = new Object();
        requestData["NOTICE_CATEGORI"] = categori;
        
        axios.post('/notice/noticeMain.do', requestData)  
        .then((result) => {  
            console.log(result);
            const list = result.data.returnData; 
            
            console.log("NoticeTable.jsx component() : ", list); 
            
            this.setState({
                list
            });
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>공지사항</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody onClick={this.onClickMenu} name="notice-all">
                             모든 회원
                        </AccordionItemBody>
                        <AccordionItemBody onClick={this.onClickMenu} name="notice-busker">
                             버스커 회원 
                        </AccordionItemBody>
                        <AccordionItemBody onClick={this.onClickMenu} name="notice-normal">
                             일반 회원 
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>FAQ</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody onClick={this.onClickMenu} name="faq-often">
                             자주 묻는 질문 
                        </AccordionItemBody>
                        <AccordionItemBody onClick={this.onClickMenu} name="faq-member">
                             회원가입 / 개인정보 
                        </AccordionItemBody>
                        <AccordionItemBody onClick={this.onClickMenu} name="faq-busking">
                             버스킹 
                        </AccordionItemBody>
                        <AccordionItemBody onClick={this.onClickMenu} name="faq-streaming">
                             실시간 스트리밍 
                        </AccordionItemBody>
                        <AccordionItemBody onClick={this.onClickMenu} name="faq-video">
                             핫이슈 동영상 
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle onClick={this.onClickMenu} id="contact-us">
                            <h3>1:1 문의하기</h3>
                        </AccordionItemTitle>
                    </AccordionItem>
                </Accordion>
                <div className="notice-content">
                    <NoticeTable listNameFromParent={this.state.list}/>
                    
                    {
                        document.getElementById('session-level').value == 'Admin' 
                        &&
                        
                        <Link to="/notice/NoticeWrite">
                            <button>글쓰기</button>
                        </Link>
                    }
               </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        searchList: state.Search.searchList
    };
}

export default connect(mapStateToProps)(NoticeContent);