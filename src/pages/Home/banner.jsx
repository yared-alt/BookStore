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

          <div className='relative my-auto md:right-0 ' style={{backgroundImage:"C:\Users\Administrator\Desktop\bookstore\public\Screenshot 2024-12-22 132240.png"}}>
            
            <img src='overlapedpic.png' className='block max-w-full mx-auto' alt="overlaped book"></img>

          </div>
        </div>
      </section>
  )
}
