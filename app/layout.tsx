import './globals.css';
import Providers from './chakraproviders';

import { Metadata } from "next";
import { Inter } from 'next/font/google'
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata:Metadata={
  title: 'Home',
  icons:{
    icon:{
      url:'/favicon.jpeg', type:'image/x-icon'
    },
    shortcut:{
      url:'/favicon.jpeg', type:'image/x-icon'
    }
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=' overflow-x-hidden'>
      
      <body className={`${inter.variable} font-sans antialiased overflow-hidden`}>
       <Providers>
        {children}
       </Providers>
      </body>
    </html>
  );
}
