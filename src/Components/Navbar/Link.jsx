import { NavLink } from "react-router-dom";
import './Link.css';
const Link = ({ route }) => {

    const { name, path } = route;
    return (
        <li className="cursor-pointer text-2xl text-yellow-300 bg-gray-800 p-2 rounded-md font-bold text-center">
            <NavLink to={path}>{name}</NavLink>
        </li>
    );
};

export default Link;
