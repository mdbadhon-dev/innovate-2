import React from 'react'
import Container from '../Layer/Container'
import s1 from '../../src/assets/s1.png'
import s2 from '../../src/assets/s2.png'
import s3 from '../../src/assets/s3.png'
import element from '../../src/assets/element.png'

const Services = () => {
  return (
    <>
    <Container>
        <div className='text-center'>
          <img className='w-[120px] h-[64px] mx-auto' src={element} alt="" />
            <h2 className='text-[48px] font-bold'>Our Services</h2>
            <p className='w-[300px] mx-auto text-[18px]'>We have been providing great flooring solutions service.</p>
        </div>
        <div className='flex justify-center mt-10 gap-5'>
            <div className='w-[370px] h-[395px] text-center bg-[#EBF7E9] rounded-2xl p-10'>
                <img className='mx-auto mt-4' src={s1} alt="" />
                <h3 className='mt-3 font-bold text-[30px]'>Marketing Strategy</h3>
                <p className='w-[230px] mx-auto text-[18px] text-[#6C7D93] mt-3'>Social Media has changed the way we interact & do business while creating</p>
                <button className='px-3 py-1 bg-primary rounded-full mt-2' >Read More</button>
            </div>
            <div className='w-[370px] h-[395px] text-center bg-[#D8EAFF] rounded-2xl p-10'>
                <img className='mx-auto mt-4' src={s2} alt="" />
                <h3 className='mt-3 font-bold text-[30px]'>Social Marketing</h3>
                <p className='w-[230px] mx-auto text-[18px] text-[#6C7D93]'>Social Media has changed the way we interact & do business while creating</p>
                <button className='px-3 py-1 bg-primary rounded-full mt-3' >Read More</button>
            </div>
            <div className='w-[370px] h-[395px] text-center bg-[#FBF1EC] rounded-2xl p-10'>
                <img className='mx-auto mt-4' src={s3} alt="" />
                <h3 className='mt-3 font-bold text-[30px]'>Content Marketing</h3>
                <p className='w-[230px] mx-auto text-[18px] text-[#6C7D93]'>Social Media has changed the way we interact & do business while creating</p>
                <button className='px-3 py-1 bg-primary rounded-full mt-3'>Read More</button>
            </div>

        </div>
    </Container>
    </>
  )
}

export default Services