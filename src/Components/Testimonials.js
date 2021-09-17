import React from 'react'
import styled from 'styled-components'
export const Testimonials = () => {
  return (
    <Wrapper>
      {/* <div className='container'> */}
      <div className='testimonials'>
        <h2 className='testimonial-head'>Testimonials</h2>
        <div
          id='carouselExampleIndicators'
          class='carousel slide center-item'
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              class='active ind'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <div className='testimonial'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam Lorem ipsum dolor sit amet consectetur..
                </p>
                <h5>Lorem</h5>
                <h5>Designation</h5>
              </div>
            </div>
            <div class='carousel-item'>
              <div className='testimonial'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam Lorem ipsum dolor sit amet consectetur..
                </p>
                <h5>Lorem</h5>
                <h5>Designation</h5>
              </div>{' '}
            </div>
            <div class='carousel-item'>
              <div className='testimonial'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam Lorem ipsum dolor sit amet consectetur..
                </p>
                <h5>Lorem</h5>
                <h5>Designation</h5>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .container {
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
    padding: 3rem;
  }
  .testimonials {
    /* margin: 0 auto; */
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
    padding: 3rem;
    z-index: 1;
  }
  .testimonial-head {
    text-align: center;
    color: white;
    margin-bottom: 1.5rem;
  }
  .carousel-item {
    background-color: rgba(66, 153, 245, 0.3);
    border-radius: 20px;
    height: 18rem;
    display: none;
    transition: all 0.6s linear;
  }
  .active {
    display: block;
  }
  .testimonial {
    /* background: white; */
    padding: 2rem;
  }

  h5 {
    text-align: center;
    color: white;
  }
  p {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2.5rem;
  }
  @media (max-width: 900px) and (min-width: 600px) {
    .carousel-inner {
      max-width: 30rem;
      /* justify-content: center; */
    }
    .center-item {
      display: flex;
      justify-content: center;
    }
  }
  @media (min-width: 900px) {
    .carousel-inner{
      text-align: center;
      display: flex;
      justify-content: space-between;
    }
    .carousel-item .active {
      text-align: center;
      margin-bottom: 8rem;
      width: 30rem;
    }
    .carousel-item p {
      margin: 2rem 0 6rem 0;
    }
  }
  @media (min-width: 1500px) {
    .carousel-inner {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .testimonial-head{
      font-size: 3rem;

    }
    .carousel-item  {
      height: 20rem;
      text-align: center;
      margin-bottom: 8rem;
      width: 30rem;
      display: flex;
    }
    .carousel-item p {
      margin: 2rem 0 6rem 0;
    }
  }
`
