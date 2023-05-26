import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";
import WorkingHours from "../WorkingHours/WorkingHours";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Doc House</title>
            </Helmet>
            
            <Banner></Banner>
            <OurServices></OurServices>
            <WorkingHours></WorkingHours>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;