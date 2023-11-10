"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaComment, FaGithub } from 'react-icons/fa';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import { BsLinkedin } from 'react-icons/bs';
//---------------------------------------------------imports------------------------------------------------------------


// intro text and buttons
export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              >
                <Image 
                src="https://images.unsplash.com/photo-1699116550661-bea051952f96?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="RP" 
                width="192" 
                height="192" 
                quality="95" 
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" 
                /> {/*image at the start*/}
                </motion.div>
            </div>
        </div>

        <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I'm Rene.</span> I'm An{" "}
        <span className="font-bold">Aspiring Full-Stack Developer & Programmer</span> With{" "}
        <span className="font-bold">1 Year</span> Of Experience. I Enjoy
        Building <span className="italic">Websites & Apps</span>. My Focus Is{" "}
        <span className="underline">Mern Stack</span>.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, }}>
          <Link href="#contact" className="bg-sky-500 hover:bg-sky-700 text-white px-7 py-3 flex items-center gap-2 rounded-full">
            Message Me <FaComment /> 
          </Link>

          <a className="bg-white hover:bg-sky-200 hover:text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full border border-black" href="/CV.pdf" download>
            Download CV <HiOutlineArrowDownTray /> 
          </a>

          <a className="bg-white hover:bg-sky-200 hover:text-blue-700 text-blue-600 p-4 flex items-center gap-2 rounded-full border border-black" href="https://www.linkedin.com/in/rene-pungartnik-b247b5293/" target="_blank">
            <BsLinkedin />
          </a>

          <a className="bg-white hover:bg-sky-200 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.35rem] border border-black" href="https://github.com/RenePung" target="_blank">
            <FaGithub />
          </a>
        </motion.div>
    </section>
  )
}
