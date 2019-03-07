import 'css/busker_common/reset.css';

import React from 'react';

class LoginInput extends React.Component {

    render() {
        return (
            <div className="top-container">
                <h1>로그인</h1>
                <div className="form-container">
                    <input type="email" className="form-input" name="memEmail" placeholder="이메일"/>
                </div>
                <div className="form-container">
                    <input type="password" className="form-input" name="memPw" placeholder="비밀번호"/>
                </div>
                <div className="form-container check-box">
                    <input type="checkbox" className="" name="memRemember"/>
                    <label>로그인 기억하기</label>
                </div>
                <button className="btn">로그인하기</button>
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