import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto px-[20px] py-5 '>{children}</div>
  )
}

export default Container