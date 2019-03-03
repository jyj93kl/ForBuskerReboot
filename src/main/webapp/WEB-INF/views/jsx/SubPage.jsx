import '../../../resources/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

class SubPage extends React.Component {

    render() {
        return <div className="sub">JSX 서브페이지 연결 테스트!!!</div>;
    }

}

ReactDOM.render(<SubPage/>, document.getElementById('root'));
