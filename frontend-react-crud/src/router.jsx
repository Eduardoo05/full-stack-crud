import { createBrowserRouter } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import NotFound from "./views/NotFound";




const routes = createBrowserRouter([
    
    {
        path: '/login', element: <Login />
    },
    {
        path: '/signup', element: <Signup />
    },
    {
        path: '/users', element: <Users />
    },
    {
        path: '*', element: <NotFound/>
    }
])

export default routes;
