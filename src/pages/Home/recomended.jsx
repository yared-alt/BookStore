import React from 'react'
import BookData from './fatchBooks'

export default function Recomended() {

const data=BookData();

    return (
        <section>

            {/* at this part a organize the data based on the rating of the book for now i let all books to be added */}
            <div className='lg:px-36 lg:py-6 md:px-5 md:py-11 px-3 py3 bg-slate-200 '>
                <div>
                    <h1 className=' font-mono text-2xl mx-4 py-6'>Recommended For You</h1>
                </div>
                <div className='my-4 py-11 flex md:overflow-scroll mx-auto md:flex-row flex-col'>
                    {
                        data.map((element, index) => (
                            <div className='mt-2 flex   md:flex-row flex-col  md:max-w-md md:w-full w-3/4 md:mr-3 bg-slate-700 rounded-lg shadow-xl' key={index}>
                                <div className='md:pl-8 px-2 py-2'>
                                    <img className='md:max-w-48 md:min-h-72 max-w-80 rounded-md mx-auto mt-2  shadow-md shadow-slate-800' src={element.img} alt={element.name}></img>
                                </div>
                                <div className='px-4 py-6 w-auto '>
                                    <h1 className='text-lg font-mono text-white h-25  mb-4'>{element.name}</h1>
                                    {
                                        element.description.length > 8 ? (
                                            <p className=' font-serif text-slate-300 space-y-4 my-2 mt-4'>{element.description.slice(0, 140)}...</p>
                                        ) : (
                                            <p className=' font-serif text-slate-300 space-y-4 my-2 mt-4'>{element.description}</p>
                                        )
                                    }
                                    <span className='text-yellow-400 ml-0 '>${element.price}</span>
                                    <span className='ml-5'>${element.prevPrice}</span><br></br>
                                    <button className='w-40 h-9 bg-yellow-400 my-4 '>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}



