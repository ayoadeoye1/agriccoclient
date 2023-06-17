import React, { useState, useEffect } from 'react';
import fb from '../assets/fb.png'
import c from '../assets/close.png'
import m from '../assets/menu.png'
import f from '../assets/spinner.gif'
import w from '../assets/wa.png'
import t from '../assets/twi.png'

const HeroSection = () => {
  const images = [
    f,
    fb,
    c,
    m,
    w,
    t,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt="Hero"
        className="w-[99%] h-auto rounded-md"
        style={{ maxHeight: '600px' }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className=" text-2xl sm:text-4xl font-bold text-slate-600">Welcome to AgriccoNG</h1>
      </div>
    </div>
  );
};

export default HeroSection;
