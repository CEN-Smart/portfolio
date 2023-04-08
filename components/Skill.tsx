"use client";
import { skills } from "@/lib/skill";
import { Box, Flex, SimpleGrid, Progress } from "@chakra-ui/react";
import { useEffect } from "react";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function SkillSet() {
  useEffect(() => {
    AOS.init({duration:1200});
  }, [])
  return (
    <main className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100">
      <div data-aos="zoom-in-up" className=" mx-auto w-[90%] lg:w-[70%]">
        <p className="relative mx-auto w-fit border-b py-4 text-center text-4xl font-[700] text-emerald-300">
          {skills.skill}
          <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
        </p>
        <p className="text-justify mt-4 pb-4 lg:mx-auto">{skills.detail}</p>
        {/* @ts-ignore */}
        <SimpleGrid minChildWidth={{
          base: "250px",
          md: "300px",
          lg: "500px",

        }} spacing={5}>
          {skills.names.map((item, i) => {
            return (
              <Box key={i} alignItems="center">
                <Flex className=" justify-between" color="#9DE4C4">
                  <item.icon className="text-2xl" />
                  <p className="">{item.name}</p>
                </Flex>
                <Progress className=" w-full" isAnimated hasStripe min={0} max={100} value={item.level} />
              </Box>
            );
          })}
        </SimpleGrid>
      </div>
    </main>
  );
}
