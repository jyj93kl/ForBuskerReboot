import 'css/busker_common/reset.css';
import 'css/busker_main/signup.css';

import React from 'react';
import ReactDOM from 'react-dom';
import SignupInput from './component/SignupInput.jsx';
import Header from '../busker_common/Header.jsx';
import Footer from '../busker_common/Footer.jsx';


class SignupPage extends React.Component {

    render() {
        return (
            <div className="container">
                <Header />
                <form>
                    <SignupInput />
                </form>
                <Footer />
            </div>
        );
    }

}

ReactDOM.render(<SignupPage/>, document.getElementById('root'));