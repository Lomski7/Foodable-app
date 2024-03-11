import React from "react";
import "./HIWLandingPage.css";
import logoImage from "../../assets/images/HIW Notebook.png";

function HIWLandingPage() {
  return (
    <div className="HIW-Main-LP-Container">
      <img className="Mockup" src={logoImage} />
      <div className="Landing-Page-Box">
      <h1 className="HIW-LP-H1">How It Works</h1>
      <h2 className="HIW-LP-H2">
        Foodable is a simple way to donate surplus <br />
        food and help feed your community
      </h2>
      <button className="HIW-LP-Btn">Get an app</button>
      </div>
    </div>
  );
}

export default HIWLandingPage;
