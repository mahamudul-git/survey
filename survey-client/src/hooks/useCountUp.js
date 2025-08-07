import { useState, useEffect } from 'react';

const useCountUp = (end, duration = 1000, delay = 0, trigger = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      setHasStarted(false);
      return;
    }

    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, trigger]);

  useEffect(() => {
    if (!hasStarted || !trigger) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out quad function
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setCount(Math.floor(easeOutQuad * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, hasStarted, trigger]);

  return count;
};

export default useCountUp;
