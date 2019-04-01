import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_search.css';

import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

import React from 'react';


class NoticeSearch extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {};
        
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleSearch() {
        const keyword = document.getElementById("search-keyword").value;
        
        if (keyword != "") {
            var requestData = new Object();
            
            requestData["keyword"] = keyword;
            
            axios.post('/notice/noticeSearch.do', requestData)
            .then((result) => {  
                console.log(result);
                const list = result.data.returnData; 
                
                console.log("NoticeSearch.jsx component() : ", list); 
                
                this.setState({
                    list
                });
                
            })
            .catch(function (error) {
                console.log(error);
            });
        } 
        else {
            alert("검색어를 입력해주세요.");
        }
    }

    render() {
        return (
            <form className="search-box">
                <input type="text" id="search-keyword" placeholder="검색어를 입력해주세요."/>
                <FontAwesomeIcon icon="search" className="search-icon" onClick={this.handleSearch}/>
                <div className="clear"></div>
            </form>
        );
    }

}


export default NoticeSearch;