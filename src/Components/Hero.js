import React from 'react'
import styled from 'styled-components'
import { CgMouse } from 'react-icons/cg'
export const Hero = () => {
  return (
    <Wrapper>
      <div className='hero'>
        <div className='info'>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <button className='btn'>Contact Us</button>
        </div>
        <div className='image-container'>
          <img
            src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
            alt='Office'
          />
          <CgMouse />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .hero::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 85%;
    top: 0;
    left: 0;
    background: rgb(94, 94, 159);
    background: linear-gradient(
      90deg,
      rgba(94, 94, 159, 1) 0%,
      rgba(108, 108, 209, 1) 0%,
      rgba(94, 94, 254, 1) 0%,
      rgba(46, 46, 143, 1) 46%,
      rgba(9, 29, 94, 1) 100%,
      rgba(9, 9, 121, 1) 100%,
      rgba(0, 41, 50, 1) 100%
    );
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .hero {
    position: relative;
    margin-top: -4rem;
    min-height: 100vh;
  }
  /* .hero-center {
    align-items: center;
    padding-top: 6.5rem;
  } */
  .info {
    text-align: center;
    padding-top: 6.5rem;
    color: white;
    font-size: 0.94rem;
  }
  .info .btn {
    margin: 2.5rem auto;
    color: white;
    background: #00e699;
    width: 9rem;
    height: 2.4rem;
    border-radius: 2rem;
    border: none;
  }
  .image-container {
    background: rgb(94, 94, 159);
    background: linear-gradient(
      90deg,
      rgba(94, 94, 159, 1) 0%,
      rgba(108, 108, 209, 1) 0%,
      rgba(94, 94, 254, 1) 0%,
      rgba(46, 46, 143, 1) 46%,
      rgba(9, 29, 94, 1) 100%,
      rgba(9, 9, 121, 1) 100%,
      rgba(0, 41, 50, 1) 100%
    );
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 0.5rem;
  }
  img {
    width: 90%;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto;
  }
  svg {
    color: white;
    font-size: 3rem;
    display: block;
    margin: 4rem auto;
  }

  @media (min-width: 1500px) {
    .hero::before {
      height: 100%;
    }
    .hero {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    .info {
      text-align: start;
      color: white;
      margin-top: 1rem;
    }
    .info h2 {
      font-weight: 700;
    }
    .info .btn {
      width: 14rem;
      height: 3.4rem;
    }
    .info .btn:hover {
      background-color: #00e654;
    }
    .image-container {
      background: none;
      background: none;
      width: 40%;
      margin-top: 15rem;
      margin-left: 6rem;
    }
    img {
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      display: block;
      /* margin: 0 auto; */
    }
    svg {
      flex-basis: 100%;
      margin-left: 0;
      margin-top: 6rem;
    }
  }
`
