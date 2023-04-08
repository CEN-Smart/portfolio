'use client';
import profilePic from '/public/smart.png';
import { bio } from '@/lib/biography';
import {
  Box,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Image from "next/legacy/image";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Biography() {
  useEffect(() => {
    AOS.init({duration:1200});
  }, [])
  return (
    <main className=' bg-black/95 grid place-items-center'>
      <div data-aos="zoom-in-up" className=' text-md text-slate-200 p-1 max-w-[90%] lg:max-w-[70%] mt-12'>
        <p className='mx-auto text-center text-4xl font-[700] py-4 border-b w-fit relative text-emerald-300'>
          {bio.about}
          <span className=' absolute -bottom-[0.14rem] left-[35%] w-12 bg-blue-600 h-[0.2rem]'></span>
        </p>
        <div>
          <p className='text-justify mt-4 mb-8'>{bio.who}</p>
          <Box className="xl:flex gap-10 items-start space-y-8 text-justify">
            <Box flexShrink={0} className="relative h-80 w-80 ">
              <Image
                priority
                src={profilePic}
                alt="CEN Smart Profile Picture"
                layout='fill'
                className="rounded-full"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
               /> 
            </Box>
            <Box className="lg:flex-1 space-y-2">
              <p className='text-2xl text-blue-400 font-bold'>Web Developer.</p>
              <p>{bio.description}</p>
              <div className="flex items-start gap-8 flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <Box className="flex items-center flex-nowrap">
                    <bio.detail.icon className='bio-detail' />
                    <p className=' whitespace-nowrap'>
                      <strong>Birthday:</strong> {bio.detail.birth}
                    </p>
                  </Box>
                  <Box className="flex items-center">
                    <bio.detail.icon className='bio-detail' />
                    <p className=' whitespace-nowrap'>
                      <strong>Phone:</strong> {bio.detail.phone}
                    </p>
                  </Box>
                  <Box className="flex items-center">
                    <bio.detail.icon className='bio-detail' />
                    <p className=' whitespace-nowrap'>
                      <strong>City:</strong> {bio.detail.city}
                    </p>
                  </Box>
                </div>
                <div>
                  <Box className="flex items-center">
                    <bio.detail.icon className='bio-detail' />
                    <p className=' whitespace-nowrap'>
                      <strong>Level:</strong> {bio.detail.level}
                    </p>
                  </Box>
                  <Box className="flex flex-nowrap items-center">
                    <bio.detail.icon className='bio-detail' />
                    <p className=' whitespace-nowrap'>
                      <strong>Email:</strong> {bio.detail.email}
                    </p>
                  </Box>
                  <Box className="flex items-center">
                    <bio.detail.icon className='bio-detail' />
                    <p className=' whitespace-nowrap'>
                      <strong>Freelance:</strong> {bio.detail.freelance}
                    </p>
                  </Box>
                </div>
              </div>
              <p className=' text-justify pt-6'>{bio.skill}</p>
            </Box>
          </Box>
          
        </div>
      </div>
    </main>
  );
}
