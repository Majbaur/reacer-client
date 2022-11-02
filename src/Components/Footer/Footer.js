import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        
        <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
					<li><Nav.Link style={{color:'white'}} as={Link} to="blog">Blog</Nav.Link></li>
					<li><Nav.Link style={{color:'white'}}  href="home#Products">Our Products</Nav.Link></li>
					<li><Nav.Link style={{color:'white'}}  href="myitems">your Products</Nav.Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
				   <li><Nav.Link style={{color:'white'}} as={Link} to="manageInventories">Products Status</Nav.Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
				   <li><Nav.Link style={{color:'white'}}  href="home#Products">Vehicle</Nav.Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
				   <Link as={Link} to=""><i className="fab fa-facebook-f"></i></Link>
				   <Link as={Link} to=""><i className="fab fa-twitter"></i></Link>
				   <Link as={Link} to=""><i className="fab fa-instagram"></i></Link>
				   <Link as={Link} to=""><i className="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    );
};

export default Footer;