

const Banner = () => {
    return (
        <section className="bg-[rgb(7,51,47)] ">
            <div className="md:flex w-full lg:w-2/3 text-white mx-auto pt-20 items-center lg:h-[800px]">
                <div>
                    <h1 className="text-6xl font-semibold">Your Best Medical Help Center</h1>
                    <p className="py-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ratione architecto quam accusamus ullam officia.</p>
                    <button className="bg-gray-500 px-5 py-2">All Service</button>
                </div>

                <div>
                    <img className="border border-y-8"  src="https://i.ibb.co/3Yh65SG/pngwing-com.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;