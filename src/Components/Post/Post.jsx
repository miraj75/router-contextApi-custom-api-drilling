import { Link, useNavigate } from "react-router-dom";
const Post = ({singlePost}) => {
    const {title,id} = singlePost
    const navigate = useNavigate()
   const handlebtn =()=>{
    navigate(`/post/${id}`)
   }
    return (
        <div>
            <div className="border-2 shadow-md flex justify-center items-center gap-2 p-8 flex-col flex-grow"> 
                <h1>{title}</h1>
                <Link to={`/post/${id}`}><button className="p-4 bg-blue-600 text-black rounded-md">Read More</button></Link>
            <button className="p-4 bg-blue-600 text-black rounded-md" onClick={handlebtn}> See More</button>
            </div>
        </div>
    );
};

export default Post;