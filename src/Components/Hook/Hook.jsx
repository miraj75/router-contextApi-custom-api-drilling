import React from 'react';
import UseInputState from '../UseInputState';

const Hook = () => {
    const [name,handleChange] = UseInputState('Miraj')

    const handleBtn=e=>{
        e.preventDefault()
        alert(name)

    }

    return (
        <div>
            <div className='flex justify-center items-center'>
            <form onSubmit={handleBtn} action="">

                <input value={name} onChange={handleChange} type="text" className="border-2 border-blue-500" placeholder='Name' name='name'/>
                <br />
                <input  type="email" className="border-2 border-blue-500 my-3" placeholder='Email' name='email' />
                <br />
                <input  type="password" className="border-2 border-blue-500 " placeholder='Password' name='password' />
                <br />
                <button className="bg-green-700 p-4 rounded-md my-4">Submit</button>
            </form>
            </div> 
        </div>
    );
};

export default Hook;