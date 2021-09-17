import React from 'react'
import styled from 'styled-components'
import { AiOutlineTwitter } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { FiInstagram } from 'react-icons/fi'
import { GrFacebook } from 'react-icons/gr'
import { FaLongArrowAltUp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Wrapper>
      <div className='link-container'>
        <div className='top-links'>
          <a href='/#'>Lorem Ipsum</a>
          <a href='/#'>Lorem Ipsum</a>
          <a href='/#'>Lorem </a>
          <a href='/#'>Lorem Ipsum</a>
        </div>
      </div>
      <div className='underline'></div>
      <div className='demo-logo'></div>
      <div className='terms'>
        <p>Terms of service Privacy Policy &copy; 2021 TritaTech</p>
      </div>
      <div className='link-icons'>
        <AiOutlineTwitter />
        <GrLinkedinOption />
        <FiInstagram />
        <GrFacebook />
        <p>Website By TritaTech</p>
      </div>
      <div className='link-to-top'>
        <a href='#top'>
          <FaLongArrowAltUp />
        </a>
        <a href='#top'>Back to top</a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: hsl(226, 16%, 25%);
  .top-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: 200;
  }
  .demo-logo {
    background-color: white;
    width: 4rem;
    height: 4rem;
    margin: 2rem auto 1rem auto;
  }
  .terms {
    text-align: center;
    width: 15vw;
    margin: auto;
    color: white;
    font-weight: 200;
  }
  .link-icons {
    text-align: center;
    color: white;
  }
  .link-icons svg {
    margin: 0 0.3rem;
  }
  .link-icons p {
    font-size: 0.8rem;
  }
  .link-to-top {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
  }
  @media (min-width: 1500px) {
    .link-container {
      width: 60vw;
      display: flex;
      margin: 0 auto;
      justify-content: center;
    }
    .top-links {
      flex-direction: row;
    }
    a {
      font-size: 2rem;
      margin: 0 1.5rem;
    }
    .underline {
      width: 70vw;
      margin: 1rem auto;
      height: 0.1rem;
      background-color: white;
    }
    .demo-logo {
      width: 6rem;
      height: 6rem;
    }
    .terms {
      width: 60vw;
      font-size: 2rem;
    }
    .link-icons {
      text-align: center;
      color: white;
      font-size: 2.5rem;
    }
    .link-icons svg {
      margin: 0 1rem;
    }
    .link-icons p {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .link-to-top {

      margin-top: 4rem;
    }
  }
`
