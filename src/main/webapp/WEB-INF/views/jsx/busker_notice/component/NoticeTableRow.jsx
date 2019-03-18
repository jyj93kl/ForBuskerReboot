import React from 'react';


const NoticeTableRow = ({no, title, date, categori}) => (
    <tr>
        <td>{no}</td>
        <td><a href="#">{title}</a></td>
        <td>{date}</td>
        <td>{categori}</td>
    </tr>
);


export default NoticeTableRow;