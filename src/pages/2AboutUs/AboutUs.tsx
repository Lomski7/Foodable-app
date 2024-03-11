import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LandingPage from './AU-LandingPage';
import OurMission from './OurMission';
import OurHistory from './OurHistory';
function AboutUs () {
    return <div>
        <Header/>
        <LandingPage/>
        <OurMission/>
        <OurHistory/>
        <Footer/>
        </div>
}

export default AboutUs;