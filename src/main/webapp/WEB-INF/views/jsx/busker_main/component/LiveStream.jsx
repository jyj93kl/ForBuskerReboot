import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';
import YoutubeLive from 'youtube-live-react';
import Youtube from 'react-youtube';



class LiveStream extends React.Component {

    render() {
        return (
            <div>
                <Youtube videoId='9dQg_SVN7wo' /> 
                
                <YoutubeLive iframeWidth='400' 
                iframeHeight='300' 
                maxResults='50' 
                youtubeChannelId='UCfphhCdsxJ547mA8ugt0X2g' 
                googleApiKey='AIzaSyAIHawUHmuINP1fx4ajh-T_4MZp2BSnSYQ' />

            </div>
        );
    }

}


export default LiveStream;