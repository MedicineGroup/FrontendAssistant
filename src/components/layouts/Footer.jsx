import React from 'react';

const Footer = () => {
  return (
    <>
    		{/* Footer Area */}
		<footer id="footer" className="footer ">
			{/* Footer Top */}
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<h2>About Us</h2>
								<p>Learn more about our commitment to your well-being and the personalized care that defines our healthcare philosophy.</p>
								{/* Social */}
								<ul className="social">
									<li><a href="#"><i className="icofont-facebook"></i></a></li>
									<li><a href="#"><i className="icofont-google-plus"></i></a></li>
									<li><a href="#"><i className="icofont-twitter"></i></a></li>
									<li><a href="#"><i className="icofont-vimeo"></i></a></li>
									<li><a href="#"><i className="icofont-pinterest"></i></a></li>
								</ul>
								{/* End Social */}
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer f-link">
								<h2>Quick Links</h2>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Services</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Our Cases</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li>	
										</ul>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Consuling</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
											<li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>	
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<h2>Open Hours</h2>
								<p>Visit us during our open hours to experience dedicated and accessible healthcare services tailored to your needs.</p>
								<ul className="time-sidual">
									<li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
									<li className="day">Saturday <span>9.00-18.30</span></li>
									<li className="day">Monday - Thusday <span>9.00-15.00</span></li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			{/*/ End Footer Top */}
			{/* Copyright */}
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="copyright-content">
								<p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a> </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*/ End Copyright */}
		</footer>
		{/*/ End Footer Area */}
		
    </>

);
};


export default Footer;