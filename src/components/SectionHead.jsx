

const SectionHead = ({heading, description}) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold pb-5">{heading}</h1>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default SectionHead;