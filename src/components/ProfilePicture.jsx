import React, {Component} from 'react';

import '../assets/css/ProfilePicture.css';

import yo from '../assets/images/yo.jpg';

const ProfilePicture = () => {
    return(
        <React.Fragment>
            <div className="picture">
                <img src={yo} alt="Imágen de perfil" />
            </div>
        </React.Fragment>
    );
}

export default ProfilePicture;