import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionHead from "../../../components/SectionHead";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [])

    return (
        <div className="lg:w-2/3 mx-auto pt-24 text-center">
            
            <SectionHead
            heading="What Our Patients Says"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            ></SectionHead>

            <div className="py-28 my-10 border">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                    key={review._id}
                    review = {review}
                    >                        
                        <div className="">
                            <div className="w-48 mx-auto py-5">
                            <Rating
                                value={review.rating}
                                readOnly
                            />
                            </div>
                            <h1 className="text-2xl">{review.customer_name}</h1>
                            <p className="text-sm">{review.review_text}</p>
                        </div>
                    </SwiperSlide>)
                }                
            </Swiper>
            </div>

            
        </div>
    );
};

export default Testimonials;