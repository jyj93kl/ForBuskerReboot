import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
 

 
class NoticeLeftMenu extends React.Component {
    
    constructor(props) {
        super(props);

//        this.onClickMenu = this.onClickMenu.bind(this);
    }
    
    onClickMenu = (event) => {
        
        var categori = event.target.getAttribute('name');
        
        axios.post('/notice/noticeMain.do', categori)  
        .then((result) => {  
            const list = result.data.list; 
            
            console.log("NoticeLeftMenu.jsx component() : ", list); 
            
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
        );
    }
}
 
export default NoticeLeftMenu;