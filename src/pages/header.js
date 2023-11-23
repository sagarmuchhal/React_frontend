import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// import Blog from './/view_blog';

function Index() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <Fragment>
      <div className={`canvas-open ${isMobileMenuOpen ? 'active' : ''}`} >
        <i className="icon_menu" onClick={toggleMobileMenu}></i>
      </div>
      <div className={`offcanvas offcanvas-start ${isMobileMenuOpen ? 'show' : ''}`} tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="mobileMenuLabel">Mobile Menu</h5>
    <button type="button" className="btn-close text-reset" onClick={toggleMobileMenu} aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <ul className="list-group">
      <li className="list-group-item" onClick={toggleMobileMenu}>
        <Link to="/home">Home</Link>
      </li>
      <li className="list-group-item" onClick={toggleMobileMenu}>
        <Link to="/rooms">Rooms</Link>
      </li>
      <li className="list-group-item" onClick={toggleMobileMenu}>
        <a href="/about-us">About Us</a>
      </li>
      <li className="list-group-item" onClick={toggleMobileMenu}>
        <Link to="/services">Services</Link>
      </li>
      <li className="list-group-item" onClick={toggleMobileMenu}>
        <Link to="/blog">News</Link>
      </li>
      <li className="list-group-item" onClick={toggleMobileMenu}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</div>

      
    <div className="menu-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="logo">
              <a href="/home">
                <img src="assets/img/logo1.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="nav-menu">
              <nav className="mainmenu">
           

                <ul>
                  <li className="active">
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <a href="/rooms" onClick={toggleMobileMenu}>
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a href="./about-us.html" onClick={toggleMobileMenu}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                    
                  </li>
                  <li>
                    <a href="/blog" onClick={toggleMobileMenu}>
                      News
                    </a>
                  </li>
                  <li>
                    <a href="/contact" onClick={toggleMobileMenu}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="nav-right search-switch">
                <i className="icon_search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></Fragment>
    
  );
}

export default Index;
