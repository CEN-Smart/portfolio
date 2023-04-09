"use client";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
const styles = {
  paddingLeft: "2px",
  paddingRight: "2px",
};
type PageProps={
  children: React.ReactNode
}
// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "480px",
  md: "640px",
  lg: "768px",
  xl: "1024px",
  "2xl": "1280px",
  "3xl": "1356px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });
export default function Providers({ children }: PageProps) {
  return (
    <html>
      <body>
        {/* @ts-ignore */}
        <ChakraProvider theme={theme} className={styles}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
