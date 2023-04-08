"use client";
import siteOne from "@/../public/site--1.png";
import compOne from "@/../public/comp--1.png";
import compTwo from "@/../public/comp--2.png";
import compThree from "@/../public/comp--3.png";
import compFour from "@/../public/comp--4.png";
import landOne from "@/../public/land--1.png";
import landTwo from "@/../public/land--2.png";
const projects = [
  {
    name: "Website 1",
    link: "https://portfolio-git-master-cen-smart.vercel.app/",
    path: siteOne,
  },
  {
    name: "Component 1",
    link: "https://reusable-form-neon.vercel.app/",
    path: compOne,
  },
  {
    name: "Component 2",
    link: "https://smart-parctice-of-grid-and-flex-with-responsiveness-yr6v.vercel.app/",
    path: compTwo,
  },
  {
    name: "Component 3",
    link: "https://static-todo-list.vercel.app/",
    path: compThree,
  },
  {
    name: "Component 4",
    link: "https://capstone-project-1.vercel.app/",
    path: compFour,
  },
  {
    name: "LandingPage 1",
    link: "https://vidapp-omega.vercel.app/",
    path: landOne,
  },
  {
    name: "LandingPage 2",
    link: "https://btc-site-cen-smart.vercel.app/",
    path: landTwo,
  },
];
import { portfolio } from "@/lib/portfolio";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";

import { useEffect } from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <Box className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100">
      <Box data-aos="zoom-in-up" className=" mx-auto w-[90%] lg:w-[70%]">
        <p className="relative mx-auto w-fit border-b py-4 text-center text-4xl font-[700] text-emerald-300">
          {portfolio.portfolio}
          <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
        </p>
        <p className="mt-4 pb-4 text-justify lg:mx-auto">
          {portfolio.description}
        </p>
        {/* @ts-ignore */}
        <Tabs variant="unstyled" className="mt-10">
          <TabList
            data-aos="zoom-in-up"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color="#000"
            fontWeight="600"
            bgColor="#fff"
            w="fit-content"
            className="mx-auto rounded-full"
          >
            <Tab
              _selected={{ color: "blue.500" }}
              _hover={{ color: "blue.500" }}
            >
              ALL
            </Tab>
            <Tab
              _selected={{ color: "blue.500" }}
              _hover={{ color: "blue.500" }}
            >
              COMPONENTS
            </Tab>
            <Tab
              _selected={{ color: "blue.500" }}
              _hover={{ color: "blue.500" }}
            >
              LANDING PAGES
            </Tab>
            <Tab
              _selected={{ color: "blue.500" }}
              _hover={{ color: "blue.500" }}
            >
              WEBSITES
            </Tab>
          </TabList>
          <TabPanels>
            {/* 1st Tab Panel */}
            <TabPanel>
              <SimpleGrid
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                spacing={5}
              >
                {projects.map((path, i) => {
                  return (
                    <Link
                      data-aos="zoom-in-up"
                      className="group relative  overflow-hidden rounded"
                      href={path.link}
                      isExternal
                      key={i}
                      width="100%"
                      height={{ base: "300px", md: "350px", lg: "300px" }}
                      position="relative"
                    >
                      <Text className=" invisible absolute top-0 left-0 z-10   grid h-full w-full place-items-center bg-black/50 text-center text-xl font-bold text-slate-100 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100">
                        {path.name}
                      </Text>
                      <span className="border-hover top-5 left-4 border-r-0 border-b-0 border-t-[3px] border-l-[3px]"></span>
                      <span className="border-hover bottom-5 right-4 border-l-0 border-t-0 border-r-[3px] border-b-[3px] "></span>
                      <ExternalLinkIcon
                        color="blue.800"
                        mx="4px"
                        className=" absolute right-1 top-1 z-20"
                      />
                      <Image
                        src={path.path}
                        className="absolute"
                        alt="Portfolio Image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  );
                })}
              </SimpleGrid>
            </TabPanel>
            {/* 2nd Tab Panel */}
            <TabPanel>
              <SimpleGrid
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                spacing={5}
              >
                {projects.slice(1, 5).map((path, i) => {
                  return (
                    <Link
                      data-aos="zoom-in-up"
                      className="group relative  overflow-hidden rounded"
                      href={path.link}
                      isExternal
                      key={i}
                      width="100%"
                      height={{ base: "300px", md: "350px", lg: "300px" }}
                      position="relative"
                    >
                      <Text className=" invisible absolute top-0 left-0 z-10   grid h-full w-full place-items-center bg-black/50 text-center text-xl font-bold text-slate-100 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100">
                        {path.name}
                      </Text>
                      <span className="border-hover top-5 left-4 border-r-0 border-b-0 border-t-[3px] border-l-[3px]"></span>
                      <span className="border-hover bottom-5 right-4 border-l-0 border-t-0 border-r-[3px] border-b-[3px] "></span>
                      <ExternalLinkIcon
                        color="blue.800"
                        mx="4px"
                        className=" absolute right-1 top-1 z-20"
                      />
                      <Image
                        src={path.path}
                        className="absolute"
                        alt="Portfolio Image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  );
                })}
              </SimpleGrid>
            </TabPanel>
            {/* 3rd Tab Panel */}
            <TabPanel>
              <SimpleGrid
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                spacing={5}
              >
                {projects.slice(-2).map((path, i) => {
                  return (
                    <Link
                      data-aos="zoom-in-up"
                      className="group relative  overflow-hidden rounded"
                      href={path.link}
                      isExternal
                      key={i}
                      width="100%"
                      height={{ base: "300px", md: "350px", lg: "300px" }}
                      position="relative"
                    >
                      <Text className=" invisible absolute top-0 left-0 z-10   grid h-full w-full place-items-center bg-black/50 text-center text-xl font-bold text-slate-100 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100">
                        {path.name}
                      </Text>
                      <span className="border-hover top-5 left-4 border-r-0 border-b-0 border-t-[3px] border-l-[3px]"></span>
                      <span className="border-hover bottom-5 right-4 border-l-0 border-t-0 border-r-[3px] border-b-[3px] "></span>
                      <ExternalLinkIcon
                        color="blue.800"
                        mx="4px"
                        className=" absolute right-1 top-1 z-20"
                      />
                      <Image
                        src={path.path}
                        className="absolute"
                        alt="Portfolio Image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  );
                })}
              </SimpleGrid>
            </TabPanel>
            {/* 4th Tab Panel */}
            <TabPanel>
              <SimpleGrid
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                spacing={5}
              >
                {projects.slice(0, 1).map((path, i) => {
                  return (
                    <Link
                      data-aos="zoom-in-up"
                      className="group relative  overflow-hidden rounded"
                      href={path.link}
                      isExternal
                      key={i}
                      width="100%"
                      height={{ base: "300px", md: "350px", lg: "300px" }}
                      position="relative"
                    >
                      <Text className=" invisible absolute top-0 left-0 z-10   grid h-full w-full place-items-center bg-black/50 text-center text-xl font-bold text-slate-100 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100">
                        {path.name}
                      </Text>
                      <span className="border-hover top-5 left-4 border-r-0 border-b-0 border-t-[3px] border-l-[3px]"></span>
                      <span className="border-hover bottom-5 right-4 border-l-0 border-t-0 border-r-[3px] border-b-[3px] "></span>
                      <ExternalLinkIcon
                        color="blue.800"
                        mx="4px"
                        className=" absolute right-1 top-1 z-20"
                      />
                      <Image
                        src={path.path}
                        className="absolute"
                        alt="Portfolio Image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  );
                })}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
