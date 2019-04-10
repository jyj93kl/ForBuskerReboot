import React from 'react';
import {Link} from 'react-router-dom';

const NoticeTableRow = ({no, title, writedate, categori}) => {
    return (
        <tr>
            <td>{no}</td>
            <td><Link to={`/notice/NoticeView/${no}`}>{title}</Link></td>
            <td>{writedate}</td>
            <td>{categori}</td>
        </tr>
    );
}

export default NoticeTableRow;