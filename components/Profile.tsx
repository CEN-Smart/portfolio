"use client";
import { social } from "@/lib/social";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
export default function Profile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="grid h-screen place-items-center p-8" ref={ref}>
      <div className="text-center lg:text-left">
        <motion.h1
          
          className="mb-3 text-4xl font-bold text-slate-400 lg:text-6xl"
          style={{
            transform: isInView ? "none" : "translateY(-100vh)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {social && social.socialDetail}
        </motion.h1>
        <motion.p
          style={{
            transform: isInView ? "none" : "translateX(100vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <span>
            <span className=" text-2xl text-slate-300">
              {social && social.whoIAm}{" "}
            </span>
            <TypeAnimation
              style={{
                color: "#3B82F6",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
              sequence={[
                "Developer",
                1000,
                "Designer",
                1000,
                "Freelancer",
                1000,
                "Creator",
                1000,
              ]}
              repeat={Infinity}
            />
          </span>
        </motion.p>
        <motion.div
          className="mt-6 flex items-center justify-center gap-6 lg:justify-start"
          style={{
            transform: isInView ? "none" : "translateY(-100vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {social &&
            social.socialLink.map((item) => {
              return (
                <Link key={item.name} href={item.link} className="group">
                  <item.icon className=" text-2xl text-blue-500 transition-all duration-300 group-hover:scale-150" />
                </Link>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}
