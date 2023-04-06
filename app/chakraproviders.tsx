'use client';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '480px',
  md: '640px',
  lg: '768px',
  xl: '1024px',
  '2xl': '1280px',
  '3xl': '1356px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      
      <body >
       <ChakraProvider theme={theme}>
        {children}
       </ChakraProvider>
      </body>
    </html>
  );
}
