import React from 'react'
import Home from '../../Homepage/Home'
import Image6 from "../../../assets/Images/Image6.png";
import Image7 from "../../../assets/Images/Image7.png";
import Image8 from "../../../assets/Images/Image8.png";
const Invoices = () => {
  return (
   <>
   <Home/>
   <div className=''>
   <section class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl"  style={{ fontFamily: '"Nerko One", cursive' }}>
      "Time To Ditch Your
        <strong class="font-extrabold text-orange-700 sm:block"> Old Invoices" </strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
       Start Now its Free
        </a>

        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
     Shedule a Demo
        </a>
      </div>
    </div>
  </div>
</section>
   </div>
   <div className='h-40 w-full bg-gray-400'></div>
   <div className='grid  grid-cols-1 md:grid-cols-2 md:p-20 md:mx-20'>

    <div>
        <img src={Image6} alt="" />

    </div>
    <div>  

        <div className='max-w-md'>
            <p className='font-sans'>With the all-inclusive invoicing system from MonMatics, enjoy a more seamless billing process. With our platform, creating, customizing, and sending invoices is a simple task, making account management simpler than before. To make sure you get paid on time, track payments in real-time, produce thorough financial reports, and automate follow-ups. You'll have a strong tool at your disposal with MonMatics to keep your business operating smoothly, stay organized, and streamline your invoicing tasks. Wave goodbye to manual mistakes and hold-ups and welcome a more efficient approach to your invoicing and finances processing.

            </p>
        </div>
         </div>
   </div>
   <div className='flex justify-center items-center bg-gray-200 h-40 w-full'>
    <h1 className='text-3xl md:text-5xl'  style={{ fontFamily: '"Nerko One", cursive' }}> Easy Invoicing <strong className='text-blue-900'>  Clear Tracking</strong></h1>
   </div>
   
   <div className='flex justify-center items-center px-20 text-gray-500 font-sans my-20'>
    <p> MonMatics takes your invoicing to a new level with its easy to navigate design. Quickly generate and personalize attractive invoices that reflect your business professionalism in a few clicks. With our solution, you can easily monitor the payment process and due dates, and even set automatic reminders. The status of your invoice will also be updated in real-time, allowing you to closely monitor your finances. Take control over your billing and avoid mistakes with MonMatics to make the invoicing process smooth and effective.</p>
   </div>
   <div className='flex justify-center items-center'>
    <img src={ Image7} alt="" />
   </div>
   <div className='flex justify-center md:justify-start items-center bg-gray-200 h-40 w-full md:px-10 '>
    <h1 className='text-3xl md:text-5xl'  style={{ fontFamily: '"Nerko One", cursive' }}> Invoice Smater <strong className='text-blue-900'> Sales Harder </strong> </h1>
   </div>
   <div className='grid  grid-cols-1 md:grid-cols-2 md:p-16 md:mx-10 md:gap-24'>

<div>
    <img src={Image8} alt="" />

</div>
<div>  

    <div className='max-w-md'>
        <p className='font-sans'>With the all-inclusive invoicing system from MonMatics, enjoy a more seamless billing process. With our platform, creating, customizing, and sending invoices is a simple task, making account management simpler than before. To make sure you get paid on time, track payments in real-time, produce thorough financial reports, and automate follow-ups. You'll have a strong tool at your disposal with MonMatics to keep your business operating smoothly, stay organized, and streamline your invoicing tasks. Wave goodbye to manual mistakes and hold-ups and welcome a more efficient approach to your invoicing and finances processing.

        </p>
    </div>
     </div>
</div>
   </>
  )
}

export default Invoices
