import React, { useEffect, useRef } from 'react';

const Blog = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    const handleBtn=e=>{
        e.preventDefault()
        alert(`${nameRef.current.value}, ${emailRef.current.value}, ${passRef.current.value}`);

    }
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    return (
        <div>
           <div className='flex justify-center items-center'>
            <form onSubmit={handleBtn} action="">

                <input ref={nameRef} type="text" className="border-2 border-blue-500" placeholder='Name' name='name'/>
                <br />
                <input ref={emailRef} type="email" className="border-2 border-blue-500 my-3" placeholder='Email' name='email' />
                <br />
                <input ref={passRef} type="password" className="border-2 border-blue-500 " placeholder='Password' name='password' />
                <br />
                <button className="bg-green-700 p-4 rounded-md my-4">Submit</button>
            </form>
            </div> 
        </div>
    );
};

export default Blog;