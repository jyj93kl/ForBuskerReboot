import 'css/busker_common/reset.css';
import 'css/busker_common/search.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

import React from 'react';


class Search extends React.Component {

    render() {
        return (
            <form className="search-box">
                <input type="text" placeholder="검색어를 입력해주세요."/>
                <FontAwesomeIcon icon="search" className="search-icon"/>
                <div class="clear"></div>
            </form>
        );
    }

}


export default Search;