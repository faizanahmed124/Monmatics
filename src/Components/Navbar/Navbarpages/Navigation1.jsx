import React from 'react'
import { Link } from 'react-router-dom'
const Navigation1 = () => {
  return (
   <> 
   {/* <For Large Screens></For> */}
   <div className=' main-div h-10 lg:h-14 border bg-white '>
    <div className=' hidden lg:flex justify-between items-center px-10 py-2 text-gray-500 '>
<div className=''> <h1 className='text-xl'> Let the platform lead the way</h1></div>
<div className='flex gap-2 '> 
<div className=" flex items-center justify-center text-xl ">
            <a href="tel:03014302904" className='flex gap-1 items-center justify-center  hover:text-blue-600'>
              <ion-icon name="call-outline"></ion-icon>
              <span className="">0301-4302904</span>
            </a>
          </div>
          <div className="flex items-center justify-center text-xl">
            <a href="mailto:Monmatics@gmail.com" className='flex items-center justify-center gap-1 px-3 hover:text-blue-500 '>
              <ion-icon name="mail-outline"></ion-icon>
              <span className="">Monmatics@gmail.com</span>
            </a>
          </div>
<div className='px-3'><button className='border bg-blue-500 px-4 py-1 rounded-lg hover:bg-blue-700 text-white'><Link to="/Login">Login</Link></button></div>

</div>
    </div>
{/* for small screens */}
<div className='flex justify-between lg:hidden mx-3 sm:mx-4 pt-1'>
<div className='call email div flex  '>
<div className=" flex items-center justify-center  text-xs sm:text-sm ">
            <a href="tel:03014302904" className='flex gap-1 items-center justify-center  hover:text-blue-600'>
              <ion-icon name="call-outline"></ion-icon>
              <span className="">0301-4302904</span>
            </a>
          </div>
          <div className="flex items-center justify-center text-xs sm:text-sm">
            <a href="mailto:Monmatics@gmail.com" className='flex items-center justify-center gap-1 px-3 hover:text-blue-500 '>
              <ion-icon name="mail-outline"></ion-icon>
              <span className="">Monmatics@gmail.com</span>
            </a>
          </div>
</div>
<div className='px-1'></div>
<button className='bg-orange-400 px-2 rounded-lg'><Link to="/Login">Login</Link></button>
</div>


     

   </div>

   </>
  )
}

export default Navigation1
