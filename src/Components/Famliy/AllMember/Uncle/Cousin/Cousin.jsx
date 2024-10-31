import React from 'react';

const Cousin = ({name,gift}) => {
    return (
        <div className='border-2 border-yellow-300 p-4'>
            <h1 className='text-2xl font-bold'>Cousin</h1>
            <p className='text-2xl font-bold'>{name}</p>
            <p className='text-2xl font-bold'>has: {gift}</p>
        </div>
    );
};

export default Cousin;