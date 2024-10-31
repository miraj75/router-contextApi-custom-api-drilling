import { useLoaderData, useNavigate } from "react-router-dom";



const PostDetails = () => {
    const navigate = useNavigate()
    const post = useLoaderData()
    const goBackBtn=()=>{
        navigate(-1)
    }
    return (
        <div className="border-2 shadow-md flex justify-center items-center gap-2 p-8 flex-col flex-grow">
            <h1 className="text-4xl font-bold">Post details: {post.id}</h1>
            <h1>{post.body}</h1>
            <button onClick={goBackBtn} className="p-4 bg-blue-600 text-black rounded-md">Go Back</button>
        </div>
    );
};

export default PostDetails;