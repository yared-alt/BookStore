import React, { useState } from 'react'
import BookCard from './bookCard';


export default function Topseller() {
    const catagory = ["Select Catagory", "All", "Fiction", "Romantic", "Scince", "History"];
    const [selectedCatagory, setSelectedCatagory] = useState("Select Catagory");


    return (

        <section>
            <div className='lg:px-36 lg:py-6 md:px-5 md:py-11 px-3  bg-slate-300 '>
                <div>
                    <h1 className=' font-mono text-2xl mx-4 py-6'>Top Sellers</h1>
                    <select onChange={((e) => setSelectedCatagory(e.target.value))} name='catagory' className=' md:w-48 md:h-11 w-32 h-9 mx-4  pl-1 font-mono bg-slate-200 rounded-md '>
                        {
                            catagory.map(element => (
                                <option key={element} value={element}>{element}</option>
                            ))
                        }
                    </select>
                </div>
                <BookCard catagory={selectedCatagory}/>
            </div>
        </section>

    )
}
