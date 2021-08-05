import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavbarLinks from "./navbar-links"
import { Logo, Logo, Logo } from "./ui-components/icons"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: var(--black)
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition:all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(0px);
        background-color: var(--black);
        box-shadow: 0 10px 30px -10px #111111;
      `};

    ${props =>
    props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(calc(70px * -1));
        box-shadow: 0 10px 30px -10px #111111;
      `};
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 768px) {
    display: flex;
  }
`   

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: var(--black);
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: var(--white);
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: var(--white);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = ({atHome}) => {
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {  
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = atHome ? loaderDelay : 0;
  const fadeClass = atHome ? 'fade' : '';
  const fadeDownClass = atHome ? 'fadedown' : '';


  const Logo = (
    <div className="logo" tabIndex="-1">
      {atHome ? (
        <a href="/" aria-label="Home">
          <Logo />
        </a>
      ): (
        <Link to="/" aria-label="home">
          <Logo />
        </Link>
      )}
    </div>
  )

  const Resume = (
    <a className = "resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  )

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <StyledHeader>

    </StyledHeader>
  )
}

export default Navbar1