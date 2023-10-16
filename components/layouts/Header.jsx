import React from 'react'
import Link from 'next/link'
import search from "../../public/search.png"
const Header = () => {
  return (
    <div className='h-16 md:h-32 flex justify-around  items-center bg-blue-400 relative'>
 
       {/* <Link href="">
        <h1 className='text-4xl font-bold text-white'></h1>
      </Link> */}
       <Link href="/">
        <h1 className='text-4xl font-bold text-white'>Book Rank</h1>
      </Link>
      <div className='h-16 md:h-32 flex justify-around items-center '>
        <Link href="/search">
          <img className='w-6 mx-2 ' src={"/search.png"} alt="" />
        </Link>
        {/* <Link href="/info">
          <img className='w-6 mx-2  ' src={"/info.png"} alt="" />
        </Link> */}
      </div>
    
      
    </div>
    
  )
}

export default Header