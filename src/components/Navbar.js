import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between px-[80px] py-[10px] items-center bg-biru-tua sticky top-0 z-10'>
        <a href='/' className='font-shantell font-bold text-[30px] text-white'>BuyMe</a>
        <div className='flex gap-x-6'>
            <a href='/' className='text-white font-poppins font-bold'>Beranda</a>
            <a className='text-white font-poppins font-bold'>Product</a>
        </div>
    </div>
  )
}
