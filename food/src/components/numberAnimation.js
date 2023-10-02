import React, { useState, useEffect, useRef } from 'react';

const NumberAnimation = () => {
  const [count, setCount] = useState(0);
  const targetCount = 100000;
  const animationDuration = 8000; // Duration of the animation in milliseconds
  const steps = 100; // Number of steps in the animation
  const stepValue = targetCount / steps;

  const numberAnimationRef = useRef(null);

  useEffect(() => {
    let currentStep = 0;
    let animationInterval;
    let observer;
  
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        animationInterval = setInterval(() => {
          currentStep++;
          if (currentStep <= steps) {
            setCount((currentCount) => currentCount + stepValue);
          } else {
            setCount(targetCount);
            clearInterval(animationInterval);
          }
        }, animationDuration / steps);
      } else {
        clearInterval(animationInterval);
      }
    };
  
    if (numberAnimationRef.current instanceof Element) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
      });
  
      observer.observe(numberAnimationRef.current);
    }
  
    return () => {
      if (observer && numberAnimationRef.current instanceof Element) {
        observer.unobserve(numberAnimationRef.current);
      }
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="number-animation" ref={numberAnimationRef}>
      <h1 className='fs75 wrapper'>
        <div className='bgg'>
          <span>{Math.floor(count).toLocaleString()}</span> + Customers
        </div>
        <div className='fg'>
          <span>{Math.floor(count).toLocaleString()}</span> + Customers
        </div>
      </h1>
    </div>
  );
};

export default NumberAnimation;
