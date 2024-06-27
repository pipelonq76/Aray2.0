import { useState, useEffect } from "react";


const images = [
    '../../../public/imgs/carrusel4.jpg',
  '../../../public/imgs/carrusel5.jpg',
    '../../../public/imgs/carrusel6.jpg',
];

const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="w-full  flex items-center justify-center">
        <div className="w-full overflow-hidden relative">
          <div className="w-full flex transition-transform duration-1500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} className="w-full flex-shrink-0" alt={`Slide ${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Carrusel;