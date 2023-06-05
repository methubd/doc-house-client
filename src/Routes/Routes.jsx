import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/Home/OurDoctor/DoctorProfile";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Layouts/Dashboard";
import BookedServices from "../Layouts/Dashboard/BookedServices";
import Users from "../Layouts/Dashboard/Users";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/doctorProfile/:id',
                element: <DoctorProfile></DoctorProfile>,
                loader: ({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }, 
    
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
        children: [
            {
                path: '/dashboard/',
                element: <BookedServices></BookedServices>
            },
            {
                path: 'bookedService',
                element: <BookedServices></BookedServices>,
            }, 
            {
                path: 'users',
                element: <Users></Users>
            }
        ]
    }
])

export default router;