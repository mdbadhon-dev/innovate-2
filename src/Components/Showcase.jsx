import React from 'react';
import Container from '../Layer/Container';
import element from '../../src/assets/element.png'
import so1 from '../../src/assets/so1.jpg'
import so3 from '../../src/assets/so3.jpg'
import so2 from '../../src/assets/so2.png'
import ino1 from '../../src/assets/ino1.jpg'
import ino2 from '../../src/assets/ino2.jpg'
import so4 from '../../src/assets/so4.jpg'

const Showcase = () => {
  return (
    <Container>
      <div className='text-center'>
        <img className='mx-auto' src={element} alt="" />
        <h3 className='font font-extrabold text-[48px]'>Work Showcase </h3>
      </div>
        <ul className='flex gap-5'>
          <li>All</li>
          <li>Digital Mkt</li>
          <li>Branding</li>
          <li>Content Mkt</li>
          <li>Social Media Mkt</li>
        </ul>
        <div className='flex gap-4 h-[344px] mt-5'>
          <div className='w-1/4 rounded-3xl'><img className='w-full h-full rounded-3xl' src={so1} alt="" /></div>
          <div className='w-2/4 rounded-3xl'><img className='w-full h-full rounded-3xl' src={so3} alt="" /></div>
          <div className='w-1/4 rounded-3xl'><img className='w-full h-full rounded-3xl' src={so2} alt="" /></div>
        </div>
        <div className='flex gap-4 mt-4 h-[350px]'>
          <div className='w-2/5 rounded-3xl'><img className='w-full h-full rounded-3xl' src={ino1} alt="" /></div>
          <div className='w-1/5 rounded-3xl'><img className='w-full h-full rounded-3xl' src={so4} alt="" /></div>
          <div className='w-2/5 rounded-3xl'><img className='w-full h-full rounded-3xl' src={ino2} alt="" /></div>
        </div>
    </Container>
  );
};

export default Showcase;
