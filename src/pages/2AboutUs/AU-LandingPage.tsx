import React from "react";
import "./AU-LandingPage.css";

function AboutUs() {
  return (
    <div className="AU-Container">
      <h1 className="AU-H1">About Us</h1>
      <p className="AU-P">
        Foodable is the nation’s largest domestic hunger-relief organization.
        Thanks to <br /> donations and support from businesses, government
        organizations and individuals <br /> like you, the Feeding America
        network of food banks, pantries and meal programs <br /> serve virtually
        every community in the United States —{" "}
        <span style={{ color: "orange" }}>40 million people</span>, including <span style={{ color: "orange" }}>12
        <br /> million children </span>and <span style={{ color: "orange" }}> 7 million seniors</span>.
      </p>
    </div>
  );
}

export default AboutUs;
