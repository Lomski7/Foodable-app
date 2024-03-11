import React from "react";
import Header from "../../components/Header/Header";
import HIWLandingPage from "./HIWLandingPage";
import Steps from './Steps';
import Footer from "../../components/Footer/Footer";

function HIW() {
  return (
    <div>
      <Header />
      <HIWLandingPage/>
      <Steps/>
      <Footer/>
      </div>
      );
}

export default HIW;
