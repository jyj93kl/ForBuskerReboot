import React from 'react';


class NoticeContent extends React.Component {

    render() {
        return (
            <div className="notice-content">
                <table>
                    <tbody>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>분류</th>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><a href="#">공지사항 테스트입니다 ????????</a></td>
                            <td>2019년 3월 11일</td>
                            <td>공지사항</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><a href="#">오픈 기념 이벤트</a></td>
                            <td>2019년 3월 11일</td>
                            <td>공지사항</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><a href="#">FOR BUSKER 플랫폼이 오픈하였습니다 !</a></td>
                            <td>2019년 3월 11일</td>
                            <td>공지사항</td>
                        </tr>
                    </tbody>
                </table>
           </div>
        );
    }

}


export default NoticeContent;