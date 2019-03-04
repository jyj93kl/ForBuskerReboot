import '../../../resources/css/busker_common/reset.css';
import '../../../resources/css/busker_main/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Main_header from './Main_header.jsx';

class MainPage extends React.Component {

    render() {
        return (
            <div className="container">
                <Main_header/>
            </div>
        );
    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));