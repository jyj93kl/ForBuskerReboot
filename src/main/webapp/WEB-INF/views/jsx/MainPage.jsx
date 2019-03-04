import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import MainHeader from './busker_main/MainHeader.jsx';

class MainPage extends React.Component {

    render() {
        return (
            <div className="container">
                <MainHeader/>
            </div>
        );
    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));