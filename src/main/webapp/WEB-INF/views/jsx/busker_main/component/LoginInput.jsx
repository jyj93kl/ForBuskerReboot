import 'css/busker_common/reset.css';

import React from 'react';

class LoginInput extends React.Component {

    render() {
        return (
            <div>
                <div className="form-container">
                    <input type="email" className="form-input" name="memEmail" placeholder="이메일"/>
                </div>
                <div className="form-container">
                    <input type="password" className="form-input" name="memPw" placeholder="비밀번호"/>
                </div>
            </div>
        );
    }
}

export default LoginInput;