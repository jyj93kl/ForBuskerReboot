import React from 'react';

import NoticeLeftMenu from './NoticeLeftMenu.jsx';
import NoticeTable from './notice/NoticeTable.jsx';
import FaqTable from './faq/FaqTable.jsx';


import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class NoticeContent extends React.Component {
    
    render() {
        
        return (
            <div>
                <NoticeLeftMenu/>
                <div className="notice-content">
                    <NoticeTable />
                    {/* <FaqTable /> */}
                    
                    {
                        document.getElementById('session-level').value == 'Admin' 
                        &&
                        
                        <Link to="/NoticeWrite">
                            <button>글쓰기</button>
                        </Link>
                    }
               </div>
            </div>
        );
    }

}


export default NoticeContent;