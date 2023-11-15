import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { AiOutlineSend } from "react-icons/ai";
//-------------------------------------imports---------------------------------------------------

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700">You can contact at <a className="underline decoration-sky-300 hover:decoration-emerald-400 decoration-2" href="mailto:rene.pungartnik98@gmail.com">rene.pungartnik98@gmail.com</a> or trough this form!</p>

        <form className="mt-10 flex flex-col">
            <input className="h-14 rounded-lg borderBlack" type="email" />
            <textarea className="h-52 my-3 rounded-lg borderBlack p-4" />
            <button className="bg-sky-500 hover:bg-sky-700 text-white px-7 py-3 flex items-center gap-2 rounded-full h-[3rem] w-[8rem]" type="submit" >Send <AiOutlineSend /></button>
        </form>
    </section>
  )
}
