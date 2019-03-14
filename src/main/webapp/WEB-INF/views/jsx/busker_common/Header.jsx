import 'css/busker_common/reset.css';
import 'css/busker_common/header.css';

import React from 'react';

import HeaderNav from './HeaderNav.jsx';


class Header extends React.Component {

    render() {
        return (
            <header>
                <HeaderNav/>
            </header>
        );
    }

}


export default Header;