'use client';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      
      <body >
       <ChakraProvider>
        {children}
       </ChakraProvider>
      </body>
    </html>
  );
}
