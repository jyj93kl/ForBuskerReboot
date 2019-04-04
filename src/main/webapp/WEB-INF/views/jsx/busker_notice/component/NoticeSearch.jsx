import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_search.css';

import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import reducers from '../../reducers';
import * as actions from '../../actions'; 


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
                const list = result.data.returnData; 
                
                this.setState({
                    list
                });
                
                
//                const store = createStore(reducers);
//                store.subscribe(() => console.log("change state mainpage : ", store.getState()));
//                store.dispatch(actions.search(list));
//                
//                console.log("! store" , this.props.store);
                
                this.props.onUpdateSearchList(list);
                
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

let mapStateToProps = (state) => {
    return {
        searchList: state.Search.searchList
    }
}
 
let mapDispatchToProps = (dispatch) =>{
    return {
        onUpdateSearchList: (searchList) => dispatch(actions.search(searchList))
    };
}
 
NoticeSearch = connect(mapStateToProps, mapDispatchToProps)(NoticeSearch);


export default NoticeSearch;