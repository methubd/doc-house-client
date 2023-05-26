import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const Doctor = ({doc}) => {
    const {_id, name, address, available_hours, consultation_charge, designation, experience, photo_link, rating} = doc;
    return (
        <div className="p-10 border">
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
            <p>{address}</p>
            <p>{available_hours}</p>
            <p>{consultation_charge}</p>
            <Link to={`/doctorProfile/${_id}`} className="btn btn-outline">View Profile</Link>
        </div>
    );
};

export default Doctor;