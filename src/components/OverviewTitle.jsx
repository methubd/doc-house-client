

const OverviewTitle = (heading, description) => {
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>{heading}</h1>
            <p className='text-gray-500'>{description}</p>
        </div>
    );
};

export default OverviewTitle;