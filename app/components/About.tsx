"use client"
import { motion } from "framer-motion"

import { Sora, Inter } from "next/font/google"

const sor = Sora({
  subsets: ['latin'],
  weight: "variable"
})

const int = Inter({
  subsets: ['latin'],
  weight: "variable"
})


export default function About() {
  return (
    <section id="about" className="bg-[#1C1C24] overflow-x-hidden py-25 px-8 md:px-20 w-full max-w-full mx-auto text-white">

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}>

          
        <div className={`${int.className}`}>


          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-lime-400">
              <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" />
            </svg>
            <p className="  ml-2 text-xl md:text-4xl border-b-2 border-lime-400 text-center inline-block font-bold">About</p>


          </div>

          <blockquote className="flex gap-6 pt-5  pl-5">
            <span className="rounded-full p-3 border border-lime-400 border-solid-2">I'M</span>
            <p>Confidence Nneka <br />Frontend Developer.</p>
          </blockquote>

          <p className="text-2xl  pt-10">Experiences</p>

          <ol className="pt-10 flex flex-col gap-10 mb-8">
            <li className="flex gap-4 md:gap-8 ">
              <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-lime-400">
                <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
              </svg>
              </p>
              <figure className="flex flex-col  gap-2 ">
                <p className="md:text-xl">2025 - senior Fontend Developer</p>
                <p>Building performative UI sysytems and a scalable design sysytem.
                  Focused on accessibility, performance, and a core web development.
                </p>
              </figure>
            </li>




            <li className="flex gap-4 md:gap-8 ">
              <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-lime-400">
                <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
              </svg>
              </p>
              <figure className="flex flex-col  gap-2 ">
                <p className="md:text-xl">2024- Frontend Engineer</p>
                <p>Developed responsive web apps and dashboards. Improved lighthouse performance score
                  by 40%. Implemented responsible and accessible responsive sites/components.
                </p>
              </figure>
            </li>




            <li className="flex gap-4 md:gap-8 ">
              <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-lime-400">
                <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
              </svg>
              </p>
              <figure className="flex flex-col  gap-2 ">
                <p className="md:text-xl">2023 - Web Developer . Freelance</p>
                <p>Built e-commerce sites and landing pages for 15+ clients.
                  Focused on speed and modern UX.
                </p>
              </figure>
            </li>
          </ol>


          <div className=" flex flex-col gap-3 overflow-x-hidden pl-2 md:flex-row md:gap-5 md:items-center md:border md:border-lime-400 md:py-2 md:px-4 md:w-fit md:rounded-xl">

            <h3>React</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-lime-400">
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
            </svg>
            </p>
            <h3>Typescript</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-lime-400">
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
            </svg>
            </p>
            <h3>TailwindCss</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-lime-400">
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
            </svg>
            </p>
            <h3>Next.Js</h3>
          </div>
        </div>

      </motion.div>
    </section>
  )
}
