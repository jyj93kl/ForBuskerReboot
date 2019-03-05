import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import MainHeader from './busker_main/MainHeader.jsx';
import YoutubeList from './busker_main/YoutubeList.jsx';
import MainFooter from './busker_main/MainFooter.jsx';
// import LiveStream from './busker_main/LiveStream.jsx';

class MainPage extends React.Component {

    render() {
        return (
            <div className="container">
                <MainHeader/>
                <YoutubeList/>
                <YoutubeList/>

                {/* <LiveStream/> */}
                
                <MainFooter/>
            </div>
        );
    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));