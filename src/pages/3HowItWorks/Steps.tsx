import React from "react";

import "./Steps.css";
import logoImage from "../../assets/images/HIW-1 step image.png";
import logoImage1 from "../../assets/images/HIW-2 step image.png";
import logoImage2 from "../../assets/images/HIW-2-1 step  image.png";
import logoImage3 from "../../assets/images/HIW-3 step  image.png";
import logoImage4 from "../../assets/images/HIW-4 step  image.png";


function HIWLandingPage() {
  return (
    <div className="HIW-Main-Steps-Container">
      <div className="Steps-Box">
        <div className="Step-1">
          <img src={logoImage} />
          <div className="Step-1-text">
            <h1>
              <span className="circle">1</span> Connect
            </h1>
            <p>Download the Foodable app.</p>
          </div>
        </div>
        <div className="Step-2">
          <img src={logoImage1} />
          <div className="Step-2-text">
            <h1>
              <span className="circle">2</span> Choose
            </h1>
            <p>Choose who you are: Donator or Reciever.</p>
          </div>
          <img src={logoImage2} />
        </div>
        <div className="Step-3">
          <img src={logoImage3} />
          <div className="Step-3-text">
            <h1>
              <span className="circle">3</span> Share
            </h1>
            <p>Create your post and share it to others.</p>
          </div>
        </div>
        <div className="Step-4">
          <img src={logoImage4} />
          <div className="Step-4-text">
            <h1>
              <span className="circle">4</span> Await your pick-up
            </h1>
            <p>Create your post and share it to others.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HIWLandingPage;
