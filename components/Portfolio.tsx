"use client";
import { portfolio} from "@/lib/portfolio";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

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
          <Tab>ALL</Tab>
          <Tab>COMPONENTS</Tab>
          <Tab>LANDING PAGES</Tab>
          <Tab>WEBSITES</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
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
