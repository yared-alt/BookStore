import React from 'react'

export default function Banner() {
  return (
    <section >
        <div className='flex lg:px-36 lg:py-6 md:px-5 md:py-6 px-3 py3  flex-col-reverse md:flex-row justify-between align-middle '>
          <div className='py-3 px-2 md:w-1/2 w-full h-fit mt-20   shadow-black-900 shadow-lg bg-slate-200 rounded-lg'>
            <h1 className='text-3xl font-mono my-7 mx-3'>New Relsease This Week</h1>
            <p className='font-mono my-5 mx-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt optio, maxime accusantium quibusdam vero, aliquam qui necessitatibus maiores dolor ex exercitationem sint laudantium voluptates suscipit quisquam ullam recusandae totam ab</p>

            <button className='md:w-40 md:h-11 md:mx-3 my-4 hover:bg-amber-600 hover:shadow-md shadow-black rounded bg-amber-300 w-full h-12 text-lg '>Subscribe</button>
          </div>

          <div className='relative my-auto md:right-0 '>
            <img className='lg:w-48 lg:h-52 md:w-40 md:h-44 absolute lg:top-20 lg:-right-3 md:top-20 md:left-36 w-48 h-52 top-20 left-64' src='\5151818.jpg' alt="books "></img>
            <img className=' lg:w-56 lg:h-60 md:w-48  md:h-52 w-38 absolute w-56 h-60 md:top-16 md:left-1 opacity-44 top-16 left-40'
              src='\4116738.jpg' alt="books "></img>
            <img className=' lg:w-60 lg:h-80 md:w-50  md:h-72 w-60 h-80 md:top-8 md:-left-28 relative top-6 left-16 opacity-44' src='\5171295.jpg' alt="books"></img>
          </div>
        </div>
      </section>
  )
}
