import React from 'react';

import NoticeTable from './NoticeTable.jsx';
import FaqTable from './FaqTable.jsx';


class NoticeContent extends React.Component {

    render() {
        return (
            <div className="notice-content">
                <NoticeTable />
                <FaqTable />
           </div>
        );
    }

}


export default NoticeContent;