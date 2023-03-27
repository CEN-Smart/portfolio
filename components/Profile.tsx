'use client';
import { social } from '@/lib/social';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Profile() {
  return (
    <div className="grid h-screen place-items-center p-8">
      <div className='text-center lg:text-left'>
        <motion.h1 className="mb-3 text-4xl lg:text-6xl font-bold text-slate-400" initial={{
          opacity: 0,
          y: '-100vh',
        }} animate={{
          opacity: 1,
          y: 0,
        }} transition={{
          duration: 1,
        }}>
          {social && social.socialDetail}
        </motion.h1>
        <motion.p initial={{
          opacity: 0,
          x: '100vw',
        }} animate={{
          opacity: 1,
          x: 0,
        }} transition={{
          duration: 1.5,
        }}>
        <span>
          <span className=" text-2xl text-slate-300">
            {social && social.whoIAm}{' '}
          </span>
          <TypeAnimation
            style={{
              color: '#3B82F6',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
            sequence={[
              'Developer',
              1000,
              'Designer',
              1000,
              'Freelancer',
              1000,
              'Creator',
              1000,
            ]}
            repeat={Infinity}
          />
        </span>
        </motion.p>
        <motion.div className="mt-6 flex justify-center lg:justify-start items-center gap-6" initial={{
          opacity: 0,
          x: '-100vw',
        }} animate={{
          opacity: 1,
          x: 0,
        }} transition={{
          duration: 2,
        }}>
          {social &&
            social.socialLink.map((item) => {
              return (
                <Link key={item.name} href={item.link} className='group'>
                  <item.icon className=' text-blue-500 text-2xl transition-all duration-300 group-hover:scale-150' />
                </Link>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}
