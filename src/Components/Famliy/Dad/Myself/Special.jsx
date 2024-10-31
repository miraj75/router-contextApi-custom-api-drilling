import React, { useContext } from 'react';
import { AssetContext } from '../../Family';

const Special = () => {
    const gift = useContext(AssetContext)
    return (
        <div className='border-2 border-lime-950 rounded-md p-10'>
           <h1 className='text-3xl font-bold'>Special</h1>
           <h1 className='text-3xl font-bold'>Has: {gift}</h1>
        </div>
    );
};

export default Special;