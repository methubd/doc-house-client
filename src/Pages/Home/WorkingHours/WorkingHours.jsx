import { ClockIcon, MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

const WorkingHours = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:w-2/3 mx-auto'>
            <div className='flex bg-[#07332F] text-white rounded-lg p-10'>
                <div>
                <ClockIcon className="h-10 w-10 text-white-500" />
                </div>
                <div className='pl-5'>
                    <h1>Opening Hours</h1>
                    <p className='text-sm'>Open 9.00am to 5.00pm <br /> Everyday </p>
                </div>
            </div>

            <div className='flex bg-gray-500 text-white rounded-lg p-10'>
                <div>
                <MapPinIcon className="h-10 w-10 text-white-500" />
                </div>
                <div className='pl-5'>
                    <h1>Our Location</h1>
                    <p className='text-sm'>Dhanmondi 17, Dhaka-1200, Bangladesh </p>
                </div>
            </div>

            <div className='flex bg-[#07332F] text-white rounded-lg p-10'>
                <div>
                <PhoneArrowUpRightIcon className="h-10 w-10 text-white-500" />
                </div>
                <div className='pl-5'>
                    <h1>Contact Us</h1>
                    <p className='text-sm'> <br /> +88 01750 00 00 00 <br /> +88 01780 00 00 00 </p>
                </div>
            </div>
        </div>
    );
};

export default WorkingHours;