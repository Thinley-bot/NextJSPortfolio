import React, { useState, useEffect, useRef } from 'react';
import { CircularProgress } from '@chakra-ui/react';
import Button from './journey_button';

interface Data {
  title: string;
  Year: string;
  Description: string;
  Learnings:any;
  
}

const MyCircularProgressBar: React.FC<{ items: Data }> = ({ items }) => {
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementRect = elementRef.current.getBoundingClientRect();
        const scrollTop = elementRect.top;
        const elementHeight = elementRect.height;

        if (scrollTop < 595) {
          const progressPercentage = 100 - Math.abs(scrollTop / elementHeight) * 100;
          setProgress(progressPercentage);
        } else {
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
    <div ref={elementRef} className='h-64 relative'>
      <CircularProgress
        value={progress}
        size='30px'
        color='green'
        thickness='15px'
        className='absolute -left-3 top-1'
      />
      <span className='font-semibold tracking-wide'>{items.title}</span>
      <div className='h-full w-full border-l-4 text-justify border-[#8FBC8B] pl-5 flex flex-col gap-6'>
        <p className='font-thin'>{items.Year}</p>
        <p className='text-[14px] tracking-wider'>{items.Description}</p>
        <div className='flex gap-7'>
        {items.Learnings.map((learning:string, learningIndex:number) => (
              <Button key={learningIndex} title={learning}/>
        ))}
          </div>
      </div>
      
    </div>
  );
};

export default MyCircularProgressBar;
