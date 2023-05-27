import { useState } from "react";
import SectionHead from "../../../components/SectionHead";
import { useEffect } from "react";
import Doctor from "./Doctor";


const OurDoctor = () => {
    const [docs, setDocs] = useState([]);
    
    
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => {
            setDocs(data.slice(0, 3))
        })
    }, [])

    // TODO: SEE MORE BUTTON WORKS

    
    return (
        <div className="lg:w-2/3 mx-auto md:pt-28">
            <SectionHead
            heading="Our Expert Doctors"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            ></SectionHead>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
                {
                    docs.map(doc => <Doctor
                    key={doc._id}
                    doc = {doc}
                    ></Doctor>)
                }
            </div>
            <div className="text-center py-10">
                <button className="btn btn-outline">See All Doctor</button>
            </div>

        </div>
    );
};

export default OurDoctor;