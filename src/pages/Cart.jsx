import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../store/slices/cartSlice";



function Cart() {
    const disapatch = useDispatch();
    const totalprice = useSelector((state) => state.cart.totalPrice);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const handleadd = (item) => {
        const obj = {
            id: item.id,
            name: item.name,
            price: Number(item.price),
            quantity: Number(item.quantity), totalQuantityPrice: Number(item.price)
        }
        disapatch(addToCart(obj))
    }
    const handleremove = (item) => {
        const obj = {
            id: item.id,
            name: item.name,
            price: Number(item.price),
            quantity: Number(item.quantity), totalQuantityPrice: Number(item.price)
        }
        disapatch(removeFromCart(obj))
    }


    return (
        <div className='w-full'>

            <div className='h-4/5 max-w-4xl  border-dashed border border-black mt-5 mx-auto shadow-slate-950 shadow-lg'>


                <Link to="/"><p className='relative left-[0.7vw] m-9 px-3 text-xl text-red-700 w-9 border-2 border-l-pink-700 hover:text-slate-300 hover:bg-red-900 cursor-pointer'>X</p></Link>
                <div className='px-[2vw] mx-[3vw] mt-6 mb-[4vw] flex flex-col '>
                    {
                        cartItems && cartItems.map((item, index) => (
                            <>

                                <ul className='grid md:grid-cols-5 grid-rows-2 grid-cols-2 gap-[3vw] mt-[2vw] border-gray-700 ' key={item.id}>

                                    <li className='border-2 border-yellow-300'>{item.name}</li>
                                    <li className='border-2 border-yellow-300'>${item.price}</li>
                                    <li className='border-2 border-yellow-300' >
                                        <div className='inline-flex w-20'>
                                            <button onClick={() => { handleremove(item) }} className='w-4 text-2xl bg-yellow-400  '>-</button>
                                            <span className=" mx-5 text-slate-900">{item.quantity}</span>

                                            <button onClick={() => handleadd(item)} className='w-4 text-2xl bg-yellow-400 '>+</button>
                                        </div>
                                    </li>
                                    <li className='col-span-3 md:col-span-1 border text-end'> Total: ${item.totalQuantityPrice}</li>
                                    <li className='border text-end ' ><button className='  border-slate-900 px-[0.76em] py-[0.25em] bg-red-400 hover:bg-red-600 text-gray-50  cursor-pointer'>Remove</button> </li>
                                </ul>
                                <hr className='h-[0.51vh] '></hr>
                            </>
                        ))
                    }
                    <div className=' bg-slate-200 mt-4  '>
                        <p className='w-full mr-96 text-end mt-3 bg-slate-300 px-3 '>Total :<span>{totalprice}</span></p>
                        <p className='w-full mr-96 text-end mt-3 bg-slate-300 px-3 '>vat :<span>31.3%</span></p>
                        <button className='  mt-2 mb-3 bg-neutral-950 text-slate-200 px-3 py-1'>Clear Cart</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;