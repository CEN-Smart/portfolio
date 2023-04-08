"use client";
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
export const ID = "contact";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { contacts } from "@/lib/contact";
export default function Contact() {
  const toast = useToast();
  function onToast() {
    toast({
      title: "Message sent.",
      description: "We'll get back to you soon.",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "top-accent",
      icon: "👍",
      containerStyle: {
        bgColor: "blue.900",
        color: "#777",
        borderRadius: "xl",
        boxShadow: "xl",
      },
    });
  }
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <main id={ID}  className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100">
      <div data-aos="zoom-in-up" className=" mx-auto w-[90%] lg:w-[70%]">
        <p className="relative mx-auto w-fit border-b py-4 text-center text-4xl font-[700] text-emerald-300">
          {contacts.contact}
          <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
        </p>
        {/* @ts-ignore */}
        <Flex
          className=" mt-14 pb-10"
          flexDir={{
            base: "column",
            xl: "row",
          }}
          gap={7}
          alignItems={{
            base: " stretch",
            md: "stretch",
            lg: "stretch",
            xl: "baseline",
          }}
        >
          <Stack data-aos="zoom-in-up"
            spacing={7}
            className="bg-gray-800 p-4 shadow-md shadow-slate-400"
          >
            {contacts.contactdetails.map((item, i) => {
              return (
                <Flex key={i} alignItems="flex-start" gap={4} className="group">
                  <Box className=" flex-shrink-0 grid h-10 w-10 place-items-center rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-blue-600">
                    <item.icon className="text-lg text-blue-600  transition-all duration-300 group-hover:text-slate-50" />
                  </Box>
                  <Text className=" whitespace-normal">
                    <strong className=" text-xl">{item.detail} </strong> <br />
                    {item.description}
                  </Text>
                </Flex>
              );
            })}
          </Stack>
          <Stack data-aos="zoom-in-up"
            flexGrow="1"
            className=" bg-gray-800 p-4 shadow-md shadow-slate-400"
          >
            <form>
              <Stack spacing={6}>
                <Flex
                  gap={3}
                  flexDir={{
                    base: "column",
                    md: "row",
                    xl: "column",
                    "2xl": "row",
                  }}
                >
                  <FormControl isRequired>
                    <Input
                      variant="filled"
                      type="text"
                      placeholder={contacts.name}
                    />
                    <FormHelperText>{contacts.text1}</FormHelperText>
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      variant="filled"
                      type="email"
                      placeholder={contacts.email}
                    />
                    <FormHelperText>{contacts.text2}</FormHelperText>
                  </FormControl>
                </Flex>
                <FormControl isRequired>
                  <Input
                    variant="filled"
                    type="text"
                    placeholder={contacts.subject}
                  />
                </FormControl>
                <FormControl isRequired>
                  <Textarea
                  rows={6}
                    p={4}
                    variant="filled"
                    placeholder={contacts.message}
                  />
                </FormControl>
                <FormControl className="grid place-items-center">
                  <button
                    onClick={onToast}
                    className="h-12 w-40 rounded-full bg-blue-600 font-normal text-slate-50 transition-all duration-300 hover:bg-blue-700"
                    type="submit"
                  >
                    {contacts.button}
                  </button>
                </FormControl>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </div>
    </main>
  );
}
