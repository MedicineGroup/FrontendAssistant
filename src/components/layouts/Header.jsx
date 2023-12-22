import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <>
      {/* Header Area */}
      <header className="header">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                {/* Contact */}

                {/* End Contact */}
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                {/* Top Contact */}
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone"></i>+880 1234 56789
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:support@yourmail.com">
                      support@yourmail.com
                    </a>
                  </li>
                </ul>
                {/* End Top Contact */}
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  {/* Start Logo */}
                  <div className="logo">
                    <a href="index.html">
                      <img src="/assets/logo.png" alt="#" />
                    </a>
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav"></div>
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>
                {/*<div className="col-lg-2 col-12">
								<div className="get-quote">
									<a href="appointment.html" className="btn">Book Appointment</a>
								</div>
							</div>*/}
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
      {/* End Header Area */}
    </>
  );
};
export default Header;
