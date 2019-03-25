import React from 'react';

import {Link} from 'react-router-dom';


const NoticeTableRow = ({no, title, writedate, categori}) => {

    const num = no;

    return (
        <tr>
            <td>{no}</td>
            <td><Link to={`/NoticeView/${no}`}>{title}</Link></td>
            <td>{writedate}</td>
            <td>{categori}</td>
        </tr>
    );
}


export default NoticeTableRow;