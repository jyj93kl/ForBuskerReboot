import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';
import Slider from "react-slick";
import Thumbnail from "./Thumbnail.jsx";

var dataList = [
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_1.jpeg" ,
        title : "빈첸의 첫 정규앨범 Sinking down with you",
        streamer : "Kim LeeJun",
        viewers : "1200"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_2.jpeg" ,
        title : "슈퍼비 블랙넛의 냉탕의 상어를 1.5배로 불러봤습니다.",
        streamer : "Jeong YoungJae",
        viewers : "2011"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_3.jpeg" ,
        title : "인디고 뮤직 여름 띵곡 flex",
        streamer : "김이준",
        viewers : "300"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_4.jpeg" ,
        title : "하스스톤 게임 디렉터 '벤 브로드' 인터뷰",
        streamer : "블리자드",
        viewers : "5025"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_5.jpeg" ,
        title : "슈퍼비 유튜브 라이브",
        streamer : "슈퍼비",
        viewers : "572"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_1.jpeg" ,
        title : "빈첸의 첫 정규앨범 Sinking down with you",
        streamer : "Kim LeeJun",
        viewers : "1200"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_2.jpeg" ,
        title : "슈퍼비 블랙넛의 냉탕의 상어를 1.5배로 불러봤습니다.",
        streamer : "Jeong YoungJae",
        viewers : "2011"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_3.jpeg" ,
        title : "인디고 뮤직 여름 띵곡 flex",
        streamer : "김이준",
        viewers : "300"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_4.jpeg" ,
        title : "하스스톤 게임 디렉터 '벤 브로드' 인터뷰",
        streamer : "블리자드",
        viewers : "5025"
    },
    {
        thumbnail : "../../../../../resources/images/busker_youtube_thumbnail/thumbnali_5.jpeg" ,
        title : "슈퍼비 유튜브 라이브",
        streamer : "슈퍼비",
        viewers : "572"
    }
]

class YoutubeList extends React.Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            draggable: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };

        return (
        <div className="youtube-slide">
            <div className="sliders">
                <h2>{this.props.header}</h2>
                <Slider {...settings}>
                    {dataList.map((data,idx) =>
                        <Thumbnail  key={idx} 
                                    thumbnail={data.thumbnail} 
                                    title={data.title} 
                                    streamer={data.streamer}
                                    viewers={data.viewers} />
                    )}

                </Slider>
            </div>
        </div>
    
        );
    }

}


export default YoutubeList;