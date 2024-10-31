import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate()
  const userDetails = useLoaderData();
  const handlebtn =()=>{
    navigate(-1)
  }
  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='border-2 p-8'><h1>{userDetails.name}</h1>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      <button className="p-4 bg-blue-600 text-black rounded-md" onClick={handlebtn}>Go Back</button>
      </div>
        </div>
        
      
    </div>
  );
};

export default Details;
