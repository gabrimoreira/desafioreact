import React from 'react';
import "../Style/Redes.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Redes(){
    return(
        <div className='mainRedes'>
        <div className="redes">
            <h1>Nossas Redes</h1>
            <div className="icones">
                <a href="https://www.facebook.com"><FaFacebook size={32} color="#3b5998" /></a>
                <a href="https://www.twitter.com"><FaTwitter size={32} color="#1da1f2" /></a>
                <a href="https://www.instagram.com"><FaInstagram size={32} color="#e1306c" /></a>
            </div>
        </div>
        </div>
    )
}
export default Redes
