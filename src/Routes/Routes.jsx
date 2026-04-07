import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";


const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:Home},
            {path:'blog',Component:Blog},
            {path:'news',Component:''}
        ]
    }
])
export default router;