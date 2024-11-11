import React from 'react'

export default function Header() {
  return (
    <div className=' fixed top-0 left-0 right-0 p-4 bg-primary flex z-50 '>
        <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Logo" className="h-16 w-16" />

       {/* <h1 className='text-seconadry text-4xl font-semibold'></h1> 
       <h1 className='text-white text-4xl font-semibold'></h1> 
       <h1 className='text-tertiary text-4xl font-semibold'></h1>  */}

    </div>
  )
}
