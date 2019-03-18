import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import MainHeader from './component/MainHeader.jsx';
import YoutubeList from './component/YoutubeList.jsx';
import MainFooter from './component/MainFooter.jsx';
// import LiveStream from './component/LiveStream.jsx';

class MainPage extends React.Component {

    render() {
        return (
            <div className="container">
                <MainHeader/>
                <YoutubeList header="실시간 스트리밍"/>
                <YoutubeList header="핫이슈 동영상"/>
                {/* <LiveStream/> */}
                <MainFooter/>
            </div>
        );
    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));