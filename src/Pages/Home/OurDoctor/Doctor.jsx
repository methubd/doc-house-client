import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { ClockIcon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/solid'


const Doctor = ({doc}) => {
    const {_id, name, address, available_hours, consultation_charge, designation, experience, photo_link, rating} = doc;
    return (
        <div className="p-5 border shadow-md">
            <div className="">
            <img className="md:w-[350px] md:h-[260px] rounded-lg" src={photo_link} alt="" />
            </div>
            <h1 className="text-xl font-bold pt-2">{name}</h1>
            <p className="">{designation}</p>
            
            <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
            />

            <hr className="py-1 mt-1" />
            <div className="text-sm">
            <p className="flex py-1"> <MapPinIcon className="h-5 w-5 text-gray-500 mr-3" /> {address}</p>
            <p className="flex py-1"> <ClockIcon className="h-5 w-5 text-gray-500 mr-3" /> {available_hours}</p>
            <p className="flex py-1"> <CurrencyDollarIcon className="h-5 w-5 text-gray-500 mr-3" />{consultation_charge}</p>
            <p className="flex py-1"> <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-3" /> {experience} experienced.</p>
            </div>
            <Link to={`/doctorProfile/${_id}`} className="btn btn-outline my-5">View Profile</Link>
        </div>
    );
};

export default Doctor;