import { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import Link from "./Link";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Post', path: '/posts' },
        { id: 4, name: 'Product', path: '/products' },
        { id: 5, name: 'Blog', path: '/blog' },
        { id: 6, name: 'Hook', path: '/hook' },
        { id: 7, name: 'Reuse', path: '/reuse' },
        { id: 8, name: 'Family', path: '/family' }
    ];
      
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="lg:hidden cursor-pointer p-2">
                {open ? <IoClose /> : <IoMenuSharp />}
            </div>
            
            <ul className={`flex flex-col gap-4 p-4 border-2 text-center md:flex-row md:justify-evenly ${open ? 'block' : 'hidden'} md:flex`}>
                {routes.map(route => (
                    <Link route={route} key={route.id} />
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
