import React, { useState, useEffect } from 'react';

const NumberAnimation = () => {
  const [count, setCount] = useState(0);
  const targetCount = 100000;

  useEffect(() => {
    const animationDuration = 8000; // Duration of the animation in milliseconds
    const steps = 100; // Number of steps in the animation
    const stepValue = targetCount / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(currentCount => currentCount + stepValue);
      } else {
        setCount(targetCount);
        clearInterval(interval);
      }
    }, animationDuration / steps);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="number-animation">
         <h1 className='h1 wrapper'>
  <div className='bgg' >  <span >{Math.floor(count).toLocaleString()}</span> + Customers</div>
  <div className='fg' >  <span >{Math.floor(count).toLocaleString()}</span> + Customers</div>
</h1>
    </div>
  );
};

export default NumberAnimation;
