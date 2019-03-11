import React from 'react';
import ReactDOM from 'react-dom';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
 
 
const NoticeLeftMenu = () => (
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>공지사항</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>모든 회원</p>
            </AccordionItemBody>
                <AccordionItemBody>
                <p>버스커 회원</p>
            </AccordionItemBody>
                <AccordionItemBody>
                <p>일반 회원</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>FAQ</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>자주 묻는 질문</p>
            </AccordionItemBody>
                <AccordionItemBody>
                <p>회원가입 / 개인정보</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>버스킹</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>실시간 스트리밍</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>핫이슈 동영상</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>1:1 문의하기</h3>
            </AccordionItemTitle>
        </AccordionItem>
    </Accordion>
);
 
export default NoticeLeftMenu;