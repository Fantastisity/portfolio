import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import logo from "../../images/logo.png"

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: -150px;
  font-weight: bold;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  text-align: center;
  margin-right: -160px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
  padding: 15px;
  display: block;
`;

const NavLink = styled(LinkS)`
    font-size: 1.6em;
    text-decoration: none;
    background-image: linear-gradient(50deg, #4442c3, #31dbaf);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -1px;
    transition: 1s;
    font-family: "Alata", sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
      background-image: linear-gradient(60deg, #fff, #fff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
`;


function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
            <img src={logo} alt = "logo"/>
          </NavLogo>
            <NavMenu style={{fontFamily: "Geneva", fontSize: "19px"}}>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-300} >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='project' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='skill' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Connect</NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar;