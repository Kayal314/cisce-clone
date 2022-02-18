import React from 'react';
import {useState, useRef, useEffect} from 'react';
import './ImgSlideshow.css';

const images = ['https://www.cisce.org/images/banner/coronaawareness1.png',
                'https://www.cisce.org/images/banner/1-Knowledge%20is%20Power.jpg',
                'https://www.cisce.org/images/banner/2-Pioneering%20Quality%20Education%20in%20India.jpg',
                'https://www.cisce.org/images/banner/3-Spirit%20of%20Enquiry.jpg',
                'https://www.cisce.org/images/banner/4-Quest%20for%20Knowledge.jpg',
                'https://www.cisce.org/images/banner/5-In%20Pursuit%20of%20Excellence.jpg',
                'https://www.cisce.org/images/banner/6-All%20Round%20Development.jpg',
                'https://www.cisce.org/images/banner/7-Team%20Work.jpg',
                'https://www.cisce.org/images/banner/8-Scaling%20New%20Heights.jpg',
                'https://www.cisce.org/images/banner/9-Healthy%20Mind%20in%20a%20Healthy%20Body.jpg']

const delay = 6000;

function ImgSlideshow() {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if(timeoutRef.current)
            clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);

  return (
    <div className='img_slideshow'>
        <div className="slideshow">

        <div className='slideshow_banner'>
            Welcome to the Council for the Indian School Certificate Examinations
        </div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

        {images.map((backgroundImage) => (
          <img
            className="slide"
            src={backgroundImage}>
           </img>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ImgSlideshow;