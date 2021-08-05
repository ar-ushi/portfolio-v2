import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  flex: 1;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--primary);
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: var(--primary);
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/#about">About</NavItem>
      <NavItem to="/#jobs">Experience</NavItem>
      <NavItem to="/#position">Achievements</NavItem>
      <NavItem to="/#Contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks