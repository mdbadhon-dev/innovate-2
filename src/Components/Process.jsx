import React from 'react';
import Container from '../Layer/Container';
import element from '../../src/assets/element.png'
import so1 from '../../src/assets/so1.jpg'
import so2 from '../../src/assets/so2.png'
import so3 from '../../src/assets/so3.jpg'


const Process = () => {
  return (
    <Container>
      <div className='text-center mt-10'>
        <img className='mx-auto' src={element} alt="" />
        <h3 className='font font-extrabold text-[48px]'>Our creative process.</h3>
        <p className='w-[320px] mx-auto'>We provide digital experience services to startups and small businesses.</p>
      </div>
      <div className='flex items-center mt-10'>
        <div className='w-1/2'>
        <div className='w-[465px] h-[207px] bg-[#EBF7E9] rounded-2xl p-10'>
          <h1 className='font-medium mt-5'>Step-1</h1>
          <h3 className='font-bold mt-3'>Global SEO Research</h3>
          <p className='w-[260px] mt-3'>Practical tools and features make it easier to build and manage your site.</p>
        </div>
        </div>
        <div className='w-1/2'>
        <div className='h-[324px] rounded-2xl'>
          <img className='h-[324px] w-full rounded-2xl' src={so1} alt="" />
        </div>
        </div>
      </div>
      <div className='flex items-center '>
        <div className='w-1/2'>
        <div className='h-[324px] rounded-2xl'>
        <img className='h-[324px] w-full rounded-2xl' src={so2} alt="" />
        </div>
        </div>
        <div className='ml-[200px]'>
        <div className='w-[465px] h-[207px] bg-[#D8EAFF] rounded-2xl p-10'>
        <h1 className='font-medium mt-5'>Step-2</h1>
          <h3 className='font-bold mt-3'>Social media integration</h3>
          <p className='w-[260px] mt-3'>Practical tools and features make it easier to build and manage your site.</p>
        </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-1/2'>
        <div className='w-[465px] h-[207px] bg-[#FBF1EC] rounded-2xl p-10'>
        <h1 className='font-medium mt-5'>Step-3</h1>
          <h3 className='font-bold mt-3'>Launching the Application</h3>
          <p className='w-[260px] mt-3'>Practical tools and features make it easier to build and manage your site.</p>
        </div>
        </div>
        <div className='w-1/2'>
        <div className='h-[324px] rounded-2xl'>
        <img className='h-[324px] w-full rounded-2xl' src={so3} alt="" />
        </div>
        </div>
      </div>
      {/* <div className='flex justify-between gap-5 items-center mt-10'>
        <div className='w-[465px] h-[207px] bg-slate-500 rounded-2xl'>rtt</div>
        <div className='w-[570px] h-[324px] bg-green-500 rounded-2xl'>retert</div>
        <div></div>
      </div>
      <div className='flex justify-between gap-5 items-center'>
        <div className='w-[570px] h-[324px] bg-green-500 rounded-2xl'>retert</div>
        <div className='w-[465px] h-[207px] bg-slate-500 rounded-2xl'>rtt</div>
        <div></div>
      </div>
      <div className='flex justify-between gap-5 items-center'>
        <div className='w-[465px] h-[207px] bg-slate-500 rounded-2xl'>rtt</div>
        <div className='w-[570px] h-[324px] bg-green-500 rounded-2xl'>retert</div>
        <div></div>
      </div> */}
      
    </Container>
  );
};

export default Process;
