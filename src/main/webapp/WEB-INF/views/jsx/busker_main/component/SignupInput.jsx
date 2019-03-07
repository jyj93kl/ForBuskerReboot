import 'css/busker_common/reset.css';

import React from 'react';

class LoginInput extends React.Component {

    render() {
        return (
            <div className="top-container">
                <h1>회원가입</h1>
                <div className="form-container">
                    <input type="email" id="" className="form-input" name="memEmail" placeholder="이메일"/>
                </div>
                <div className="form-container">
                    <input type="password" id="" className="form-input" name="memPw" placeholder="비밀번호"/>
                </div>
                <div className="form-container">
                    <input type="password" id="" className="form-input" name="memPwCheck" placeholder="비밀번호 확인"/>
                </div>
                <div className="form-container">
                    <input type="text" id="" className="form-input" name="memName" placeholder="이름"/>
                </div>
                <div className="form-container">
                    <input type="number" id="" className="form-input" name="memTel" placeholder="전화번호 ( - 를 제외하고 입력)"/>
                </div>
                <div className="form-container">
                    <input type="number" id="" className="form-input" name="memBirthday" placeholder="생년월일 8자리 (예시 : 19981222)"/>
                </div>
                <button className="btn">약관 확인 후 회원가입 하기</button>
            </div>
            
        );
    }
}

export default LoginInput;