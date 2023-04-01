/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { facts } from '@/lib/fact';
import { Box, SimpleGrid } from '@chakra-ui/react';
import {   motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

export default function Fact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <main className=' bg-black/95 text-slate-100 text-md py-20' ref={ref}>
      <motion.div className=' w-[90%] lg:w-[70%] mx-auto'  style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
       <p className='mx-auto text-center text-4xl font-[700] py-4 border-b w-36 relative text-emerald-300'>
          {facts.fact}
          <span className=' absolute -bottom-[0.14rem] left-[35%] w-12 bg-blue-600 h-[0.2rem]'></span>
        </p>
        <p className='mt-4 mb-8 lg:text-center pb-4'>{facts.work}</p>
        {/* @ts-ignore */}
    <SimpleGrid minChildWidth='250px' spacingX={5} spacingY={20}>
          {facts.detail.map((item,i)=>{
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const count = useMotionValue(0);
            const rounded = useTransform(count, Math.round);
          
            useEffect(() => {
              const animation = animate(count, item.value, { duration: 10 });
          
              return animation.stop;
            }, [count]);
            return(
              <Box key={i} className=' bg-gray-800 shadow-md p-4 pt-10 grid place-items-center gap-2 shadow-slate-400 relative' >
                <div className='absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full  bg-blue-600'>
                <item.icon className='text-2xl'/>
                </div>
                <motion.p className='text-4xl font-bold text-slate-500 drop-shadow-lg shadow-slate-300'>
                  {rounded}</motion.p>
                <p>{item.target}</p>
              </Box>
            )
          })}
        </SimpleGrid>
    </motion.div>
    </main>
  );
}
