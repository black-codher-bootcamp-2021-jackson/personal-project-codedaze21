import React, { useState, useEffect} from 'react'

import {Nav, NavbarContainer, NavLogo, Bars, NavMenu, NavItem, NavLinks} from './NavbarAfterSignInElements'
import BrainSyncLogo from '../../Images/BrainSyncLogo.svg'
import UserProfilePic from '../../Images/UserTemp.svg'
import{animateScroll as scroll} from 'react-scroll'


const NavbarAfterSignIn = ({toggle}) => {

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
                    <div className="profilePicNavWrap">
                        <img className="UserProfileImgNav" alt="userpic" src={UserProfilePic} href=''/>
                    </div>
                    <NavLogo to="/"><img alt="Logo" src={BrainSyncLogo} onClick={toggleHome} height="20"/></NavLogo>
                    <Bars onClick={toggle}/>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/logout'><button className="logoutButton">LOGOUT</button></NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
;}

export default NavbarAfterSignIn;
