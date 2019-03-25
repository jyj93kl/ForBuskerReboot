import 'css/busker_common/reset.css';

import React from 'react';

import axios from 'axios';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import 'css/busker_notice/notice_write.css';

class NoticeWrite extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            list : {
                NOTICE_DATE : "",
                NOTICE_NO : "",
                NOTICE_TITLE : "",
                NOTICE_CONTENT : ""
            },
            pageNum : props.match.params.num,
            text: '' 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() { 
        const pageNum = this.state.pageNum;
        
        if (pageNum != undefined) {
            
            var requestData = new Object();
            requestData["NOTICE_NO"] = pageNum;
        
            axios.post('/notice/noticeView.do', requestData)  
            .then((result) => {  
                console.log(result);
                const list = result.data.returnData; 
                
                console.log("NoticeView.jsx component() : ", list); 
                
                this.setState({
                    list,
                    text : list.NOTICE_CONTENT
                });
                

            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
        
    }
    
    
    handleChange(value) {
        this.setState({ text: value })
    }

    handleSubmit() {
        
        const pageNum = this.state.pageNum;
        
        const noticeTitle = document.getElementById("NOTICE_TITLE").value;
        const noticeCategori = document.getElementById("NOTICE_CATEGORI").value;
        const noticeContent = this.state.text;
        
        if (noticeTitle != "" && noticeContent != "") {
        
            var requestData = new Object();
            
            requestData["NOTICE_NO"] = pageNum;
            requestData["NOTICE_TITLE"] = noticeTitle;
            requestData["NOTICE_CONTENT"] = noticeContent;
            requestData["NOTICE_CATEGORI"] = noticeCategori;
            
            if (pageNum == undefined) {
                axios.post('/notice/addNotice.do', requestData ) 
                .then(function (result) {
                    console.log(result);
                    if( result.data.returnData == 1 ) alert("게시글 작성이 완료되었습니다."); location.href="/notice_main";
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else {
                axios.post('/notice/updateNotice.do', requestData ) 
                .then(function (result) {
                    console.log(result);
                    if( result.data.returnData == 1 ) alert("게시글 수정이 완료되었습니다."); location.href="/notice_main";
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            
        }
        else {
            alert("공지사항 제목과 내용을 빈칸 없이 입력해주세요.");
        }
        
    }

    render() {
        
        const contentCode = this.state.list.NOTICE_CONTENT;
        const categori = this.state.list.NOTICE_CATEGORI;
        
        return (
            <form className="text-editor">
                <div className="text-title">
                    <select id="NOTICE_CATEGORI" name="NOTICE_CATEGORI">
                        <option selected={categori=="notice-all" ? "selected" : ""} value="notice-all">공지사항 - 모든회원</option>
                        <option selected={categori=="notice-busker" ? "selected" : ""} value="notice-busker">공지사항 - 버스커회원</option>
                        <option selected={categori=="notice-normal" ? "selected" : ""} value="notice-normal">공지사항 - 일반회원</option>
                        <option selected={categori=="faq-often" ? "selected" : ""} value="faq-often">FAQ - 자주 묻는 질문</option>
                        <option selected={categori=="faq-member" ? "selected" : ""} value="faq-member">FAQ - 회원가입 / 개인정보</option>
                        <option selected={categori=="faq-busking" ? "selected" : ""} value="faq-busking">FAQ - 버스킹</option>
                        <option selected={categori=="faq-streaming" ? "selected" : ""} value="faq-streaming">FAQ - 실시간 스트리밍</option>
                        <option selected={categori=="faq-video" ? "selected" : ""} value="faq-video">FAQ - 핫이슈 동영상</option>
                    </select>
                    <input type="text" id="NOTICE_TITLE" name="NOTICE_TITLE" defaultValue={this.state.list.NOTICE_TITLE}></input>
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