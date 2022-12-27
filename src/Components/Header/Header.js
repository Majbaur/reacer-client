
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';


const Header = () => 
{
    const [user] = useAuthState(auth);

    const handleSignout =() =>
    {
        signOut(auth);
    }
    
    return (
        <div className='header mb-5'>
                    <Navbar className='navColor' style={{backgroundColor:'#000000'}} collapseOnSelect expand="lg" sticky='top'  variant="dark">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white ' as={Link} to='/home'><h1><i>RC</i></h1></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                            <Nav.Link className='text-white' as={Link} to='/organize'> Organize</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/myGame'> My Game</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/myprofile'>My Profile</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/result'> Result</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to='/userRegistionForm'>Profile Update</Nav.Link>
                            

                            <NavDropdown className='text-white' title="Rules" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/addRules'>Add Rules</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/allRules'>All Rules</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                            </NavDropdown>
                            <NavDropdown className='text-black' title="Announcement" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/addAnnouncement'>Add Announcement</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/allannouncement'>All Announcement</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                            </NavDropdown>
                            {/* <NavDropdown className='text-white' title="More" id="collasible-nav-dropdown"></NavDropdown>
                                <NavDropdown.Item as={Link} to='/addAnnouncement'>Add Announcement</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to='/allannouncement'>All Announcement</NavDropdown.Item>
                            </NavDropdown> */}
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white'style={{textDecoration: "none",textColor:'black'}} onClick={handleSignout}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;