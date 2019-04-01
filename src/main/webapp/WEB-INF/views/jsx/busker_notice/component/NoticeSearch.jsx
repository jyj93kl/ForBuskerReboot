import 'css/busker_common/reset.css';
import 'css/busker_notice/notice_search.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

import React from 'react';


class NoticeSearch extends React.Component {

    render() {
        return (
            <form className="search-box">
                <input type="text" placeholder="검색어를 입력해주세요."/>
                <FontAwesomeIcon icon="search" className="search-icon"/>
                <div className="clear"></div>
            </form>
        );
    }

}


export default NoticeSearch;