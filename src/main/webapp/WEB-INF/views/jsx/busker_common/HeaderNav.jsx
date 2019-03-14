import React from 'react';

import NavLogin from './NavLogin.jsx';
import NavLogout from './NavLogout.jsx';


class HeaderNav extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const sessionEmail = document.getElementById("session-email").value;
        
        if (sessionEmail) {
            return <NavLogin />
        } else {
            return <NavLogout />
        }
        
    }

}


export default HeaderNav;