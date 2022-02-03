import { useState, useEffect, useRef } from 'react';
import css from './styles.module.css';

const Carousel = ({ imgArray }) => {
  const delay = 2500;
  let sliderArr = imgArray;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sliderArr.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className={`${css.slideshow} rounded-3xl h-[30vh]`}>
      <div
        className={`${css.slider}`}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliderArr.map((item, index) => {
          return (
            <div key={index} className={`${css.slide}`}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
