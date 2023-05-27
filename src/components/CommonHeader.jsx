import { useLocation } from "react-router-dom";


const CommonHeader = ({heading}) => {
    const location = useLocation()
    return (
        <section className="bg-[rgb(7,51,47)] ">
            <div className="md:flex w-full lg:w-2/3 text-white mx-auto pt-20 items-center lg:h-[500px]">
                <div>
                    <p className="text-sm">Home {location.pathname}</p>
                    <h1 className="text-6xl font-semibold">{heading}</h1>
                </div>
            </div>
        </section>
    );
};

export default CommonHeader;