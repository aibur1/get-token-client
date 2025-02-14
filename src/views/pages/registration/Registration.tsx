import React, { useState } from 'react';
import './Registration.css';

type userType = {
    name:string,
    email: string,
    mobile:string,
    password:string,
    avatar:string,
    role:string,
}
const dataIn = {
    name:"ABc",
    email: "atbc@gmail.com",
    mobile:"015654585",
    password:"Qw!234fgfdf",
    avatar:"",
    role:"owner",
}


const Registration = () => {
    const [image,setImage] = useState<string>("");
    const [newUser,setNewUser] = useState<userType>(dataIn);

    const handleImageChange = (e:any) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            if (typeof reader.result === "string") {
                setImage(reader.result)
            }
        }
    }

    const handleRegistration = () =>{
        if (image) {
            newUser.avatar = image
        }
        try {
                fetch(`${process.env.REACT_APP_API_BASE_URL}/authenticate/registration`,{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnchangeReg = (e: React.ChangeEvent<HTMLInputElement>) =>{

    }
    return (
        <div className=" login-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
           
            <header className=' max-w-lg mx-auto' >
                <a href='/#'>
                   <h1 className='text-4xl font-bold text-white text-center'>Registration</h1>
                </a>
            </header>
            <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
                <div>
                    <h3 className='font-bold text-2xl'>Welcome to Registration </h3>
                    <p className='text-gray-600 pt-2'>Create your account</p>
                </div>
                <div className='mt-10'>
                    <form className='flex flex-col' onSubmit={handleRegistration} >

                    <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="email">Full Name</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' onChange={(e)=>handleOnchangeReg(e)} name='name' type="text" id="email" />
                       </div>

                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="email">Email</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' onChange={(e)=>handleOnchangeReg(e)} name='email' type="email" id="email" />
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Password</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' onChange={(e)=>handleOnchangeReg(e)} name='password' type="password" id="password" />
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Profile Picture</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' type="file" onChange={handleImageChange} id="file" />
                           {
                                image && <img src={image} alt="" />
                            }
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Mobile Number</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' onChange={(e)=>handleOnchangeReg(e)} name='mobile' type="mobile" id="mobile" />
                       </div>
                       <div className='mb-6 pt-3 rounded bg-gray-200'>
                           <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Role</label>
                           <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' name='role' type="role" id="role" />
                       </div>
                       <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200' type='submit' >Sign Up</button>
                    </form>
                </div>
            </main>
            <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
                <p className='text-white'>Already have an account? <a href='/#' className='font-bold hover:underline' >Sign In</a> </p>
            </div>

            <footer className='max-w-lg mx-auto flex justify-center text-white'>
               <a href='/#' className='hover:underline'>Contact</a>
               <span className='mx-3'>•</span>
               <a href='/#' className='hover:underline'>Privacy</a>
            </footer>
             
        </div>
    );
};

export default Registration;