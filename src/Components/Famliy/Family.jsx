import React, { createContext } from 'react';
import Aunty from './AllMember/Aunty';
import Uncle from './AllMember/Uncle/Uncle';
import Dad from './Dad/Dad';
export  const AssetContext =createContext('gold')
const Family = () => {
    return (
        <div className='flex items-center flex-col justify-center h-screen'>
            <h1 className='text-6xl font-bold text-blue-500 py-6'>Form Master</h1>
            <div className='border-2 rounded-md p-6 border-purple-800'>
            <h1 className='text-4xl text-center font-bold text-yellow-500 py-6'>Family</h1>
       <AssetContext.Provider value='gold'>
       <div className='flex rounded-md border-2 border-yellow-400 gap-4 items-center p-8'>
            <Dad />
            <Aunty />
            <Uncle />
        </div>
       </AssetContext.Provider>
            </div>
    </div>
    );
};

export default Family;