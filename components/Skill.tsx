"use client";
import { skills } from "@/lib/skill";
import { Box, Flex, SimpleGrid, Progress } from "@chakra-ui/react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useRef } from "react";
export default function SkillSet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100">
      <motion.div style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} className=" mx-auto w-[90%] lg:w-[70%]">
        <p className="relative mx-auto w-36 border-b py-4 text-center text-4xl font-[700] text-emerald-300">
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
              <Box key={i} alignItems="center" ref={ref}>
                <Flex className=" justify-between" color="#9DE4C4">
                  <item.icon className="text-2xl" />
                  <p className="">{item.name}</p>
                </Flex>
                <Progress className=" w-full" as={motion.div} isAnimated hasStripe min={0} max={100} value={isInView ? item.level:0} />
              </Box>
            );
          })}
        </SimpleGrid>
      </motion.div>
    </main>
  );
}
