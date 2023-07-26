"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FadingCarousel.module.css"; // Custom CSS for fading effect
import Image from "next/image";
import { PrevArrow, NextArrow } from "./Arrows";

const Hero = () => {
  const sliderRef = useRef<Slider>(null);

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      {/* desktop slider */}
      <div className="hidden md:block">
        <div className="overflow-x-hidden bg-red-50 relative group transition-all duration-300">
          <Slider {...settings} ref={sliderRef}>
            <div>
              <div
                className={` h-[calc(100vh-148px)] ${styles.imageContainer}`}
              >
                <Image
                  src="/slider.webp"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <div
                className={` h-[calc(100vh-148px)] ${styles.imageContainer}`}
              >
                <Image
                  src="/slider2.webp"
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <div
                className={` h-[calc(100vh-148px)] ${styles.imageContainer}`}
              >
                <Image
                  src="/slider3.webp"
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </Slider>
          {/* buttons */}
          <PrevArrow
            className={`hidden group-hover:block ${styles.prevArrow}`}
            onClick={prevSlide}
          />
          <NextArrow
            className={`hidden group-hover:block ${styles.nextArrow}`}
            onClick={nextSlide}
          />
        </div>
      </div>
      {/* mobile slider */}
      <div className="block md:hidden">
        <div className="overflow-x-hidden bg-red-50 relative group transition-all duration-300">
          <Slider {...settings}>
            <div>
              <div
                className={` h-[calc(100vh-148px)] ${styles.imageContainer}`}
              >
                <Image
                  src="/mobileSlider.webp"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <div
                className={` h-[calc(100vh-148px)] ${styles.imageContainer}`}
              >
                <Image
                  src="/mobileSlider2.webp"
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div>
              <div
                className={` h-[calc(100vh-148px)] ${styles.imageContainer}`}
              >
                <Image
                  src="/mobileSlider3.webp"
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </Slider>
          {/* buttons */}
          <PrevArrow
            className={`hidden group-hover:block ${styles.prevArrow}`}
            onClick={prevSlide}
          />
          <NextArrow
            className={`hidden group-hover:block ${styles.nextArrow}`}
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
