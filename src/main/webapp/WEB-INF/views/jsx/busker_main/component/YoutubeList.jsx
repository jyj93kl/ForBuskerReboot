import 'css/busker_common/reset.css';
import 'css/busker_main/main.css';

import React from 'react';
import Slider from "react-slick";


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
                <div>
                    <img src="../../../../../resources/images/busker_youtube_thumbnail/thumbnali_1.jpeg"></img>
                    <h5>빈첸의 첫 정규앨범 Sinking down with you</h5>
                    <h6>Kim LeeJun</h6>
                    <h6>현재 시청자 : 1200</h6>
                </div>
                <div>
                    <img src="../../../../../resources/images/busker_youtube_thumbnail/thumbnali_2.jpeg"></img>
                    <h5>슈퍼비 블랙넛의 냉탕의 상어를 1.5배로 불러봤습니다.</h5>
                    <h6>정영재</h6>
                    <h6>현재 시청자 : 2011</h6>
                </div>
                <div>
                    <img src="../../../../../resources/images/busker_youtube_thumbnail/thumbnali_3.jpeg"></img>
                    <h5>인디고 뮤직 여름 띵곡 flex</h5>
                    <h6>김이준</h6>
                    <h6>현재 시청자 : 1029</h6>
                </div>
                <div>
                    <img src="../../../../../resources/images/busker_youtube_thumbnail/thumbnali_4.jpeg"></img>
                    <h5>Sinking down with you 커버</h5>
                    <h6>YoungJae Jung</h6>
                    <h6>현재 시청자 : 1200</h6>
                </div>
                <div>
                    <img src="../../../../../resources/images/busker_youtube_thumbnail/thumbnali_5.jpeg"></img>
                    <h5>하스스톤 게임 디렉터 '벤 브로드' 인터뷰</h5>
                    <h6>블리자드</h6>
                    <h6>현재 시청자 : 5025</h6>
                </div>
                <div>
                    <img src="../../../../../resources/images/busker_youtube_thumbnail/thumbnali_6.jpeg"></img>
                    <h5>슈퍼비 유튜브 라이브</h5>
                    <h6>슈퍼비</h6>
                    <h6>현재 시청자 : 572</h6>
                </div>
                </Slider>
            </div>
        </div>
    
        );
    }

}


export default YoutubeList;