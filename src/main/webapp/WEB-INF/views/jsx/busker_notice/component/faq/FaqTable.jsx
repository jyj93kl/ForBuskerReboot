import React from 'react';

import FaqTableRow from './FaqTableRow.jsx';


class FaqTable extends React.Component {

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
                    <FaqTableRow className="faq-often" no="1" title="Faq often!!" date="2019년 3월 25일" categori="Faq"/>
                    <FaqTableRow className="faq-member" no="1" title="Faq member!!" date="2019년 3월 25일" categori="Faq"/>
                    <FaqTableRow className="faq-busking" no="1" title="Faq busking!!" date="2019년 3월 25일" categori="Faq"/>
                    <FaqTableRow className="faq-streaming" no="1" title="Faq streaming!!" date="2019년 3월 25일" categori="Faq"/>
                    <FaqTableRow className="faq-video" no="1" title="Faq video!!" date="2019년 3월 25일" categori="Faq"/>
                </tbody>
            </table>
        );
    }

}


export default FaqTable;