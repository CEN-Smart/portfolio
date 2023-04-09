"use client";
import { Text, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "@/lib/service";
export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <main className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100">
      <div data-aos="zoom-in-up" className=" mx-auto w-[90%] lg:w-[70%]">
        <p className="relative mx-auto w-fit border-b py-4 text-center text-4xl font-[700] text-emerald-300">
          {services.service}
          <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
        </p>
        <p className="mt-4 pb-4 text-justify lg:mx-auto">{services.detail}</p>
        {/* @ts-ignore */}
        <SimpleGrid
          mt={8}
          justifyItems='center'
          spacing={8}
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        >
          {services.list.map((item, i) => {
            return (
              <Box
                data-aos="zoom-in-up"
                key={i}
                w={["200px", "200px", "200px", "200px"]}
                bgColor="#fff"
                className="group flex flex-col justify-start items-center space-y-1 p-4 text-center shadow-lg rounded"
              >
                <Box className=" relative w-14 h-14 grid place-items-center">
                  <item.icon className=" text-3xl group-hover:text-white transition-all duration-500 text-blue-400 z-10" />
                  <svg className="absolute h-full w-full scale-[2] inset-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="transition-all duration-500 group-hover:fill-blue-400 fill-[#F8F9FA]"
                      d="M24.5,-46.8C29.2,-35.1,28.6,-24,35,-14.6C41.4,-5.3,54.8,2.3,59.9,12.9C65.1,23.6,62.1,37.4,52.7,42.5C43.4,47.7,27.7,44.3,13.3,51.2C-1,58,-14.1,75.2,-19.5,71.4C-25,67.6,-22.8,42.8,-30,29C-37.1,15.3,-53.5,12.7,-59.7,5.3C-66,-2.2,-62.1,-14.4,-53.1,-20.1C-44,-25.8,-29.8,-25,-20.1,-34.3C-10.3,-43.6,-5.2,-63,2.4,-66.7C9.9,-70.4,19.8,-58.4,24.5,-46.8Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </Box>
                <Box py={4}>
                  <Heading color="gray.500" as="h3" size="md">
                    {item.type}
                  </Heading>
                  <Text className=" mt-5 text-gray-800">
                    {item.description}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </div>
    </main>
  );
}
