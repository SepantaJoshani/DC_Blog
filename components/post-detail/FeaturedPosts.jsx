import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getFeaturedPosts } from "../../services";
import FeaturedPostCard from "./FeaturedPostCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const breakpoints = {
  // when window width is >= 480px

  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute left-0 px-0 py-3 text-center bg-pink-600 rounded-full cursor-pointer arrow-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute right-0 py-3 text-center bg-pink-600 rounded-full cursor-pointer arrow-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <div className="mb-8">
      <Swiper
        breakpoints={breakpoints}
        navigation={true}
        modules={[Navigation]}
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <FeaturedPostCard post={post} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FeaturedPosts;
