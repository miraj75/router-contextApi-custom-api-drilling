import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Details from './Components/Details/Details';
import Family from './Components/Famliy/Family';
import Hook from './Components/Hook/Hook';
import LineChart from './Components/LineChart/LineChart';
import Products from './Components/LineChart/Products/Products';
import PostDetails from './Components/PostDetails/PostDetails';
import Posts from './Components/Posts/Posts';
import ReuseableInput from './Components/ReuseableInput/ReuseableInput';
import './index.css';



const handleSignUp=data=>{
  
  console.log(data)
}
const handleProfileUpdate=data=>{
  console.log(data)

}



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/lineChart',
        element: <LineChart></LineChart>
      },{
        path: '/about',
        element: <About></About>
      },{
        path: '/family',
        element: <Family></Family>
      },
      {
        path: '/reuse',
        element: 
          <div>
           <ReuseableInput handleSubmit={handleSignUp} formTitle={'Sign Up'}></ReuseableInput>
           <ReuseableInput handleSubmit={handleProfileUpdate} formTitle={'Profile Update'}></ReuseableInput>
           </div>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/hook',
        element: <Hook></Hook>
      },
      {
        path: '/products',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Products></Products>,
        
      },
      {
        path: '/users/:productId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.productId}`).then(res => {
          if (!res.ok) throw new Error("Data fetch failed");
          return res.json();
        }),
        element: <Details />
      },
      {
        path:'/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: 'post/:postsId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`).then(res => {
          if (!res.ok) throw new Error("Data fetch failed");
          return res.json();
        }),
        element: <PostDetails></PostDetails>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
