"use client"

import { useEffect, useState } from "react"
import { SlArrowUpCircle } from "react-icons/sl";
import { FcCollapse } from "react-icons/fc";
//-------------------------imports--------------------------------------------------------
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-5 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FcCollapse size={28} className="border border-sky-500 rounded-full p-1" />
    </button>
  )
}

export default ScrollToTopButton