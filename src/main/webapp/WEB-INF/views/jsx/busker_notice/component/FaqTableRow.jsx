import React from 'react';


const FaqTableRow = ({no, title, date, categori}) => (
    <tr>
        <td>{no}</td>
        <td><a href="#">{title}</a></td>
        <td>{date}</td>
        <td>{categori}</td>
    </tr>
);


export default FaqTableRow;