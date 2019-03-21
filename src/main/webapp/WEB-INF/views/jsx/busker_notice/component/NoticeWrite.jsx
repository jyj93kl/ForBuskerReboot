import 'css/busker_common/reset.css';

import React from 'react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import 'css/busker_notice/notice_write.css';

class NoticeWrite extends React.Component {

    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <div className="text-editor">
                <input type="text"></input>
                <ReactQuill 
                    value={this.state.text} 
                    onChange={this.handleChange}
                />
            </div>
        )
    }

}


export default NoticeWrite;