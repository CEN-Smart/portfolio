"use client";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { footer } from "@/lib/footer";
import { social } from "@/lib/social";
import { Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <Center className=" text-md border-t-2 border-gray-800 bg-black/95 py-10 text-slate-100 pb-28 px-8">
      {/* @ts-ignore */}
      <Stack data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-center text-slate-400">
        <Heading as="h3" size="xl" className="font-bold text-slate-400">
          {footer.name}
        </Heading>
        <Text className=" italic">{footer.work}</Text>
        <Flex justifyContent="center" flexWrap='wrap' py={8} gap={5}>
          {social &&
            social.socialLink.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className="group grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-blue-600 transition-all duration-300 hover:bg-blue-500"
                >
                  <item.icon className=" text-2xl text-slate-50 transition-all duration-300 group-hover:scale-150" />
                </Link>
              );
            })}
        </Flex>
        <Text className="text-sm">
          {footer.copy} {new Date().getFullYear()}{" "}
          <strong>{footer.name}. </strong>
          {footer.right}
        </Text>
      </Stack>
    </Center>
  );
}
