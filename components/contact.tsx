"use client"; // we use this because of framer-motion
import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { AiOutlineSend } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
//-------------------------------------imports---------------------------------------------------

export default function Contact() {
    const { ref } = useSectionInView("Contact");

  return (
    <motion.section
     ref={ref}
     id="contact"
     className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
     initial={{
        opacity: 0,
     }}
     whileInView={{
        opacity: 1,
     }}
     transition={{
        duration: 1,
     }}
     viewport={{
        once: true, // this makes animation only once. if we remove this animation will be everytime section is in the view
     }}
     >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6">You can contact me at <a className="underline decoration-sky-300 hover:decoration-emerald-400 decoration-2" href="mailto:rene.pungartnik98@gmail.com">rene.pungartnik98@gmail.com</a> or trough this form!</p>

        <form className="mt-10 flex flex-col">
            <input className="h-14 px-4 rounded-lg borderBlack" type="email" required maxLength={500} placeholder="Enter your email" />

            <textarea className="h-52 my-3 rounded-lg borderBlack p-4" required maxLength={500} placeholder="Enter message here" />

            <button 
            className="group bg-sky-500 hover:bg-sky-700 text-white rounded-full h-[3rem] w-[8rem] outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105"
             type="submit" 
             >
                Send <AiOutlineSend className="opacity-90 transition-all group-hover:translate-x-1" />
            </button>
        </form>
    </motion.section>
  )
}
