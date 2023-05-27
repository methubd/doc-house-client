

const Footer = () => {
    return (
        <div className='py-28 bg-[#F3F3F3] mt-20 grid grid-cols-1 md:grid-cols-4 md:gap-10 px-40'>
            <div>
                <h1 className="text-2xl font-bold pb-5">Doc House</h1>
                <p className="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quod, similique explicabo eaque quasi dolores eveniet nam repudiandae eius reprehenderit ex necessitatibus incidunt nisi officia asperiores nobis consectetur voluptate ipsam.</p>
                <button className="btn btn-outline my-5">Appointment</button>
            </div>

            <div>
                <h1 className="text-xl font-bold pb-5 ">Quick Links</h1>
                <ul className="text-sm text-blue-500">
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Doctors</li>
                    <li>Department</li>
                    <li>Online Payment</li>
                    <li>Contact Us</li>
                    <li>My Account</li>
                </ul>
            </div>

            <div>
                <h1 className="text-xl font-bold pb-5 ">Doc House Services</h1>
                <ul className="text-sm text-blue-500">
                    <li>Pediatric Clinic</li>
                    <li>Diagnostic Clinic</li>
                    <li>Cardiac Clinic</li>
                    <li>Laboratory Analysis</li>
                    <li>Gynecological Clinic</li>
                    <li>Personal Counseling</li>
                    <li>Dental Clinic</li>
                </ul>
            </div>

            <div>
                <h1 className="text-xl font-bold pb-5 ">Working Hours</h1>
                <ul className="text-sm text-gray-500">
                    <li>Monday - 10 am to 7 pm</li>
                    <li>Tuesday - 10 am to 7 pm</li>
                    <li>Wednesday - 10 am to 7 pm</li>
                    <li>Thursday - 10 am to 7 pm</li>
                    <li>Friday - 10 am to 7 pm</li>
                    <li>Saturday - 10 am to 7 pm</li>
                    <li>Sunday - 10 am to 7 pm</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;