"use client";
import { skills } from "@/lib/skill";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
// @ts-ignore
import ProgressBar from "react-animated-progress-bar";

export default function SkillSet() {
  return (
    <main className=" text-md bg-black/95 py-20 text-slate-100 grid place-items-center">
      <div className=" mx-auto w-[90%] lg:w-[70%]">
        <p className="relative mx-auto w-36 border-b py-4 text-center text-4xl font-[700] text-emerald-300">
          {skills.skill}
          <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
        </p>
        <p className="mt-4 mb-8 pb-4 lg:text-center">{skills.detail}</p>
        {/* @ts-ignore */}
        <SimpleGrid minChildWidth="250px" spacing={1}>
          {skills.names.map((item, i) => {
            return (
              <Box key={i} alignItems="center">
                <Flex className=" -mb-4" color='#9DE4C4'>
                  <item.icon className="text-2xl" />
                  <p className="ml-2">{item.name}</p>
                </Flex>
                <ProgressBar
                  width="100%"
                  height="10px"
                  rect
                  fontColor="#9DE4C4"
                  percentage={item.level}
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  trackBorderColor="grey"
                  defColor={{
                    fair: 'orangered',
                    good: 'yellow',
                    excellent: '#2563EB',
                    poor: 'red',
                  }}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </div>
    </main>
  );
}
