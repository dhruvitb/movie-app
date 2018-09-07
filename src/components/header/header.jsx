import React from 'react';
import './header.css'

const header = props => {
    return <div className="header"
    style={{backgroundColor: props.colour}}>{props.children}</div>
}

export default header;