import React from "react";
import "./Contact-Us-Page.css";
import logoImage1 from "../../assets/images/Contact-Us-Phone.png";
import logoImage2 from "../../assets/images/Contact-Us-Mail.png";
import logoImage3 from "../../assets/images/ContactUs-Location.png";
import logoImage4 from "../../assets/images/Twitter.png";
import logoImage5 from "../../assets/images/Facebook.png";
import logoImage6 from "../../assets/images/Instagram.png";
function ContactUsPage() {
  return (
    <div>
      <h1 className="Main-H1">Contact Us</h1>
      <p className="Contact-P">
        Any question or remarks? Just write us a message!
      </p>
      <div className="Main-Container">
        <div className="Info-Container">
          <h1 className="Info-H1">Contact Information</h1>
          <p className="Info-P">Say something to start a live chat!</p>
          <div className="Info-div">
            <img src={logoImage1} />
            <span className="Info-Span">022-32-34-32</span>
          </div>
          <div className="Info-div">
            <img src={logoImage2} />
            <span className="Info-Span">Foodable@gmail.com</span>
          </div>
          <div className="Info-div">
            <img src={logoImage3} />
            <span className="Info-Span">
              314 Dogwood St.Poughkeepsie, NY 12603
            </span>
          </div>
          <div className="Social-Media">
            <img src={logoImage4} />
            <img src={logoImage5} />
            <img src={logoImage6} />
          </div>
        </div>
        <div className="Customer-Info">
          {[
            { label: "Full Name", placeholder: "Enter your full name" },
            { label: "Email", placeholder: "Enter your email address" },
            { label: "Phone Number", placeholder: "Enter your phone number" },
            {
              label: "Organization",
              placeholder: "Enter your organization name",
            },
            { label: "Message", placeholder: "Write your message" },
          ].map((info, index) => (
            <div key={index} className="input-group">
              <p>{info.label}</p>
              <input
                type="search"
                className="search-box"
                placeholder={info.placeholder}
                aria-label={info.label}
                style={{ width: "500px" }}
              ></input>
            </div>
          ))}
          <button className="Contact-Button">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
