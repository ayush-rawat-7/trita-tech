import React from 'react'
import styled from 'styled-components'
export const Contact = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='image-container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpD_qW6RGPTfD-icMERng5gHolO9J2ym22A&usqp=CAU'
            alt='book'
          />
        </div>
        <div className='info'>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, id.
            Voluptatum harum illo porro inventore tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus consequatur mollitia, praesentium inventore vero eius enim maiores eveniet illo.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
  .container {
    background-size: cover;
    width: 90%;
    margin: 0 auto;
    background-repeat: no-repeat;
    color: hsla(239, 19%, 19%, 1);
    text-align: center;
  }
  img {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 3px;
    display: block;
    margin: 0 auto;
  }
  .container h2 {
    margin: 1rem;
    font-weight: 700;
  }
  p {
    color: hsla(239, 19%, 19%, 0.6);
    text-transform: justify;
    margin: 1rem 0 4rem 0;
  }
  @media (min-width: 1500px) {
    .container {
      display: flex;
      background-size: cover;
      width: 70%;
      margin: 7rem auto;
      background-repeat: no-repeat;
      color: hsla(239, 19%, 19%, 1);
      text-align: start;
    }
    .image-container{
      width: 80%;
      flex-basis: 140%;
    }
    .info{
      margin-left: 1rem;
    }
    .container h2 {
      margin: 1rem;
      font-weight: 700;
    }
    p {
      color: hsla(239, 19%, 19%, 0.6);
      text-transform: justify;
      margin: 1rem 0 4rem 0;
    }
  }
`
