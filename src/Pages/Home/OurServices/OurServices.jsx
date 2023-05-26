import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurServices = () => {
    return (
        <section className="md:flex justify-center w-2/3 mx-auto py-28">
            <div>
                <img className='md:w-[1200px;] rounded-lg' src="https://i.pinimg.com/originals/7b/de/b5/7bdeb59ac67e572286c16718a96c6138.jpg" alt="" />
            </div>
            <div className='md:pl-5'>
                <h1 className="text-3xl font-bold pb-5">Our Services</h1>
                <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                {/* Tabs */}

                <div className='pt-10'>
                <Tabs>
                    <TabList>
                        <Tab>Cavity Projection</Tab>
                        <Tab>Cosmetic Denticity</Tab>
                        <Tab>Oral Surgery</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Cavity Projection</h2>
                    </TabPanel>
                </Tabs>
                </div>
            </div>
        </section>
    );
};

export default OurServices;