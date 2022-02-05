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

    const toggleAbout = () => {
        scroll.scrollTo(600);
    }

    const toggleJourney = () => {
        scroll.scrollTo(1300);
    }

    const toggleContact = () => {
        scroll.scrollTo(2850);
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/"><img alt="Logo" src={gwilsonlogo} onClick={toggleHome} height="35"/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' onClick={toggleAbout}>ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='myjourney' onClick={toggleJourney}>JOURNEY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>PROJECTS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'>SKILLS</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='resume'>RESUME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' onClick={toggleContact}>CONTACT</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
;}

export default Navbar;
