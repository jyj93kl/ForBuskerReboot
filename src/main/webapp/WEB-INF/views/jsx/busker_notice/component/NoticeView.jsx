import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import 'css/busker_notice/notice_view.css';

class NoticeView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list : false,
            pageNum : props.match.params.num
        };
        
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() { 

        const pageNum = this.state.pageNum;
        
        var requestData = new Object();
        requestData["NOTICE_NO"] = pageNum;
    
        axios.post('/notice/noticeView.do', requestData)  
        .then((result) => {  
            console.log(result);
            const list = result.data.returnData; 
            
            console.log("NoticeView.jsx component() : ", list); 
            
            this.setState({
                list
            });
            

        })
        .catch(function (error) {
            console.log(error);
        });
        
    }  
    
    
    handleDelete() {
        const pageNum = this.state.pageNum;
        
        var requestData = new Object();
        requestData["NOTICE_NO"] = pageNum;
    
        axios.post('/notice/noticeDelete.do', requestData)  
        .then((result) => {  
            console.log(result);
            
            alert("게시글 삭제가 완료되었습니다.");
            
            location.href="/notice_main";

        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    
    

    render() {
        if (this.state.list) {
            
            const contentCode = this.state.list.NOTICE_CONTENT;
            
            return (
                <div className="notice-view">
                    <div className="notice-view-top">
                        <span>[{this.state.list.NOTICE_CATEGORI}]</span> &nbsp; 
                        <span>{this.state.list.NOTICE_TITLE}</span>
                        <span>{this.state.list.NOTICE_DATE}</span>
                    </div>
                    <div className="notice-view-content" dangerouslySetInnerHTML={ {__html: contentCode} }></div>
                    <div className="notice-view-button">
                        <Link to={`/NoticeWrite/${this.state.pageNum}`}><button type="button">수정하기</button></Link>
                        <button type="button" onClick={this.handleDelete}>삭제하기</button>
                        <Link to="/NoticeContent"><button type="button">목록으로</button></Link>
                    </div>
                    <div className="clear"></div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
            
    }
}


export default NoticeView;