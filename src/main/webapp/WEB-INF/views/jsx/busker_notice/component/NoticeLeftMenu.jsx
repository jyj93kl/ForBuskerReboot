import React from 'react';
import ReactDOM from 'react-dom';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
 

 
class NoticeLeftMenu extends React.Component {
    
    constructor(props) {
        super(props);

        this.onClickMenu = this.onClickMenu.bind(this);
    }
    
    onClickMenu() {
        
    }
    
    render() {
        return (
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>공지사항</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody onClick={this.onClickMenu} id="notice-all-member">
                        <p>모든 회원</p>
                    </AccordionItemBody>
                    <AccordionItemBody onClick={this.onClickMenu} id="notice-busker-member">
                        <p>버스커 회원</p>
                    </AccordionItemBody>
                    <AccordionItemBody onClick={this.onClickMenu} id="notice-normal-member">
                        <p>일반 회원</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>FAQ</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody onClick={this.onClickMenu} id="faq-often">
                        <p>자주 묻는 질문</p>
                    </AccordionItemBody>
                    <AccordionItemBody onClick={this.onClickMenu} id="faq-member">
                        <p>회원가입 / 개인정보</p>
                    </AccordionItemBody>
                    <AccordionItemBody onClick={this.onClickMenu} id="faq-busking">
                        <p>버스킹</p>
                    </AccordionItemBody>
                    <AccordionItemBody onClick={this.onClickMenu} id="faq-streaming">
                        <p>실시간 스트리밍</p>
                    </AccordionItemBody>
                    <AccordionItemBody onClick={this.onClickMenu} id="faq-video">
                        <p>핫이슈 동영상</p>
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