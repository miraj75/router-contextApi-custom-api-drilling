import React from 'react';
import Brother from './Brother';
import Myself from './Myself/Myself';
import Sister from './Sister';
const Dad = () => {
    return (
        <div className='border-2 rounded-md border-amber-600 p-10'>
            <h1 className='text-3xl font-bold text-center'>DaD</h1>
            <div className='flex gap-2' >
             <Myself></Myself>
            <Brother></Brother>
            <Sister></Sister>   
            </div>

        </div>
    );
};

export default Dad;