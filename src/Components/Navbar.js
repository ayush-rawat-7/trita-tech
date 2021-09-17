import React, { useState } from 'react'
import { links } from '../utils/links'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Wrapper>
      <div className={`${isMenuOpen ? 'nav-links' : 'nav-links hide-links'}`}>
        <div className=' in-link'></div>
        <div className='underline'></div>
        <button className='close-btn' onClick={toggleMenu}>
          <GrFormClose />
        </button>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.path} onClick={toggleMenu}>
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='navbar'>
        <div className='demo-logo'></div>
        <button className='menu'>
          <FiMenu onClick={toggleMenu} />
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem;
    width: 100%;
    z-index: 1;
    order: 1;
    position: relative;
  }
  .nav-links {
    position: absolute;
    background-color: white;
    /* top: -3rem; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }
  .menu {
    margin-right: 0;
  }
  .nav-links svg {
    color: red;
  }
  .close-btn {
    z-index: 2;
    position: absolute;
    right: 0;
    border: none;
    margin: 0;
    padding: 0;
  }
  .underline {
    width: 80vw;
    height: 0.1rem;
    background-color: gray;
    margin-top: 1rem;
  }
  .in-link {
    margin-top: 1.5rem;
    background-color: black;
    width: 3rem;
    height: 3rem;
  }
  .nav-links ul {
    margin: 1rem 0 0rem 0;
    padding: 0;
    list-style: none;
    width: 100%;
    text-align: center;
  }
  ul li {
    width: 100%;
    margin-left: 0rem;
  }
  li a {
    display: block;
    width: 100%;
    padding: 1.5rem;
    height: 100%;
    text-decoration: none;
    color: gray;
  }
  .hide-links {
    transform: translateX(-100%);
  }
  button {
    background: none;
    border: none;
  }
  svg {
    font-size: 2.3rem;
    color: white;
    margin-right: 1rem;
  }
  .demo-logo {
    background-color: white;
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
  }
  @media (min-width: 1500px) {
    .menu {
      display: none;
    }
    .hide-links {
      transform: translateX(0);
    }
    .navbar {
      height: 4rem;
      width: auto;
    }
    .demo-logo {
      display: inline-block;
    }
    .nav-links {
      position: absolute;
      background-color: transparent;
      width: 100%;
      height: 5rem;
      flex-direction: row;
    }
    .in-link {
      display: none;
    }
    .underline {
      display: none;
    }
    .close-btn {
      display: none;
    }
    .nav-links ul {
      margin: 0;
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    ul li {
      width: fit-content;
      color: white;
      margin-left: 0rem;
    }
    li a {
      color: white;
      font-size: 1.5rem;
    }
  }
`
