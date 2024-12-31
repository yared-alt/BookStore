import React from 'react'
import BookData from "./fatchBooks"
import { useDispatch , useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { cartItemsSelector,totalSelector } from '../../store/slices/cartSlice';

export default function BookCard({ catagory }) {
const dispatch=useDispatch();
// const cartItems=useSelector((state)=>state.cart.cartItems);
// const total=useSelector((state)=>state.cart.total);
// const cartItems=useSelector(cartItemsSelector);
// const total=useSelector(totalSelector);


// console.log(cartItems,total);

const handlecart=(element)=>{
    // console.log(element);
    dispatch(addToCart(element))
    
}

    const data=BookData();

    const d = catagory === "Select Catagory" || catagory === "All" ? data : data.filter(book => book.catagory === catagory.toLowerCase());

    return (
        <div className='my-4 flex py-11  overflow-hidden overflow-x-auto  mx-auto md:flex-row flex-col'>
             {
                d.length === 0 ?
                    <div className='mt-2  py-8 px-9 bg-red-500 rounded-lg shadow-xl h-15'>
                        <h1>ooooppppss empty list! choose another catagory</h1>
                    </div>
                    : d.map((element, index) => (

                        <div className='mt-2 flex   md:flex-row flex-col  md:max-w-md md:w-full w-3/4 md:mr-3 bg-red-500 rounded-lg shadow-xl' key={index}>
                            <div className='md:pl-8 px-2 py-2'>
                                <img className='md:max-w-48 md:min-h-72 max-w-80 rounded-md mx-auto mt-2  shadow-md shadow-slate-800' src={`${element.img}`} alt={element.name}></img>
                            </div>
                            <div className='px-4 py-6 w-auto '>
                                <h1 className='text-lg font-mono text-white h-15  mb-4'>{element.name}</h1>
                                {
                                    element.description.length > 8 ? (
                                        <p className=' font-serif text-slate-300 space-y-4 my-2 mt-4'>{element.description.slice(0, 140)}...</p>
                                    ) : (
                                        <p className=' font-serif text-slate-300 space-y-4 my-2 mt-4'>{element.description}</p>
                                    )
                                }
                                <span className='text-yellow-400 ml-0 '>${element.price}</span>
                                <span className='ml-5 line-through'>${element.prevPrice}</span><br></br>
                                <button onClick={()=>handlecart(element)} className='w-40 h-9 bg-yellow-400 my-4 '>Add to Cart</button>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}




