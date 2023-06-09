'use client';
import { menu } from '@/lib/menu';
import { usePathname, useRouter} from 'next/navigation';
import {
  Icon,
} from '@chakra-ui/react';
import clsx from 'clsx';
import Link from 'next/link';

export default function Desktop() {
  const pathname = usePathname()
  const router = useRouter()
  
  return (
    <nav className="lg:fixed top-1/2 lg:-translate-y-1/2 lg:left-3 transition-all duration-300 lg:visible lg:flex lg:flex-col hidden">
      {menu &&
        menu.map((item, i) => {
          function navigate(){
            router.replace(`#${item.link}`)
          }
          return (
            <Link onClick={navigate} replace  key={i} href={item.link}
              className={clsx('w-[3.4rem] h-[3.4rem] overflow-hidden bg-slate-50 mt-2 flex items-center gap-2 rounded-full transition-all duration-300  hover:w-full hover:gap-1 hover:bg-blue-600 group',{" !bg-blue-600":pathname===item.link})} 
            >
              <Icon color={pathname===item.link?'#fff':'gray.500'} 
                className={clsx('ml-[30%] text-xl transition-all duration-300 group-hover:ml-[13%] group-hover:text-slate-100',{' text-slate-50':pathname===item.link})}
                as={item.icon}
              />
              <p
                className="opacity-0 group-hover:opacity-100 group-hover:text-slate-100 transition-all duration-300 group-hover:pr-8"
              >
                {item.name}
              </p>
            </Link>
          );
        })}
    </nav>
  );
}