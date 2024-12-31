import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const intial = {
        Email: "",
        Password: ""
    }
    const [inputs, setInputs] = useState(intial);
    const [Loginerr, setLoginerr] = useState([]);

    const submitHandler = (e) => {

        e.preventDefault();

        eventHAndler(e);
        
        const errors = validator(inputs);


        if (errors.length > 0) {
            setLoginerr(errors);
        }
        console.log(Loginerr);
    }
    
    const validator = (inputs) => {
        const err = [];
        if (inputs.Email.length <= 5 || inputs.Email.length >= 30) {
            err.push({ type: "Invalid Email", msg: "you entered invalid Email!" });
        }
        if (inputs.Password.length <= 7 || inputs.Password.length >= 30) {
            err.push({ type: "Invalid Password", msg: "you entered invalid Password!" });
        }
        return err;
        
    }
    
    const eventHAndler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value });

    }



    return (
        <div className='w-full h-screen bg-zinc-400 fixed'>

            <div className=' md:w-96 w-screen mt-6  mx-auto my-3 bg-slate-300 rounded-md shadow-md backdrop-blur-md bg-opacity-50'>
                <form className='md:px-9 md:py-8 px-3 py-4 '>
                    <Link to="/"><h1 className='font-mono absolute right-5 mr-3 text-2xl hover:text-red-700'>X</h1></Link>
                    <div>
                        <h1 className='font-mono text-2xl text-center px-4 py-2 my-3'>Login</h1>
                    </div>
                    <div>

                        <label className='text-md py-11 font-semibold text-gray-700 text-right' htmlFor='Email'>Email  </label><br></br>
                        <input onChange={eventHAndler} name='Email' className='w-full h-8 focus:outline-none appearance-none leading-tight focus:shadow-lg px-5 bg-red-100 text-slate-700 ml-1 my-2' type='text' max="30" min="2"></input>

                        <label className='text-md py-11 font-semibold text-gray-700 text-right' htmlFor='Password'>Password  </label><br></br>
                        <input onChange={eventHAndler} name='Password' className='w-full h-8 focus:outline-none appearance-none leading-tight focus:shadow-lg px-5 bg-red-100 text-slate-700 ml-1 my-2' type='password' max={30} min="2"></input>

                    </div>
                    <p className='w-full bg-emerald-600'></p>
                    <div className='w-full text-center'>
                        <button onClick={submitHandler} className='w-36 py-2 px-3 mt-2 bg-slate-300 hover:bg-blue-700 rounded-md hover:text-slate-300'>Login</button>
                    </div>
                    <div className='w-full text-center'>
                        <p className='my-2 '>Don`t have account? <Link className="text-blue-700 underline hover:text-yellow-300 " to="/register">Register</Link></p>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login 
