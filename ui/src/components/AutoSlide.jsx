import React, { useEffect, useState } from "react";

const AutoSlide = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {images?.length > 0 && (
        <div className="flex flex-col items-center justify-center rounded-full w-full h-170">
          <img
            src={images[index]}
            className="block object-cover rounded-lg w-full h-170"
            alt={`image-${index}`}
          />
        </div>
      )}
    </div>
  );
};

export default AutoSlide;
