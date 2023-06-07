import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://recap-bistro-boss-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [])

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div>
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center px-16">
                  <Rating style={{ maxWidth: 200 }} value={review.rating} readOnly />
                  <div className='mt-4'>
                    <FaQuoteLeft className='text-6xl'></FaQuoteLeft>
                  </div>
                  <p className='mt-4'>{review.details}</p>
                  <h3 className="text-3xl font-medium mt-2 text-yellow-500 uppercase">
                    {review.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;