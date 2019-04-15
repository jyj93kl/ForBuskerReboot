import React from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill'; // ES6

import 'css/busker_common/reset.css';
import 'react-quill/dist/quill.snow.css';
import 'css/busker_notice/notice_write.css';

class Contactus extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            text: '' 
        }
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(value) {
        this.setState({ text: value })
    }
    
    handleSubmit() {
        const contactusEmail = document.getElementById("session-email").value;
        const contactusTitle = document.getElementById("CONTACTUS_TITLE").value;
        const contactusCategori = document.getElementById("CONTACTUS_CATEGORI").value;
        const contactusContent = this.state.text;
        
        if (contactusEmail == "") {
            alert("로그인 후 이용 가능합니다.");
            
            return false;
        }
        else if (contactusTitle != "" && contactusContent != "") {
        
            var requestData = new Object();
            
            requestData["CONTACTUS_EMAIL"] = contactusEmail;
            requestData["CONTACTUS_TITLE"] = contactusTitle;
            requestData["CONTACTUS_CONTENT"] = contactusContent;
            requestData["CONTACTUS_CATEGORI"] = contactusCategori;
            
            axios.post('/notice/addContactus.do', requestData ) 
            .then(function (result) {
                 alert("문의사항이 접수되었습니다. \n 문의 답변은 Email, 마이페이지에서 확인 가능합니다."); 
                 location.href="/notice/notice_main";
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
        else {
            alert("제목과 내용을 빈칸 없이 입력해주세요.");
        }
        
    }

    render() {
        return (
            <form className="text-editor">
                <div className="text-title">
                    <select id="CONTACTUS_CATEGORI" name="CONTACTUS_CATEGORI">
                        <option value="BUSKING">버스킹 관련 문의</option>
                        <option value="STREAMING">스트리밍 관련 문의</option>
                        <option value="PLATFORM">플랫폼 기능 문의</option>
                        <option value="OTHER">기타 문의</option>
                    </select>
                    <input type="text" id="CONTACTUS_TITLE" name="CONTACTUS_TITLE" placeholder="제목"></input>
                </div>
                <div className="clear"></div>
                <ReactQuill
                    id="CONTACTUS_CONTENT"
                    name="CONTACTUS_CONTENT"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button type="button" onClick={this.handleSubmit}>문의하기</button>
            </form>
        )
    }

}


export default Contactus;