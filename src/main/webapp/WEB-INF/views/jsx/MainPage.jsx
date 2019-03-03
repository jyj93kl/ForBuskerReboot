import '../../../resources/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class MainPage extends React.Component {

    componentDidMount() { 

        console.log("reqeustData");
        
        var requestData = new Object();
        requestData["test_1"] = "value_1";
        requestData["test_2"] = "value_2";
        requestData["test_3"] = "value_3";
        requestData["test_4"] = "value_4";
        
        console.log(requestData);
        axios.post('/users', requestData ) 
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    
    render() {
        return <div className="main">JSX 메인페이지 연결 테스트!!!</div>;
    }

}

ReactDOM.render(<MainPage/>, document.getElementById('root'));
