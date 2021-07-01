import React from 'react';

import '../assets/css/SocialMedia.css';

import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';

const SocialMedia = () => {
    return(
        <div className="container">
            <a href="https://www.facebook.com/ArturoCH0">
                <img src={facebook} alt="Facebook"/>
            </a>

            <a href="https://instagram.com/arturocamach0">
                <img src={instagram} alt="Instagram"/>
            </a>
            
            <a href="https://twitter.com/arturo_camacho0">
                <img src={twitter} alt="Twitter"/>
            </a>
        </div>
    );
}

export default SocialMedia;