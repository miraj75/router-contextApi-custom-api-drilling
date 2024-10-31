import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
    const user = useLoaderData(); 
   
    return (
        <div>
            <div className=" grid grid-cols-3 gap-3">{
                user.map(user=> <div className="border-2">

                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <Link to={`/users/${user.id}`}><button className="p-4 bg-green-600 text-black rounded-md">Details</button></Link>
                </div>)
            }</div>
            
        </div>
    );
};

export default Products;
