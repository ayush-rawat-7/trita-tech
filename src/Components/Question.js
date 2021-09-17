import React from 'react'
import styled from 'styled-components'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
export const Question = () => {
  return (
    <Wrapper>
      <h2>Questions?</h2>
      <p>
        Help is free, and TritaTech is ready to assist you to make sure
        everything goes smoothly.
      </p>
      <div className='icons'>
        <AiOutlineMail className='mail' />
        <FaPhoneAlt />
        <ImWhatsapp />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 95vw;
  margin: 4rem auto;
  text-align: center;
  h2{
      font-weight: 700;
  }
  p {
    font-weight: 600;
    color: hsla(239, 19%, 19%, 0.6);
    text-transform: justify;
  }
  .icons svg{
      margin-right: 0.8rem;
      font-size: 1.2rem;
      color: #0073e6;
  }
  @media (min-width: 1500px){
    h2{
      font-size: 3rem;
    }
    p{
      font-size: 1.5rem;
    }
    .icons svg{
      font-size: 2rem;
      margin:  1rem 1rem;
    }
  }
`
