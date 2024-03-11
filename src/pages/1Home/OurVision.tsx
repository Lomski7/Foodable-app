import React from 'react';
import './OurVision.css'
import logoImage1 from "../../assets/images/OurVision image.png";

function OurVision () {    
    return <div className='OVbackground-container'>
            <h1 className='ThirdH1'>Our Vision</h1>
            <div className='OVflex-container'>
                <div className='Textbox'>
                    <h2 className='OVH2'>America Without Hunger</h2>
                    <p className='OurVisionP'>Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.</p>
                </div>
                <img className='OurVisionImg' src={logoImage1} alt=""/>
            </div>
        </div>
    };

export default OurVision;