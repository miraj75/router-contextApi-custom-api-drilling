import React from 'react';
import Cousin from './Cousin/Cousin';
const Uncle = () => {
    return (
        <div className='border-2 border-lime-950 rounded-md p-10'>
           <h1 className='text-3xl font-bold text-center'>Uncle</h1>
           <section className='flex gap-2'>
            <Cousin name={'Rafsan'}></Cousin>
            <Cousin name={'Hasan'}></Cousin>
           </section>
        </div>
    );
};

export default Uncle;