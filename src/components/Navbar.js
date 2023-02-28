import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between px-[80px] py-[10px] items-center bg-biru-tua sticky top-0 z-10'>
        <p className='font-shantell font-bold text-[30px] text-white'>BuyMe</p>
        <div className='flex gap-x-6'>
            <p className='text-white font-poppins font-bold'>Beranda</p>
            <p className='text-white font-poppins font-bold'>Product</p>
        </div>
    </div>
  )
}
