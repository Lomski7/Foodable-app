import React from 'react';
import './Footer.css'
import logoImage from "../../assets/images/FoodableLogo.png";
import logoImage1 from "../../assets/images/App-store-Download.png";
import logoImage2 from "../../assets/images/Google-play-download.png";

function Footer() {
    return (
      <footer  className="footer mt-auto py-3  text-white">
        <div className="row p-0 m-0 mt-4">
          <div className="col-6 col-md-2 " style={{marginLeft: '60px', display:'grid'}} >
            <img  src={logoImage} alt=""  />
            <img  src={logoImage1} alt="" style={{marginTop:'20px'}}/>
            <img  src={logoImage2} alt="" style={{marginTop:'10px'}}/>
          </div>
  
          <div className="col-6 col-md-3 mb-3 " >
            <h5 style={{color: 'orange'}}>CONTACT</h5>
            <ul className="nav flex-column" style={{ marginTop: '16px' }}>
              <li className="nav-item mb-2"><span className="nav-link p-0 text-white" style={{ marginTop: '16px' }}>314 Dogwood St. <br/> Poughkeepsie, NY 12603</span></li>
              <li className="nav-item mb-2"><span className="nav-link p-0 text-white" style={{ marginTop: '16px' }}>022-32-34-32</span></li>
              <li className="nav-item mb-2"><span className="nav-link p-0 text-white" style={{ marginTop: '16px' }}>Foodable@gmail.com</span></li>
            </ul>
          </div>
  
          <div className="col-6 col-md-2 mb-3">
            <h5 style={{color: 'orange'}}>TERMS & PRIVACY</h5>
            <ul className="nav flex-column" style={{ marginTop: '16px' }}>
    <li className="nav-item mb-2" style={{ marginTop: '16px' }}><a href="#" className="nav-link p-0 text-white" >Terms of Use</a></li>
    <li className="nav-item mb-2" style={{ marginTop: '16px' }}><a href="#" className="nav-link p-0 text-white">Privacy Policy</a></li>
    <li className="nav-item mb-2" style={{ marginTop: '16px' }}><a href="#" className="nav-link p-0 text-white">Donor Privacy Policy</a></li>
  </ul>
</div>
  
          <div className="col-md-3 offset-md-1 mb-3">
            <form>
              <h5 style={{color: 'orange'}}>Subscribe to our newsletter</h5>
              <p>Receive the latest updates directly on your email.</p>
              <div className="d-flex flex-column flex-sm-row w-80 gap-2">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{ width: '300px' }}></input>
                <button className='footerBtn'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    );
  }
  

export default Footer;

