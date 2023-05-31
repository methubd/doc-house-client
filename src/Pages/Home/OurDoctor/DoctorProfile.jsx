import { Helmet } from "react-helmet-async";
import CommonHeader from "../../../components/CommonHeader";
import { Rating } from "@smastrom/react-rating";
import { MapPinIcon } from "@heroicons/react/24/solid";
import DoctorPersonalProfile from "./DoctorPersonalProfile";

import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Modal } from "react-daisyui";

import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../../Providers/AuthProvider";


const DoctorProfile = () => {
    const {user} = useContext(AuthContext);
    const doctor = useLoaderData();
    const {_id, name, address,  designation, photo_link, rating} = doctor[0];

    const [confirm, setConfirm] = useState(false)
    const navigate = useNavigate();

    const handleConfirmService = () => {
        
        if(user?.email){
            return setConfirm(!confirm)
        }
        else{
            toast.error('Please login to make appointment!')
            return navigate('/login')
        }
    }

    const handleAppointment = event => {
        event.preventDefault();
        const form = event.target;
        const ptName = form.name.value;
        const email = user?.email;
        const contact = form.contact.value;
        const charge = form.charge.value;
        const date = form.date.value;
        const newAppointment = {name, designation, email, ptName, contact, charge, date}

        if(user.email === undefined){
            toast('Please Login to make an appointment');
            return;
        }

        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            }, 
            body: JSON.stringify(newAppointment)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast('We received your request!')
            }
            form.reset();
            handleConfirmService();
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleBack = () => {
        return history.back();
    }

    return (
        <div className="">
            <Helmet>
                <title>Doctor Profile | Doc House</title>
            </Helmet>
            
            <CommonHeader
            heading="Doctor Profile"
            ></CommonHeader>
            
            <div className="md:flex lg:w-2/3 mx-auto p-5 mt-28 bg-slate-200 rounded-lg mb-10">
                <div>
                    <img className="lg:w-[350px] lg:h-[378px] rounded-lg" src={photo_link? photo_link : "Photo Not Available"} alt="" />
                </div>
                <div className="pl-5">
                    <h1 className="text-2xl font-bold py-1">{name}</h1>
                    <p className="py-1 text-gray-500">{designation}</p>
                    <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                    />
                    <p className="flex pt-2 text-sm text-gray-500"> <MapPinIcon className="h-5 w-5 text-gray-500 mr-3" /> {address}</p>
                    
                    {/* photo links */}
                    <div className="grid grid-cols-3 md:grid-cols-6 md:gap-2 opacity-60">
                        <img className="w-[80px] h-[80px] my-5 rounded-lg" src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                        <img className="w-[80px] h-[80px] my-5 rounded-lg" src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                        <img className="w-[80px] h-[80px] my-5 rounded-lg" src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                        <img className="w-[80px] h-[80px] my-5 rounded-lg" src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                        <img className="w-[80px] h-[80px] my-5 rounded-lg" src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    </div>
                    
                    <button onClick={handleBack} className="bg-slate-500 px-5 text-white py-1 my-5 text-sm">Go Back</button>
                    <button onClick={() => handleConfirmService (_id)} className="lg:ml-2 bg-slate-500 px-5 text-white py-1 my-5 text-sm">Make an Appointment</button>
                </div>
            </div>

            <div className="p-10 bg-slate-200 lg:w-2/3 mx-auto rounded-lg h-screen">

                <DoctorPersonalProfile
                key={doctor._id}
                doctor={doctor}
                ></DoctorPersonalProfile>

            </div>     
            
            {/* Modal        */}
            
            <Modal open={confirm}>
                <Modal.Header className="font-bold">
                {name} <span className="text-sm font-light text-gray-500">{designation}</span>
                </Modal.Header>

                <Modal.Body>
                <div>
                    <form onSubmit={handleAppointment}>
                    <h1 className="text-center bg-gray-400 text-white mt-5">Patient Information</h1>

                    <input className="bg-gray-200 p-2 mt-5 w-full rounded-md text-xl" type="text" name="name" placeholder="Patient Name" required />
                    
                    <input className="bg-gray-200 p-2 mt-5 w-full rounded-md text-xl" type="number" name="contact" placeholder="Contact Number" required />

                    <input className="bg-gray-200 p-2 mt-5 w-full rounded-md text-xl" type="number" name="charge" defaultValue="500" readOnly  />
                    
                    <input className="bg-gray-200 p-2 mt-5 w-full rounded-md text-xl" type="date" name="date" required />

                    <div className="text-center">
                    <input className="lg:ml-2 bg-slate-500 px-5 text-white py-2 hover:bg-gray-950 cursor-pointer my-5 text-sm" type="submit" value="Submit" /> <br />
                    <button className="bg-red-700 w-[200px] text-white" onClick={() => handleConfirmService()}>Close</button>
                    </div>
                    </form>
                    <Toaster/>
                </div>
                </Modal.Body>
            </Modal>
            {/* The button to open modal */}

        </div>
    );
};

export default DoctorProfile;