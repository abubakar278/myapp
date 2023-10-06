import React from 'react'

const Categories = () => {
  return (
    <div className='my-10 space-y-20  '>
    <div className='  container space-y-10'>
      <h1 className='text-2xl sm:text-4xl font-semibold'>Shop By Category</h1>
      
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5      '>
      <div className=' rounded-md bg-[#1D6148] '>
        <img className='w-full' src="/Rectangle 2528.png" alt="" />
        <div  className='flex justify-between text-white  py-3 rounded-b-2xl px-2 bg-[#1D6148]'>
          <p className='text-sm   font-bold'>Fruit Trees</p>
          <p>(189 products)</p>
        </div>
        </div>
        <div className=' rounded-md bg-[#1D6148] '>
        <img className='w-full' src="/Rectangle 2530.png" alt="" />
        <div  className='flex justify-between text-white  py-3 rounded-b-2xl px-2 bg-[#1D6148]'>
          <p className='text-sm  font-bold'>Patio Plants</p>
          <p>(89 products)</p>
        </div>
        </div>
        <div className=' rounded-md bg-[#1D6148] '>
        <img className='w-full' src="/Rectangle 2529.png" alt="" />
        <div  className='flex justify-between text-white  py-3 rounded-b-2xl px-2 bg-[#1D6148]'>
          <p className='text-sm  font-bold'>Conifires</p>
          <p>(30 products)</p>
        </div>
        </div>
        <div className=' rounded-md bg-[#1D6148] '>
        <img className='w-full' src="/Rectangle 2531.png" alt="" />
        <div  className='flex justify-between text-white  py-3 rounded-b-2xl px-2 bg-[#1D6148]'>
          <p className='text-sm  font-bold'>Climbers</p>
          <p>(25 products)</p>
        </div>
        </div>
      
      </div>
    </div>

    <div className='container space-y-10'>
     <div className='flex justify-between'>
     <h1 className='text-4xl font-semibold'>Best Seller</h1>

      <div className='flex gap-3'>
        <img className='w-10' src="/Group 157.png" alt="" />
        <img className='w-10' src="/Group 156.png" alt="" />
      </div>

     </div>
     
     <div className=' grid md:grid-cols-2  xl:grid-cols-4 gap-5 my-2     '>
     <div className="overflow-hidden rounded-2xl   bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex  justify-center'><img className='' src="/zobia-shakar-Qtso7p2tOI4-unsplash-removebg-preview 1.png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div>
           <p className='text-lg '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>12</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl  bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex items-center justify-center'><img src="/b (3).png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div>
           <p className='text-lg  '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>15</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl  bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex items-center justify-center'><img src="/b (2).png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div>
           <p className='text-lg  '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>8</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl  bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex items-center justify-center'><img src="/b (1).png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div>
           <p className='text-lg  '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>15</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
     </div>
    </div> 
    <div className='container space-y-10'>
     <div className='flex justify-between'>
     <h1 className='text-4xl font-semibold'>New Arrivals</h1>

      <div className='flex gap-3'>
        <img className='w-10' src="/Group 157.png" alt="" />
        <img className='w-10' src="/Group 156.png" alt="" />
      </div>

     </div>
     
     <div className=' grid md:grid-cols-2   xl:grid-cols-4 gap-5 my-2     '>
    
      <div className="overflow-hidden rounded-2xl  bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex items-center justify-center'><img src="/zobia-shakar-Qtso7p2tOI4-unsplash-removebg-preview 1.png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div>
           <p className='text-lg  '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>15</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl  bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex items-center justify-center'><img className='' src="/stephanie-harvey-skSdqLMdqGc-unsplash-removebg-preview 1 (1).png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div className='my-3'>
           <p className='text-lg  '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>15</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl  bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex items-center justify-center'><img src="/galina-n-miziNqvJx5M-unsplash__2_-removebg-preview 1.png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div>
           <p className='text-lg  '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>8</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
        <div className="overflow-hidden rounded-2xl  bg-opacity-50 bg-center bg-cover   "
        style={{ backgroundImage: "url('/Rectangle 2498.png')" }}>
          <div className='flex w-full py-5 px-5  items-center justify-end'> <div className='flex  h-10 w-10 rounded-full  bg-gray-50 items-center justify-center'><img className='w-5 h-5' src="/he.png" alt="" /> </div> </div>
          <div className='flex items-center justify-center'><img src="/zobia-shakar-Qtso7p2tOI4-unsplash-removebg-preview 1.png" alt="" /></div>
        <div className='container flex py-3 justify-between items-center'>
          <div>
           <p className='text-lg  '>Lorem Ipsum</p>
           <div className='font-extrabold text-green-800 gap-1 flex '>
            <p>$</p>
            <p>15</p>
           </div>

          </div>
          <button className='bg-green-800 text-white rounded px-3 py-2'> Buy Now</button>
        </div>
        </div>
     </div>
    </div>
    <div className='container space-y-10'>
     <div className='flex justify-between'>
     <h1 className='text-2xl md:text-4xl font-semibold'>Clients Reviews</h1>

      <div className='flex gap-3'>
        <img className='w-7 md:w-10' src="/Group 157.png" alt="" />
        <img className='w-7 md:w-10' src="/Group 156.png" alt="" />
      </div>
      </div>
      <div className=' grid md:grid-cols-2  xl:grid-cols-4 gap-5 my-2     '>
        <div className=''>
        <div className='w-full flex items-center justify-end'>
          <div className='px-5  -mb-3'><img className='  w-10' src="/Group 132.png" alt="" />
          </div>
         </div>
         <div className='bg-[#1D6148] text-white rounded-md'>
          <div className='container'>
            <div className='flex items-center  py-5 gap-3' >
              <div><img className='w-20 md:w-28' src="/Ellipse 7.png" alt="" /></div>
              <div className='space-y-2'>
                <p className='text-xs sm:text-sm'>Muhammad Usman</p>
                <img className='w-20 ' src="/Frame 85.png" alt="" />
              </div>
            </div>
            <p className='pb-8 text-xs sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          </div>
          </div>
        </div>
        <div className=''>
        <div className='w-full flex items-center justify-end'>
          <div className='px-5  -mb-3'><img className='w-10' src="/Group 132.png" alt="" />
          </div>
         </div>
         <div className='bg-[#1D6148] text-white rounded-md'>
          <div className='container'>
            <div className='flex items-center  py-5 gap-3' >
              <div><img className='w-20 md:w-28' src="/a (3).png" alt="" /></div>
              <div className='space-y-2'>
                <p className='text-xs sm:text-sm'>Muhammad Usman</p>
                <img className='w-20 ' src="/Frame 85.png" alt="" />
              </div>
            </div>
            <p className='pb-8 text-xs sm:text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          </div>
          </div>
        </div>
        <div className=''>
        <div className='w-full flex items-center justify-end'>
          <div className='px-5  -mb-3'><img className='w-10' src="/Group 132.png" alt="" />
          </div>
         </div>
         <div className='bg-[#1D6148] text-white rounded-md'>
          <div className='container'>
            <div className='flex items-center  py-5 gap-3' >
              <div><img className='w-20 md:w-28' src="/a (2).png" alt="" /></div>
              <div className='space-y-2'>
                <p className='text-xs sm:text-sm'>Muhammad Usman</p>
                <img className='w-20 ' src="/Frame 85.png" alt="" />
              </div>
            </div>
            <p className='pb-8 text-xs sm:text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          </div>
          </div>
        </div>
        <div className=''>
        <div className='w-full flex items-center justify-end'>
          <div className='px-5  -mb-3'><img className='w-10' src="/Group 132.png" alt="" />
          </div>
         </div>
         <div className='bg-[#1D6148] text-white rounded-md'>
          <div className='container'>
            <div className='flex items-center  py-5 gap-3' >
              <div><img className='w-20 md:w-28' src="/a (1).png" alt="" /></div>
              <div className='space-y-2'>
                <p className='text-xs sm:text-sm'>Muhammad Usman</p>
                <img className='w-20 ' src="/Frame 85.png" alt="" />
              </div>
            </div>
            <p className='pb-8 text-xs sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          </div>
          </div>
        </div>

     </div>
     </div>


    </div>
  )
}

export default Categories