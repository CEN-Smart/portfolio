"use client";
// Image imports
import website1 from "../public/portfolio/site--1.png";
import comp1 from "../public/portfolio/comp--1.png";
import comp2 from "../public/portfolio/comp--2.png";
import comp3 from "../public/portfolio/comp--3.png";
import comp4 from "../public/portfolio/comp--4.png";
import land1 from "../public/portfolio/land--1.png";
import land2 from "../public/portfolio/land--2.png";
const portfolioImg = [website1, comp1, comp2, comp3, comp4, land1, land2];
import { portfolio} from "@/lib/portfolio";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Box
      className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100"
      ref={ref}
    >
      <Box
        as={motion.div}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className=" mx-auto w-[90%] lg:w-[70%]"
      >
        <p className="relative mx-auto w-56 border-b py-4 text-center text-4xl font-[700] text-emerald-300">
          {portfolio.portfolio}
          <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
        </p>
        <p className="mt-4 pb-4 text-justify lg:mx-auto">
          {portfolio.description}
        </p>
        {/* @ts-ignore */}
      <Tabs isFitted variant="enclosed" className="mt-10">
        <TabList className=" flex justify-center flex-wrap">
          <Tab fontSize={{
            base: "10px",
            md: "sm",
            lg: "md",
            
          }}>
           ALL
          </Tab>
          <Tab fontSize={{
            base: "10px",
            md: "sm",
            lg: "md",
            
          }}>COMPONENTS</Tab>
          <Tab fontSize={{
            base: "10px",
            md: "sm",
            lg: "md",
            
          }}>LANDING PAGES</Tab>
          <Tab fontSize={{
            base: "10px",
            md: "sm",
            lg: "md",
            
          }}>WEBSITES</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <SimpleGrid minChildWidth='300px' spacing={10}>
              {portfolioImg.map((img,i)=>{return (
                <Box key={i} className="relative">
                  <Image src={img} alt="portfolio" fill />
                </Box>
              )})}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
     
    </Box>
  );
}
