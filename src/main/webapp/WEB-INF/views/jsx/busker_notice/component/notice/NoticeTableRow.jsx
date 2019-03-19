import React from 'react';


const NoticeTableRow = ({no, title, writedate, categori}) => (
    <tr>
        <td>{no}</td>
        <td><a href="#">{title}</a></td>
        <td>{writedate}</td>
        <td>{categori}</td>
    </tr>
);


export default NoticeTableRow;