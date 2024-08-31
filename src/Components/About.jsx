import React from 'react';
import Container from '../Layer/Container';
import who from '../../src/assets/who.png'
import element from '../../src/assets/element.png'
import partner from '../../src/assets/partner logo.png'
const About = () => {
  return (
    <Container>
      <div className='flex mt-[100px]'>
        <img className='w-[440px]' src={who} alt="" />
        <div className='ml-10'>
        <img className='w-[120px] h-[64px]' src={element} alt="" />
        <h3 className=''>Who We Are</h3>
        <p className='w-[440px]'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
        <img className='' src={partner} alt="" />

        </div>
        
      </div>
    </Container>

  );
};

export default About;
