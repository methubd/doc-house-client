import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/Home/OurDoctor/DoctorProfile";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

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
            }
        ]
    }
])

export default router;