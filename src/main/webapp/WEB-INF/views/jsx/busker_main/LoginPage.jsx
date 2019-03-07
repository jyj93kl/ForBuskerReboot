import 'css/busker_common/reset.css';
import 'css/busker_main/login.css';

import React from 'react';
import ReactDOM from 'react-dom';
import LoginInput from './component/LoginInput.jsx';
import Header from '../busker_common/Header.jsx';
import Footer from '../busker_common/Footer.jsx';


class LoginPage extends React.Component {

    render() {
        return (
            <div className="container">
                <Header />
                <form>
                    <LoginInput />
                </form>
                <Footer />
            </div>
        );
    }

}

ReactDOM.render(<LoginPage/>, document.getElementById('root'));