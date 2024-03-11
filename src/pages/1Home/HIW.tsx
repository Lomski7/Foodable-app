import React from "react";
import './HIW.css'
import logoImage1 from "../../assets/images/arrow-left-line.png";
import logoImage2 from "../../assets/images/App.png";
import logoImage3 from "../../assets/images/Post.png";
import logoImage4 from "../../assets/images/Bike.png";

function HIW () {
return <div>
<h1 className="Heading1">How It Works</h1>
<div className="background-box">
        <div className="steps">
            <div className="step1">First of all</div>
            <div className="step2">After you can</div>
            <div className="step3">In the end relax and</div>
        </div>
        <div className="arrow">
            <div className=""><img className='HIVImg' src={logoImage1} alt=""/></div>
            <div className=""><img className='HIVImg' src={logoImage1} alt=""/></div>
            <div className=""><img className='HIVImg' src={logoImage1} alt=""/></div>
        </div>
        <div className="instruction">
            <div className="instruction1"><img className='HIVImg' src={logoImage2} alt=""/>Download the App</div>
            <div className="instruction2"><img className='HIVImg' src={logoImage3} alt=""/>Create  your post</div>
            <div className="instruction3"><img className='HIVImg' src={logoImage4} alt=""/>wait for the driver</div>
        </div>
</div>
</div>
}

export default HIW;