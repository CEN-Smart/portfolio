'use client';
import { resume } from "@/lib/resume";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main className=" text-md grid place-items-center bg-black/95 py-10 text-slate-100" ref={ref}>
    <motion.div style={{
        transform: isInView ? "none" : "translateX(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }} className=" mx-auto w-[90%] lg:w-[70%]">
      <p className="relative mx-auto w-44 border-b py-4 text-center text-4xl font-[700] text-emerald-300">
        {resume.name}
        <span className=" absolute -bottom-[0.14rem] left-[35%] h-[0.2rem] w-12 bg-blue-600"></span>
      </p>
      <p className="mt-4 pb-4 lg:mx-auto">{resume.detail}</p>
     
    </motion.div>
  </main>
  );
}
