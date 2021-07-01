import React, {Component} from 'react';

import '../assets/css/LinkBox.css';

const LinkBox = (props) => {
    let link = props.link;
    return(
        <React.Fragment>
            <a className="box" href={link.link} >
                <h5>{link.title}</h5>
            </a>
        </React.Fragment>
    );
}

export default LinkBox;