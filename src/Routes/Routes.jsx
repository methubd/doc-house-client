import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/Home/OurDoctor/DoctorProfile";

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
                element: <DoctorProfile></DoctorProfile>
            }
        ]
    }
])

export default router;