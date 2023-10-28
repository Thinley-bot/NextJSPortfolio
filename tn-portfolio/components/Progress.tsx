"use client"
import React, { useState, useEffect, useRef } from 'react';
import { CircularProgress} from '@chakra-ui/react';
const MyCircularProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        console.log("sadfjasdfkjasdf")
        const elementRect = elementRef.current.getBoundingClientRect();
        const scrollTop = elementRect.top;
        const elementHeight = elementRect.height;

        console.log(scrollTop,elementHeight)
        if(scrollTop<595){
          const progressPercentage = 100-Math.abs(scrollTop / elementHeight) * 100;
          setProgress(progressPercentage);

        }else{
          setProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className='bg-red-900 h-96'>
      <CircularProgress
        value={progress}
        size='50px'
        color="red"
        thickness='6px'
      />
      </div>
  );
};
export default MyCircularProgressBar;