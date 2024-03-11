import React from "react"
import logoImage1 from "../../assets/images/News1.png";
import logoImage2 from "../../assets/images/News2.png";
import logoImage3 from "../../assets/images/News3.png";
import './LatestNews.css'
function LatestNews () {
return <div>

<div className='second-background-container'>
<h1 className='SecondH1'>Latest News</h1>
            <div className="container">
<div className="box">
    <img className='NewsImg' src={logoImage1} alt=""/>
    <h2 className='SecondH2'>Living in streets of New York</h2>
    <p className='News-p'>In a city of more than 8.4 million <br/> people, nearly one in every 120 <br/> New Yorkers is homeless</p>
    <button className='NewsButton'>Learn More</button>
</div>
<div className="box">
    <img className='NewsImg' src={logoImage2} alt=""/>
    <h2 className='SecondH2'>Hunger In New York</h2>
    <p className='News-p'>In New York, 1,882,580 people are <br/> facing hunger - and of them <br/> 596,060 are children.</p>
    <button className='NewsButton'>Learn More</button>
</div>
<div className="box">
    <img className='NewsImg' src={logoImage3} alt=""/>
    <h2 className='SecondH2'>People Help New York</h2>
    <p className='News-p'>About 3,000 individuals from <br/> diverse backgrounds and with a <br/> wide range of skills and </p>
    <button className='NewsButton'>Learn More</button>
</div>
</div>

</div>

</div>
}
export default LatestNews;