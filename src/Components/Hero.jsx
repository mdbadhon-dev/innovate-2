import React from 'react';
import Container from '../Layer/Container';
import banner3d from '../../src/assets/banner3d.png'
import ino1 from '../../src/assets/ino1.jpg'
import ino2 from '../../src/assets/ino2.jpg'
import element from '../../src/assets/element.png'

const Hero = () => {
  return (
    <div>
      <img className='ml-10' src={banner3d} alt="" />
      <Container>
        <div className='flex justify-between '>
          <div>
          <img className='w-[120px] h-[64px]' src={element} alt="" />
            <h2 className='text-[72px] font-bold w-[686px]'>We Are Digital <span className='text-primary'>Marketing</span> Agency</h2>
            <p className='w-[450px] text-[18px] text-[#6C7D93]'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
            <button className='px-4 py-2 bg-primary text-white rounded-full mt-5'>get free quoto</button>
          </div>
          <div>
            <div className='absolute top-[270px] right-[350px] w-[300px] h-[300px] rounded-[40px]'>
              <img className='w-[300px] h-[300px] rounded-[40px]'src={ino1} alt="" />

            </div>
            <div className=' mr-[400px] absolute right-[100px] top-[400px] w-[300px] h-[300px] rounded-[40px]'>
            <img className='w-[300px] h-[300px] rounded-[40px] border-b-white border-4 outline-none'src={ino2} alt="" />

            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Hero;
