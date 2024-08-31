import React from 'react';
import Container from '../Layer/Container';
import element from '../../src/assets/element.png'
import so1 from '../../src/assets/so1.jpg'
import so2 from '../../src/assets/so2.png'
import so3 from '../../src/assets/so3.jpg'



const Blog = () => {
  return (
    <Container>
      <div className='text-center mt-5'>
        <img className='mx-auto' src={element} alt="" />
        <h2 className='text-[48px] font-bold'>Our Latest Blog</h2>
        <p className='w-[320px] mx-auto text-[#6C7D93]'>We provide digital experience services to startups and small businesses.</p>
      </div>

      <div className='flex gap-10 mt-10'>
        <div className='w-1/3 h-[450px] rounded-2xl shadow-xl'>
          <div className='h-1/2 rounded-t-2xl '><img className='h-full w-full rounded-t-2xl' src={so1} alt="" /></div>
          <div className='h-1/2 rounded-b-2xl p-10'>
          <h2 className='text-[24px] w-[200px]'>How to Be Ahead of Stock Changes</h2>
          <p className='mt-3 text-[#474747]'>By John  - 5 Comments</p>
          <p className='mt-5 font-medium'>Read more</p>
          </div>
        </div>

        <div className='w-1/3 h-[450px] rounded-2xl shadow-xl'>
          <div className='h-1/2 rounded-t-2xl '><img className='h-full w-full rounded-t-2xl' src={so2} alt="" /></div>
          <div className='h-1/2 rounded-b-2xl p-10'>
          <h2 className='text-[24px] w-[200px]'>Online Reputation And Management</h2>
          <p className='mt-3 text-[#474747]'>By Amin  - 10 Comments</p>
          <p className='mt-5 font-medium'>Read more</p>
          </div>
        </div>

        <div className='w-1/3 h-[450px] rounded-2xl shadow-xl'>
          <div className='h-1/2 rounded-t-2xl '><img className='h-full w-full rounded-t-2xl' src={so3} alt="" /></div>
          <div className='h-1/2 rounded-b-2xl p-10'>
          <h2 className='text-[24px] w-[250px]'>Tips To Move Your Project More Forward</h2>
          <p className='mt-3 text-[#474747]'>By Insider  - 15 Comments</p>
          <p className='mt-5 font-medium'>Read more</p>
          </div>
        </div>
      </div>
    </Container>

  );
};

export default Blog;
