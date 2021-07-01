import React from 'react';

import '../assets/css/Details.css';

const Details = (props) => {
    return(
        <div className="details">
            <h1 className="details__name">{props.name}</h1>
            <h3 className="details__sub">{props.subtitle}</h3>
        </div>
    );
}

export default Details;