import React from 'react';
import axios from 'axios';

import NoticeTableRow from './NoticeTableRow.jsx';


class NoticeTable extends React.Component {
    
    constructor(props) { 
        super(props); 
        
        this.state = {list : false};
        
    }

    componentDidMount() { 
        axios.post('/notice/noticeMain.do')  
        .then((result) => {  
            const list = result.data.list; 
            
            console.log("NoticeTable.jsx component() : ", list); 
            
            this.setState({
                list
            });
            

        })
        .catch(function (error) {
            console.log(error);
        });
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
                               no={list.noticeNo}
                               title={list.noticeTitle}
                               categori={list.noticeCategori}
                               writedate="insert 완성 후 다시 확인 (양식이 이상하게 들어감.)"
                               key={i} 
                           />
                       );
                   })}
               </tbody>
           </table>
       );
    }

}


export default NoticeTable;