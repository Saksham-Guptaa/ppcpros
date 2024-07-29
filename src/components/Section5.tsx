import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Image from "next/image";
const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.png",
  ];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleImages, setVisibleImages] = useState(1);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(3);
      } else if (window.innerWidth >= 640) {
        setVisibleImages(2);
      } else {
        setVisibleImages(1);
      }
    };

    window.addEventListener("resize", updateVisibleImages);
    updateVisibleImages();

    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const translateX = `-${(currentIndex * 100) / visibleImages}%`;

  return (
    <div className="relative w-full  max-w-6xl mx-auto overflow-hidden">
      <div className="relative  border-black rounded-sm border-[2px] ">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(${translateX})` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0`}
              style={{ flex: `0 0 ${100 / visibleImages}%` }}
            >
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={800}
                height={450}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div
          className="flex transition-transform duration-500 absolute inset-0"
          style={{ transform: `translateX(${translateX})` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0`}
              style={{ flex: `0 0 ${100 / visibleImages}%` }}
            >
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={800}
                height={450}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20" >
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <button
            onClick={() => setIsPaused(!isPaused)}
            className=" text-black p-2 rounded"
            >
            {isPaused ? <FaPlay className="text-3xl  " /> : <FaPause className="text-3xl " />
}
            </button>
        </div>
        <div className="absolute bottom-4 right-4 flex">
            <button
            onClick={goToPrevious}
            className=" text-balck p-2 rounded"
            >
            <FaArrowCircleLeft className="text-3xl bg-black rounded-full  text-white " />
            </button>
            <button
            onClick={goToNext}
            className=" text-balck p-2 rounded"
            >
            <FaArrowCircleRight className="text-3xl bg-black rounded-full  text-white " />
            </button>
        </div>
      </div>
      
    </div>
  );
};
export default Carousel;