import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CommonHeader from "../../../components/CommonHeader";
import { Rating } from "@smastrom/react-rating";
import { MapPinIcon } from "@heroicons/react/24/solid";
import DoctorPersonalProfile from "./DoctorPersonalProfile";


const DoctorProfile = () => {
    const doctor = useLoaderData();
    const {name, address,  designation, photo_link, rating} = doctor[0];

    return (
        <div>
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
                    
                    <button className="bg-slate-500 px-5 text-white py-1 my-5 text-sm">Go Back</button>
                    <button className="lg:ml-2 bg-slate-500 px-5 text-white py-1 my-5 text-sm">Make an Appointment</button>
                </div>
            </div>

            <div className="p-10 bg-slate-200 lg:w-2/3 mx-auto rounded-lg h-screen">

                <DoctorPersonalProfile
                key={doctor._id}
                doctor={doctor}
                ></DoctorPersonalProfile>

            </div>            
        </div>
    );
};

export default DoctorProfile;