import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-3 gap-1">
                {
                    posts.map(singlePost=> <Post singlePost={singlePost} key={singlePost.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;