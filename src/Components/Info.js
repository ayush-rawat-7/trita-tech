import React from 'react'
import styled from 'styled-components'
export const Info = () => {
  return (
    <Wrapper>
      <div className='containers'>
        <div className='img-container'>
          <img
            src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZSUyMHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            alt='office'
          />
        </div>
        <div className='info'>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            nisi adipisci quis culpa asperiores earum odit! Doloribus est ea
            reiciendis lorem12?
          </p>
        </div>
      </div>
      <div className='containers'>
        <div className='img-container flip'>
          <img
            src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZSUyMHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            alt='office'
          />
        </div>
        <div className='info'>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            nisi adipisci quis culpa asperiores earum odit! Doloribus est ea
            reiciendis?
          </p>
        </div>
      </div>
      <div className='containers'>
        <div className='img-container'>
          <img
            src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZSUyMHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            alt='office'
          />
        </div>
        <div className='info'>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            nisi adipisci quis culpa asperiores earum odit! Doloribus est ea
            reiciendis?
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* width: 80vw;
background-color:red;
margin: auto; */
  /* background-color: red; */
  margin-top: 1rem;
  .containers {
    background-size: cover;
    width: 90%;
    margin: 0 auto;
    background-repeat: no-repeat;
    color: hsla(239, 19%, 19%, 1);
    text-align: center;
  }
  .containers h2 {
    font-weight: 700;

    margin: 1rem;
  }
  img {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
  }
  p {
    color: hsla(239, 19%, 19%, 0.6);
    text-transform: justify;
    margin: 1rem 0 4rem 0;
  }
  @media (min-width: 1500px) {
    .containers {
      display: flex;
      /* grid-template-columns: 1fr 1fr; */
      width: 80%;
      margin: 10rem auto;
      background-repeat: no-repeat;
      color: hsla(239, 19%, 19%, 1);
      text-align: start;
    }
    .containers h2 {
      font-size: 2.3rem;
    }
    .img-container {
      width: 80%;
      flex-basis: 140%;
    }
    p {
      font-size: 1.7rem;
      margin: 0;
    }
    .info {
      display: flex;
      margin-left: 2rem;
      flex-direction: column;
      align-items: flex-start;
    }
    .containers .flip{
      order: 2;
      margin-left: 1rem;
    }
  }
`
