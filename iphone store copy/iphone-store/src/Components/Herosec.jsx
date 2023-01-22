import React from 'react'
import { Container } from 'react-bootstrap'
import Lottie from 'react-lottie'
import Iphonelogo from '../Resources/lf20_el5xa7ow.json'

export default function Herosec() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Iphonelogo,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center">
        <div className='left_hero w-50 bg-black text-white text-center'>
            <h5 className='text-secondary'>New</h5>
            <h2>iPhone 14+</h2>
            <h1 className='hero_head'>Big and bigger.</h1>
        </div>
        <div className='right_hero bg-black w-50 d-flex justify-content-center align-items-center'>
        <Lottie 
            options={defaultOptions}
            height={600}
            width={600}
        />
        </div>
    </Container>
  )
}