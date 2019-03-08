import '../../../resources/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const livechecker = require("livechecker");
const youtubeLive = new livechecker.YouTube("AIzaSyAIHawUHmuINP1fx4ajh-T_4MZp2BSnSYQ");

class SubPage extends React.Component {

    componentDidMount() { 

        
        var requestData = new Object();
        requestData["test_1"] = "value_1";
        requestData["test_2"] = "value_2";
        requestData["test_3"] = "value_3";
        requestData["test_4"] = "value_4";
        
        axios.post('/users', requestData ) 
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return <div className="sub">JSX 서브페이지 연결 테스트!!!</div>;
    }

}

ReactDOM.render(<SubPage/>, document.getElementById('root'));
