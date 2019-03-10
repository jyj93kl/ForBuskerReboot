import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';

class Thumbnail extends React.Component {
    
    render() {
       return (
           <div key={this.props.key}>
                <img src={this.props.thumbnail}></img>
                <h5>{this.props.title}</h5>
                <h6>{this.props.streamer}</h6>
                <h6>현재 시청자 : {this.props.viewers}</h6>
            </div>     
        )  
    }

}


export default Thumbnail;
