import React from 'react';

import NoticeLeftMenu from './NoticeLeftMenu.jsx';
import NoticeTable from './notice/NoticeTable.jsx';
import FaqTable from './faq/FaqTable.jsx';

class NoticeContent extends React.Component {
    
    render() {
        
        return (
            <div>
                <NoticeLeftMenu/>
                <div className="notice-content">
                    <NoticeTable />
                    {/* <FaqTable /> */}
               </div>
            </div>
        );
    }

}


export default NoticeContent;