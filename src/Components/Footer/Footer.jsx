import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='relative'>
        {/* Blue Clip-Path Div */}
        <div
          className='absolute bg-blue-800 h-[370px]   lg:w-[900px] xl:w-[1400px] 2xl:w-[2000px]  max-w-[1200px] mx-auto'
          style={{ clipPath: 'polygon(0 0, 90% 0, 60% 100%, 0% 100%)' }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-4 text-base pr-6 lg:pr-44 mt-14 '>
            <div className='mx-10'>
              <ul className='text-white'>
                <li className='font-bold mb-4 text-base'>Community</li>
                <li>Coming Soon</li>
              </ul>
            </div>
            <div>
              <ul className='text-white'>
                <li className='font-bold mb-4 text-base'>Knowledge Base</li>
                <li>Find an Accountant</li>
                <li>Find a Partner</li>
                <li>Become a Partner</li>
              </ul>
            </div>
            <div>
              <ul className='text-white'>
                <li className='font-bold mb-4 text-base'>Industry</li>
                <li>Automotive</li>
                <li>Beverage</li>
                <li>Aerospace</li>
                <li>Education</li>
                <li>Health Care</li>
                <li>Tourism</li>
              </ul>
            </div>
            <div>
              <ul className='text-white'>
                <li className='font-bold mb-4 text-base'>Our Company</li>
                <li>Jobs</li>
                <li>Podcast</li>
                <li>Customers</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className='flex flex-col items-end relative z-10 mx-6 lg:mx-12 pt-20'>
          <div className='text-teal-600 text-xl font-bold'>
            <img src="https://monmatics.com/public/assets/images/Logo%20new%201.svg" alt="" className='h-10' />
          </div>
          <p className='mt-4 max-w-xs text-gray-500 text-right'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
          </p>

          {/* Align social icons on the right */}
          <ul className='mt-8 flex gap-4 lg:gap-8 justify-end mr-10'>
            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-blue-700 transition hover:opacity-75'
              >
                <span className='sr-only'>Facebook</span>
                <svg className='size-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-orange-700 transition hover:opacity-75'
              >
                <span className='sr-only'>Instagram</span>
                <svg className='size-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-sky-700 transition hover:opacity-75'
              >
                <span className='sr-only'>Twitter</span>
                <svg className='size-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M23.643 4.937c-.835.371-1.732.62-2.674.733a4.651 4.651 0 002.049-2.565 9.231 9.231 0 01-2.92 1.092A4.538 4.538 0 0016.62 4c-2.505 0-4.54 2.035-4.54 4.54 0 .356.042.702.126 1.037-3.77-.189-7.103-1.995-9.33-4.735a4.489 4.489 0 00-.614 2.284c0 1.578.803 2.965 2.023 3.785a4.541 4.541 0 01-2.056-.566v.058c0 2.201 1.566 4.036 3.645 4.45a4.56 4.56 0 01-2.05.078 4.54 4.54 0 004.243 3.155 9.092 9.092 0 01-5.588 1.928c-.364 0-.723-.021-1.078-.061a12.816 12.816 0 006.95 2.041c8.335 0 12.89-6.902 12.89-12.89 0-.196-.004-.391-.014-.585A9.186 9.186 0 0024 4.57a9.178 9.178 0 01-2.357.645 4.577 4.577 0 002.008-2.52z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-red-700 transition hover:opacity-75'
              >
                <span className='sr-only'>YouTube</span>
                <svg className='size-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M23.498 6.186c-.214-1.313-.843-2.452-1.823-3.352-1.063-.78-2.384-1.13-3.715-1.208-1.765-.098-3.539-.146-5.316-.146-1.784 0-3.563.05-5.327.146-1.329.078-2.652.427-3.718 1.208-1.012.9-1.619 2.038-1.836 3.351C1 7.96 1 9.107 1 10.046v3.883c0 .936 0 2.082.012 2.861.214 1.313.823 2.452 1.836 3.352 1.066.78 2.389 1.13 3.718 1.208 1.764.096 3.543.144 5.327.144 1.777 0 3.551-.048 5.316-.144 1.33-.078 2.652-.428 3.715-1.208 1.004-.9 1.615-2.038 1.823-3.351.01-.78.012-1.925.012-2.86v-3.882c0-1.031 0-2.088-.012-2.86zM9.692 15.648V8.353l6.102 3.648-6.102 3.647z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
