import React, { useContext } from 'react';
import { AssetContext } from '../Family';
import Cousin from './Uncle/Cousin/Cousin';
const Aunty = () => {
    const gift = useContext(AssetContext)
    return (
        <div className='border-2 border-pink-800 rounded-md p-10'>
           <h1 className='text-3xl font-bold'>Aunty</h1>
           <section className='flex gap-2'>
            <Cousin name={"Hiron"} gift={gift}></Cousin>
            <Cousin name={'Shakib'} gift={gift}></Cousin>
           </section>
        </div>
    );
};

export default Aunty;