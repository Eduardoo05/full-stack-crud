import { Navigate, createBrowserRouter } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";




const routes = createBrowserRouter([
    
    {
        path: '/', 
        element: <DefaultLayout />,
        children:[
            {
                path: '/',
                element: <Navigate to={'/user'} />
            },
            {
                path: '/dashboard', element: <Dashboard />
            },
            {
                path: '/user', element: <Users />
            },
        ]
    },
    {
        path: '/', 
        element: <GuestLayout />,
        children: [
            {
                path: '/login', element: <Login />
            },
            {
                path: '/signup', element: <Signup />
            },
        ]
    },
    {
        path: '*', element: <NotFound/>
    }
])

export default routes;
