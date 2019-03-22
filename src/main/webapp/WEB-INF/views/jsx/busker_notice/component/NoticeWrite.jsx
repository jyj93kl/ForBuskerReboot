import 'css/busker_common/reset.css';

import React from 'react';

import axios from 'axios';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import 'css/busker_notice/notice_write.css';

class NoticeWrite extends React.Component {

    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    handleSubmit() {
        const noticeTitle = document.getElementById("NOTICE_TITLE").value;
        const noticeCategori = document.getElementById("NOTICE_CATEGORI").value;
        const noticeContent = this.state.text;
        
        if (noticeTitle != "" && noticeContent != "") {
        
            var requestData = new Object();
            
            requestData["NOTICE_TITLE"] = noticeTitle;
            requestData["NOTICE_CONTENT"] = noticeContent;
            requestData["NOTICE_CATEGORI"] = noticeCategori;
            
            axios.post('/notice/addNotice.do', requestData ) 
            .then(function (result) {
                console.log(result);
                if( result.data.returnData == 1 ) alert("글 작성이 완료되었습니다."); location.href="notice_main";
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
        else {
            alert("공지사항 제목과 내용을 빈칸 없이 입력해주세요.");
        }
        
        
        
    }

    render() {
        return (
            <form className="text-editor">
                <div className="text-title">
                    <select id="NOTICE_CATEGORI" name="NOTICE_CATEGORI">
                        <option value="notice-all">공지사항 - 모든회원</option>
                        <option value="notice-busker">공지사항 - 버스커회원</option>
                        <option value="notice-normal">공지사항 - 일반회원</option>
                        <option value="faq-often">FAQ - 자주 묻는 질문</option>
                        <option value="faq-member">FAQ - 회원가입 / 개인정보</option>
                        <option value="faq-busking">FAQ - 버스킹</option>
                        <option value="faq-streaming">FAQ - 실시간 스트리밍</option>
                        <option value="faq-video">FAQ - 핫이슈 동영상</option>
                    </select>
                    <input type="text" id="NOTICE_TITLE" name="NOTICE_TITLE"></input>
                </div>
                <div className="clear"></div>
                <ReactQuill 
                    id="NOTICE_CONTENT"
                    name="NOTICE_CONTENT"
                    value={this.state.text} 
                    onChange={this.handleChange}
                />
                <button type="button" onClick={this.handleSubmit}>작성하기</button>
            </form>
        )
    }

}


export default NoticeWrite;