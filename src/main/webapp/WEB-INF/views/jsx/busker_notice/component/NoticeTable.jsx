import React from 'react';
import axios from 'axios';

import NoticeTableRow from './NoticeTableRow.jsx';

import { connect } from 'react-redux';
import * as actions from '../../actions'; 

class NoticeTable extends React.Component {
    
    constructor(props) { 
        super(props); 
        
        this.state = {list : false};
        
    }

    componentDidMount() { 
        var categori = "notice-all";

        var requestData = new Object();
        requestData["NOTICE_CATEGORI"] = categori;
        
        axios.post('/notice/noticeMain.do', requestData)  
        .then((result) => {  
            console.log(result);
            const list = result.data.returnData; 
            
            console.log("NoticeTable.jsx component() : ", list); 
            
            this.setState({
                list
            });
            

        })
        .catch(function (error) {
            console.log(error);
        });
    }  
    
    
    componentWillReceiveProps(nextProps) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!! :: component Will receive props : ", nextProps);
        
        if(nextProps.whatList == 'list') {
            this.setState({
                list : nextProps.listNameFromParent
            })
        }
        else if(nextProps.whatList == 'search') {
            this.setState({
                list : nextProps.searchList
            })
        }
    }
    
    
    

    render() {
       return (
           <table>
               <tbody>
                   <tr>
                       <th>No</th>
                       <th>제목</th>
                       <th>등록일</th>
                       <th>분류</th>
                   </tr>
                   {this.state.list != false && this.state.list.map((list, i) => {
                       return (
                           <NoticeTableRow 
                               no={list.NOTICE_NO}
                               title={list.NOTICE_TITLE}
                               categori={list.NOTICE_CATEGORI}
                               writedate={list.NOTICE_DATE}
                               key={i} 
                           />
                       );
                   })}
               </tbody>
           </table>
       );
    }

}

const mapStateToProps = (state) => {
    return {
        searchList: state.Search.searchList,
        whatList: state.Search.whatList
    };
}


export default connect(mapStateToProps)(NoticeTable);