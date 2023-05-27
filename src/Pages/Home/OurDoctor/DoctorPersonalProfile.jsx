import { Rating } from '@smastrom/react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DoctorPersonalProfile = ({doctor}) => {
    const {about_me, education, awards, work_experience, specializations, services, address, rating} = doctor[0];
    
    return (
        <div className='lg:w-2/3 mx-auto'>
              <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Locations</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>Business Hours</Tab>
                </TabList>

                    <TabPanel>
                        <div>
                            <h1 className='text-2xl font-bold my-5'>About Me</h1>
                            <p className='text-gray-500'>{about_me}</p>

                            <div className='md:flex justify-between'>

                                <div>
                                    <h1 className='text-2xl font-bold my-5'>Education</h1>
                                    <p className='text-gray-500'>{education}</p>
                                    
                                    <h1 className='text-2xl font-bold my-5'>Work & Experience</h1>
                                    {
                                        work_experience.map(we => <li className='text-gray-500'
                                        key={we.index}>
                                        
                                        {we.position} : 
                                        {we.hospital} : 
                                        {we.years} Yrs
                                        </li>)
                                    }

                                    <h1 className='text-2xl font-bold my-5'>Services</h1>
                                    {
                                        services.map(value => <ol className='text-gray-500'
                                        key={value.index}>                                        
                                        {value}
                                        </ol>)
                                    }                                 
                                    
                                </div>

                                <div className='md:border-l-2 md:pl-5 border-gray-300'>                                
                                    <h1 className='text-2xl font-bold my-5'>Awards</h1>
                                    {
                                        awards.map(award => <li className='text-gray-500' 
                                            key={award._id
                                            }>{award}
                                            </li>)
                                    }

                                    <h1 className='text-2xl font-bold my-5'>Specialization</h1>
                                    {
                                        specializations.map(value => <ol className='text-gray-500'
                                        key={value.index}>                                        
                                        {value}
                                        </ol>)
                                    }

                                </div>

                            </div> 

                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2>{address}</h2>
                    </TabPanel>
                    <TabPanel>
                    <div className='bg-slate-300 w-60 mx-auto text-center rounded-md py-10 px-10 my-10'>
                        <Rating                        
                        value={rating}
                        readOnly
                        />
                        <h1 className='pt-5 text-2xl font-bold'>Average: {rating}</h1>
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <h2></h2>
                    </TabPanel>
            </Tabs>
        </div>
    );
};

export default DoctorPersonalProfile;