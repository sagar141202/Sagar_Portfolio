"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CustomCursor from "../components/CustomCursor"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Tech from "../components/Tech"
import Contact from "../components/Contact"
import Navigation from "../components/Navigation"
import Skills from "../components/Skills"
import "../styles/globals.css"

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Improved smooth scroll setup using ScrollTrigger's scrollerProxy for better performance
    if (mainRef.current) {
      let scrollPos = 0;
      gsap.to({}, {
        duration: 0.1,
        repeat: -1,
        onRepeat: () => {
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollPos !== currentScroll) {
            scrollPos = currentScroll;
            ScrollTrigger.update();
          }
        }
      });
    }

    // Page load animation
    gsap.fromTo(".page-loader", { opacity: 1 }, { opacity: 0, duration: 1, delay: 2, display: "none" })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="portfolio-container" ref={mainRef}>
      <div className="page-loader">
        <div className="loader-content">
          <div className="loader-text">SAGAR MADDI</div>
          <div className="loader-bar"></div>
        </div>
      </div>

      <CustomCursor />
      <Navigation />

      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Tech />
        <Contact />
      </main>

      <div className="background-elements">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  )
}
