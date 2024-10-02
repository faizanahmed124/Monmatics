import React from 'react'

const Automation = () => {
  return (
   <>
   
   <div className=' hidden bg-blue-800 h-40 w-full lg:flex  justify-between items-center px-20'>

<div className=''>
    <h1 className='text-white text-3xl'>Unleash automation's power,
    <br />nurturing your every need</h1>
</div>

<div className='mx-20'> <button className='bg-orange-500 px-3 py-2 rounded-lg'> Try Monmatics</button></div>

   </div>
    {/* small screen */}
    <div className='grid grid-cols-1 bg-blue-400 lg:hidden'>
        
<div className='flex items-center justify-center py-4 '>
    <h1 className='text-blue-600 text-3xl'>Unleash automation's power,
    <br />nurturing your every need</h1>
</div >
<div className='mx-20 flex items-center justify-center py-10'> <button className='bg-orange-500 px-3 py-2 rounded-lg'> Try Monmatics</button></div>
    </div>
   
   
   
   
   
   
   </>
  )
}

export default Automation
