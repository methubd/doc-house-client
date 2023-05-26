import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";
import WorkingHours from "../WorkingHours/WorkingHours";
import Testimonials from "../Testimonials/Testimonials";
import OurDoctor from "../OurDoctor/OurDoctor";


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
            <OurDoctor></OurDoctor>
            
        </div>
    );
};

export default Home;