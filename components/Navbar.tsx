'use client';
import { menu } from '@/lib/menu';
import { usePathname } from 'next/navigation';
import {
  Hide,
  Icon, useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import clsx from 'clsx';
import Link from 'next/link';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef } from 'react';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const pathname = usePathname()
  return (
    <>
    {/* @ts-ignore */}
     <Icon ref={btnRef} onClick={onOpen} as={GiHamburgerMenu} className="fixed right-6 top-6 lg:hidden cursor-pointer text-blue-500 z-0 text-3xl font-bold"  />
   
   <Hide above='lg'>
     <Drawer size='xs' isOpen={isOpen}
        placement='left'
        onClose={onClose}
        // @ts-ignore
        finalFocusRef={btnRef} >
      <DrawerOverlay display={{
        lg: 'none',
      }} />
      {/* @ts-ignore */}
      <DrawerContent >
        <DrawerCloseButton color='blue.600' fontSize='md' />
        <DrawerBody display='flex' flexDir='column' justifyContent='center'>
        {menu &&
        menu.map((item, i) => {
          return (
            <Link key={i} href={item.link}
              className={clsx('lg:w-[3.4rem] lg:h-[3.4rem] lg:overflow-hidden bg-gray-300 w-full mt-2 flex lg:items-center  gap-2 rounded-full transition-all duration-300 px-5 py-4 lg:p-0 lg:hover:w-full hover:gap-1 hover:bg-blue-600 group ',{" !bg-blue-600":pathname===item.link})} 
            >
              <Icon
                className={clsx('lg:ml-[30%] text-xl transition-all duration-300 text-gray-500 lg:group-hover:ml-[13%] group-hover:text-slate-100',{' text-slate-50':pathname===item.link})}
                as={item.icon}
              />
              <p
                className={clsx('lg:opacity-0 group-hover:opacity-100 group-hover:text-slate-100 transition-all duration-300 lg:group-hover:pr-8', {'text-slate-50':pathname===item.link})}
              >
                {item.name}
              </p>
            </Link>
          );
        })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
   </Hide>
    </>
  );
}
