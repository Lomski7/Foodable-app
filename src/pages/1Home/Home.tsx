import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import LandingPage from './LandingPage';
import LatestNews from './LatestNews';
import HIW from './HIW';
import OurVision from './OurVision';
import Statistics from './Statistics';
import Footer from '../../components/Footer/Footer';

function Home () {
    return <div className='Home-container'>
        <Header/>
        <LandingPage/>
        <LatestNews/>   
        <HIW/> 
        <OurVision/>
        <Statistics/>
        <Footer/>
        </div>
}

export default Home;