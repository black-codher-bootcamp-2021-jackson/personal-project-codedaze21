import React, { useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import gwilsonlogo from '../../Images/BrainSyncLogo.svg'
import{animateScroll as scroll} from 'react-scroll'


const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }   else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/"><img alt="Logo" src={gwilsonlogo} onClick={toggleHome} height="20"/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/login'><button className="loginButton">LOGIN</button></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/signUp'><button className="signUpButton">SIGN UP</button></NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
;}

export default Navbar;
