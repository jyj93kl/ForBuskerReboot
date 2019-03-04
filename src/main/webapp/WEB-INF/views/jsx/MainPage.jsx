import '../../../resources/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                JSX 메인페이지 연결 테스트!!
            </div>
        );
    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));
