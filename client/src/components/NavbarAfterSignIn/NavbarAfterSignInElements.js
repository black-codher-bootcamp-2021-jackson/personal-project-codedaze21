import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #FFF;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    
    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-top: 20px;
        justify-content: flex-start;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 35px 24px 0px 24px;
    max-width: 1400px;
    
    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 480px) {
        justify-content: space-between;
    }
`

export const NavLogo = styled(LinkR)`
    font-family: 'Roboto', sans-serif;
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-weight: 900;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 480px) {
        justify-self: center;
    }
`

export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        position: relative;
        align-items: center;
        justify-items: center;
        // transform: translate(-100%, 60%);
        font-size: 2.5rem;
        cursor: pointer;
        color: #000;
        top: 10px;
        
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 50px;
`

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding 0 1.5rem;
    height: 100%;
    cursor: pointer;
    font-family: Roboto;
    font-weight: 900;
    line-height: 21px;
    font-size: 16px;
    letter-spacing: 2%;

    &.active {
        border-bottom: 3px solid #07B2C5;
    }

    &:hover {
        color: #07B2C5;
        cursor: pointer;
    }
`;