import React from 'react';
import Container from '../Layer/Container';
import element from '../../src/assets/element.png'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";



const Reviews = () => {
  return (
    <Container>
      <div className='flex items-center gap-5 mt-20'>
        <div className='w-1/3 h-[375px] bg-slte-400 rounded-2xl items-center'>
          <img src={element} alt="" />
          <h2 className='text-[48px] font-medium mt-2'>Client Review</h2>
          <p className='w-[280px] text-[#6C7D93]'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
          <div className='flex text-orange-500 text-4xl mt-2'>
            <IoIosArrowDropleftCircle />
            <IoIosArrowDroprightCircle />
          </div>
        </div>

        <div className='w-1/3 h-[375px] bg-[#D8EAFF] rounded-2xl p-10'>
          <p className='text-[#6C7D93] text-2xl w-[270px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
          <h2 className='flex justify-end text-[20px] font-medium mt-20'>Jane Cooper</h2>
          <p className='flex justify-end'>Fashion Designer</p>
        </div>

        <div className='w-1/3 h-[375px] bg-[#ffff] border outline-none rounded-2xl p-10'>
        <p className='text-[#6C7D93] text-2xl w-[270px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
          <h2 className='flex justify-end text-[20px] font-medium mt-20'>Eleanor Pena</h2>
          <p className='flex justify-end'>Architecture</p>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
