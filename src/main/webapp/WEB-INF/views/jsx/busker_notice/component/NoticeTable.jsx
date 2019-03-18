import React from 'react';

import NoticeTableRow from './NoticeTableRow.jsx';


class NoticeTable extends React.Component {

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>분류</th>
                    </tr>
                    <NoticeTableRow className="notice-all" no="1" title="공지사항 all!!" date="2019년 3월 25일" categori="공지사항"/>
                    <NoticeTableRow className="notice-busker" no="1" title="공지사항 busker!!" date="2019년 3월 25일" categori="공지사항"/>
                    <NoticeTableRow className="notice-normal" no="1" title="공지사항 normal!!" date="2019년 3월 25일" categori="공지사항"/>
                </tbody>
            </table>
        );
    }

}


export default NoticeTable;