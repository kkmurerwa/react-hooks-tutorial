import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    // Add listener when component mounts
    window.addEventListener("scroll", scrollHandler);
    return () => {
      // Unmount listener after component unmounts
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <img
      src={isLoading ? null : inView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
