import 'css/busker_common/reset.css';

import React from 'react';

class LoginInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isReg : false
        };
        
        console.log(this.state);
        
        this.onClickButton = this.onClickButton.bind(this); // 이 코드를 사용하는 이유 https://www.zerocho.com/category/React/post/578232e7a479306028f43393
    }

    
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        
        console.log(target);
    }
    
    
    onClickButton() {
        console.log('회원가입 button click');
    }

    render() {
        return (
            <div className="top-container">
                <h1>회원가입</h1>
                <div className="form-container">
                    <input type="email" onChange={this.handleInputChange} id="memEmail" className="form-input" name="memEmail" placeholder="이메일"/>
                </div>
                <div className="form-container">
                    <input type="password" onChange={this.handleInputChange} id="memPw" className="form-input" name="memPw" placeholder="비밀번호"/>
                </div>
                <div className="form-container">
                    <input type="password" onChange={this.handleInputChange} id="memPwCheck" className="form-input" name="memPwCheck" placeholder="비밀번호 확인"/>
                </div>
                <div className="form-container">
                    <input type="text" onChange={this.handleInputChange} id="memName" className="form-input" name="memName" placeholder="이름"/>
                </div>
                <div className="form-container">
                    <input type="number" onChange={this.handleInputChange} id="memTel" className="form-input" name="memTel" placeholder="전화번호 ( - 를 제외하고 입력)"/>
                </div>
                <div className="form-container">
                    <input type="number" onChange={this.handleInputChange} id="memBirthday" className="form-input" name="memBirthday" placeholder="생년월일 8자리 (예시 : 19981222)"/>
                </div>
                <button type="button" className="btn" onClick={this.onClickButton}>약관 확인 후 회원가입 하기</button>
            </div>
            
        );
    }
}

export default LoginInput;