import React, { useEffect, useState } from "react";

const AutoSlide = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <p className="text-black text-2xl w-full font-bold tracking-[0.2em] text-center rounded-t py-1 uppercase" style={{background: "#ffab00"}}>
          {images[index]?.name}
        </p>
      </div>
      {images?.length > 0 && (
        <div className="flex flex-col items-center justify-center w-full h-160">
          <img
            src={images[index]?.image}
            className="block object-cover w-full rounded-lg rounded-t-none w-full h-160"
            alt={`image-${index}`}
          />
        </div>
      )}
    </div>
  );
};

export default AutoSlide;
