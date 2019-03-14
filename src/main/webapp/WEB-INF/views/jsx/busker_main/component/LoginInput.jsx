import 'css/busker_common/reset.css';

import React from 'react';
import axios from 'axios';

class LoginInput extends React.Component {

    constructor(props) {
        super(props);
        
        this.onClickButton = this.onClickButton.bind(this);
        
    }
    
    
    onClickButton() {
        const memEmail = document.getElementById("MEM_EMAIL");
        const memPw = document.getElementById("MEM_PW");
        
        var requestData = new Object();
        requestData["MEM_EMAIL"] = memEmail.value;
        requestData["MEM_PW"] = memPw.value;
        
        axios.post('/member/loginMember.do', requestData ) 
        .then(function (result) {
            console.log(result);
            if( result.data.message == "login_ok" ) {
                alert(result.data.returnData.MEM_NAME + "님 환영합니다."); 
                location.href="main";
            }
            else {
                alert("아이디나 비밀번호가 일치하지 않습니다.");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    
    
    render() {
        return (
            <div className="top-container">
                <h1>로그인</h1>
                <div className="form-container">
                    <input type="email" className="form-input" name="MEM_EMAIL" id="MEM_EMAIL" placeholder="이메일"/>
                </div>
                <div className="form-container">
                    <input type="password" className="form-input" name="MEM_PW" id="MEM_PW" placeholder="비밀번호"/>
                </div>
                <div className="form-container check-box">
                    <input type="checkbox" className="" name="memRemember"/>
                    <label>로그인 기억하기</label>
                </div>
                <button type="button" className="btn" onClick={this.onClickButton}>로그인하기</button>
                <div>
                    <span className="left">비밀번호 찾기</span>
                    <span className="right">회원가입</span>
                </div>
                <div className="clear"></div>
            </div>
            
        );
    }
}

export default LoginInput;