import React from 'react'
import BookData from "./fatchBooks"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

// import { cartItemsSelector,totalSelector,totalNumberOfItemselector } from '../../store/slices/cartSlice';
import {cartItemsSelector} from "../../store/slices/cartSlice"
export default function BookCard({ catagory }) {
    const dispatch = useDispatch();

    const cartItems = useSelector(cartItemsSelector);
    // console.log(cartItems);


    const handlecart = (element, index, d, e) => {

        element.quantity = 1;
        // element.totalQuantityPrice=Number(element.price);
        // element.Price=Number(element.price);
        const obj = { id: element.id, name: element.name, price: Number(element.price), quantity: Number(element.quantity) ,totalQuantityPrice:Number(element.price)};
        dispatch(addToCart(obj))
    }

    const data = BookData();

    const d = catagory === "Select Catagory" || catagory === "All" ? data : data.filter(book => book.catagory === catagory.toLowerCase());

    return (
        // <div className='my-4 flex py-11  overflow-hidden overflow-x-auto  mx-auto md:flex-row flex-col'> 
        <div className='my-4 flex md:flex-row gap-3  py-11  overflow-hidden overflow-x-auto   flex-col '>

            {
                d.length === 0 ?
                    <div className='mt-2  py-8 px-9  bg-red-500 rounded-lg shadow-xl h-15'>
                        <h1>ooooppppss empty list! choose another catagory</h1>
                    </div>
                    : d.map((element, index) => (

                        <div className='mt-2 flex px-2  md:flex-row flex-col max-w-72 md:max-w-full md:w-full  md:mr-3 bg-red-500 rounded-lg shadow-xl' key={index}>

                            <div className='md:pl-8 px-2 py-2'>
                                <img className='md:max-w-48  md:min-h-72 block max-w-full rounded-md mx-auto mt-2  shadow-md shadow-slate-800' src={`${element.img}`} alt={element.name}></img>
                            </div>
                            {/* {
                               quantityy===undefined? "": d[index].id===quantityy.id ? <h2>{quantityy.quantity}</h2>:<h1>empty</h1>
                            } */}
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

                                {/* <div className='inline-flex w-40'>
                                <button onClick={()=>handlecart(element)} className='w-5 h-9 bg-yellow-400 my-4 '>-</button>
                                <span className='mt-5 mx-5 text-slate-50'>{totalquantiy}</span>

                                <button onClick={()=>handlecart(element)} className='w-5 h-9 bg-yellow-400 my-4 '>+</button>
                                </div> */}
                                <button onClick={() => handlecart(element)} className='w-32 h-9 bg-yellow-400 my-4 '>Add to cart</button>
                            </div>
                        </div>
                    ))
            }


        </div>
    )
}




