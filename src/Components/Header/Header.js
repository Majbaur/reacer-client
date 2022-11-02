import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css"
import logo from '../../images/carLogo.jpg'


const Header = () => 
{
    const [user] = useAuthState(auth);

    const handleSignout =() =>
    {
        signOut(auth);
    }

    const homeLink = <Nav.Link style={{color:'black'}} as={Link} to='/home'>Home</Nav.Link>
    const addAnnouncementLink = <Nav.Link style={{color:'black'}} as={Link} to='/addAnnouncement'>Add Announcement</Nav.Link>
    const addRulesLink = <Nav.Link style={{color:'black'}} as={Link} to='/addRules'>Add Rules</Nav.Link>
    const allannouncementLink = <Nav.Link style={{color:'black'}} as={Link} to='/allannouncement'>All Announcement</Nav.Link>
    const allRulesLink = <Nav.Link style={{color:'black'}} as={Link} to='/allRules'>All Rules</Nav.Link>
    const allOrdersLink = <Nav.Link style={{color:'black'}} as={Link} to='/orders'>My Game</Nav.Link>
    const organizeLink = <Nav.Link style={{color:'black'}} as={Link} to='/organize'> Organize</Nav.Link>
    const resultLink = <Nav.Link style={{color:'black'}} as={Link} to='/result'> Result</Nav.Link>
    
    const myProfileLink = <Nav.Link style={{color:'black'}} as={Link} to='/myprofile'>My Profile</Nav.Link>
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className='p-3' fixed='top' variant="dark">
                <Container>
                {/* <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
                    <Navbar.Brand as={Link} to="/" className='d-flex align-items-center brand'>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            

                            
                            {
                                homeLink
                            }
                            {
                                user ? organizeLink : null
                            }
                            {
                                user ? addRulesLink : null
                            }
                            {
                                user ? allRulesLink : null
                            }
                            {
                                user ? addAnnouncementLink : null
                            }

                            {
                                user? allannouncementLink : null
                            }
                            {
                                user ? allOrdersLink : null
                            }
                            {
                                user? myProfileLink : null
                            }
                            {
                                user? resultLink : null
                            }

                            {
                                user ? <button className='btn btn-link text-decoration-none text-black' onClick={handleSignout}>Logout</button> : <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;