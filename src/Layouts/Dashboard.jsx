import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Dashboard = () => {

    const {user} = useContext(AuthContext);
    const [admin, setAdmin] = useState(null);
    console.log(admin);

    useEffect(() => {
        const url = `http://localhost:5000/users?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {  

            if(data[0].role === 'admin' && user.email === data[0].email){
                setAdmin(data[0].name)
            }
            else{
                setAdmin(null)
            }

            console.log(data[0].role);

        })
    }, [user])
    
    return (
        <div className="drawer drawer-mobile bg-slate-100 ">
            <Helmet>
                <title>Dashboard | Doc House</title>
            </Helmet>

        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold bg-slate-400 w-full mt-4 pe-2 text-white p-2 text-center">Dashboard</h1>
            <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side w-full">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <Link className=" bg-gray-300 p-5 mb-1" to='bookedService'>Appointments</Link>
            { admin &&
                <>
                <p className="bg-red-200 md:w-[80%] mx-auto mt-5 rounded-md p-1 text-center">Administration Tools</p>
                <Link className=" bg-gray-300 p-5 my-1" to='/dashboard/users'>Users</Link>
                <Link className=" bg-gray-300 p-5 my-1" to='bookedService'>Add Doctor</Link>
                <Link className=" bg-gray-300 p-5 my-1" to='bookedService'>Daily Sheet</Link>
                </>
            }
            
            <Link className=" bg-gray-300 p-5 my-1" to='bookedService'>Indoor Billing</Link>
            <Link className=" bg-gray-300 p-5 my-1" to='bookedService'>OPD Service</Link>
            
            </ul>        
        </div>
        <p><small>Hello: <span className="bg-gray-300 px-2">{admin}</span>, Your Time countdown started... </small></p>
        </div>
    );
};

export default Dashboard;