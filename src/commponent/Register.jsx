import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Register() {

    // Name:"",
    // UserName:"",
    // Email:"",
    // Password:"",
    // Re_Password:""
    // const handleUserName=(e)=>{
    //     setInput({...input, UserName:e.target.value});
    //     return setInput;
    // }
    // const handleEmail=(e)=>{
    //     setInput({...input, Email:e.target.value});
    //     return setInput;
    // }
    // const handlePassword=(e)=>{
    //     setInput({...input, Password:e.target.value});
    //     return setInput;
    // }
    // const handleRe_Password=(e)=>{
    //     setInput({...input, Re_Password:e.target.value});
    //     return setInput;
    // }


    const initalValue = {
        Name: "",
        UserName: "",
        Email: "",
        Password: "",
        RePassword: ""
    };
    const [input, setInput] = useState(initalValue);
    const [err, setErr] = useState([]);

    
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    }

    const validetor = (input) => {
        let err = [];

        if (input.Name.length <= 2 || input.Name.length >= 20) {
            err.push({ type: "Invalid Name", msg: "you entered invalid name!", desc: "Valid name contain letters greater than 2 and less than 20 and name must not be empty" } )
        }
        if (input.UserName.length <= 2 || input.UserName.length >= 20) {
            err.push({ type: "Invalid UserName", msg: "you entered invalid Username!", desc: "Valid Username contain letters greater than 2 and less than 20 and Username must not be empty" });
        }
        if (input.Email.length <= 5 || input.Email.length >= 30) {
            err.push({ type: "Invalid Email", msg: "You entered invalid Email!", desc: "Valid Email contain letters greater than 5 and less than 30 and Email must not be empty" });
        }
        if (input.Password.length <= 7 || input.Password.length >= 30) {
            err.push({ type: "Invalid Password", msg: "Enter valid Password!", desc: "Valid Password contain diferent Character include number symbol and letters and password must greater than 7 and less than 30 and Password must not be empty" });
        }
        if (input.RePassword.length <= 0 ) {
            err.push({ type: "Invalid Re_Password", msg: "this field should not be empty!" });
        } else if (input.Password !== input.RePassword) {
            err.push({ type: "IPassword does not match ", msg: "Password doesn`t match! ", desc: "the password must be similar withe the Repeated password section!" });   
        }
        return err;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validetor(input);
        if(errors.length > 0){
            setErr(errors)
        }
        console.log(err);
        
    }


    return (
        <div className='w-full h-screen bg-zinc-400  fixed'>

            <div className=' md:w-96 w-screen mt-6  mx-auto my-3 bg-slate-300 rounded-md shadow-md backdrop-blur-md bg-opacity-50'>
                <form className='md:px-9 md:py-8 px-3 py-4 ' method="Get">
                    <Link to="/"><h1 className='font-mono absolute right-5 mr-3 text-2xl hover:text-red-700'>X</h1></Link>
                    <div>
                        <h1 className='font-mono text-2xl text-center px-4 py-3 my-1'>Register</h1>
                    </div>
                    <div>

                        <label className='text-md py-11 font-semibold text-gray-700 text-right' htmlFor='Name'>Name  </label><br></br>
                        <input name='Name' onChange={handleInputs} className='w-full h-8 focus:outline-none appearance-none leading-tight focus:shadow-lg px-5 bg-red-100 text-slate-700 ml-1 my-2' type='text' max="30" min="2"></input>

                        <label className='text-md py-11 font-semibold text-gray-700 text-right' htmlFor='UserName'>UserName  </label><br></br>
                        <input name='UserName' onChange={handleInputs} className='w-full h-8 focus:outline-none appearance-none leading-tight focus:shadow-lg px-5 bg-red-100 text-slate-700 ml-1 my-2' type='text' max="30" min="2"></input>

                        <label className='text-md py-11 font-semibold text-gray-700 text-right' htmlFor='Email'>Email  </label><br></br>
                        <input name='Email' onChange={handleInputs} className='w-full h-8 focus:outline-none appearance-none leading-tight focus:shadow-lg px-5 bg-red-100 text-slate-700 ml-1 my-2' type='text' max="30" min="2"></input>


                        <label className='text-md py-11 font-semibold text-gray-700 text-' htmlFor='Password'>Password  </label><br></br>
                        <input name='Password' onChange={handleInputs} className='w-full h-8 focus:outline-none appearance-none leading-tight focus:shadow-lg px-5 bg-red-100 text-slate-700 ml-1 my-2' type='password' max={30} min="2"></input>

                        <label className='text-md py-11 font-semibold text-gray-700 text-right' htmlFor='RePassword'>Repeat Password  </label><br></br>
                        <input name='RePassword' onChange={handleInputs} className='w-full h-8 focus:outline-none appearance-none leading-tight focus:shadow-lg px-5 bg-red-100 text-slate-700 ml-1 my-2' type='password' max="30" min="2"></input>
                    </div>
                    <p className='w-full bg-emerald-600'></p>
                    <div className='w-full text-center'>
                        <button onClick={handleSubmit} className='w-36 py-2 px-3 mt-2 bg-slate-400 hover:bg-blue-600 rounded-md hover:text-slate-300'>Register</button>
                    </div>
                    <div className='w-full text-center'>
                        <p className='my-2 '>Do you have account? <Link className="text-blue-700 underline hover:text-yellow-300 " to="/login">Login</Link></p>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register
