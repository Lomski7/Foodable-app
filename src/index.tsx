import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './pages/1Home/Home';
import HIW from './pages/3HowItWorks/HIW';
import AboutUs from './pages/2AboutUs/AboutUs';
import Contact from './pages/4Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/how-it-works' element={<HIW/>}/> 
        <Route path='/Contact' element={<Contact/>}/> 
          </Routes>
    </Router>
  </React.StrictMode>
);
