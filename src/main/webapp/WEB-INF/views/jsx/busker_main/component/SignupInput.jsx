import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes)

    const SignupInput = ({yesId, noId, message, ...rest}) => (
        <div className="form-container">
            <input {...rest} className="form-input"/>
            <div className="icon-container">
                <FontAwesomeIcon icon="check" id={yesId} className="check-icon"/> 
                <FontAwesomeIcon icon="times" id={noId} className="check-icon"/>
            </div>
            <span>{message}</span>
        </div>
    );


export default SignupInput;