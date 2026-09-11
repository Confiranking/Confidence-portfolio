"use client"
import { motion } from "framer-motion"
import { PerformanceIcon, UiuxIcon, WebIcon } from "./Icons"

import { Sora, Inter } from "next/font/google"

const sor = Sora({
  subsets: ['latin'],
  weight: "variable"
})

const int = Inter({
  subsets: ['latin'],
  weight: "variable"
})


export default function Services() {
  return (
    <section id="services" className="p-5 w-full max-w-full mx-auto md:pt-20 px-8 bg-[#1C1C24] px-8 md:px-20 text-white">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}>




        <div className={`${int.className}`}>



          <h1 className=" pt-5 ml-2 text-xl md:text-4xl border-b-2 border-lime-400 text-center inline-block font-bold">Services</h1>


          <p className="text-2xl  pt-10">Experiences</p>

          <ol className="pt-10 flex flex-col gap-10 mb-8">
            <li className="flex gap-4 md:gap-8 ">
              <p className=""> <WebIcon />
              </p>
              <figure className="flex flex-col  gap-2 ">
                <p className="md:text-2xl">Web Development</p>
                <p>custom responsive websites and apps built with React, Next.Js and Typescript.
                </p>
              </figure>
            </li>




            <li className="flex gap-4 md:gap-8 ">
              <p> <UiuxIcon />
              </p>
              <figure className="flex flex-col  gap-2 ">
                <p className="md:text-2xl">UI/UX Implementation</p>
                <p>pixel-perfect interfaces from design to code, focused on accessibility and usability.
                </p>
              </figure>
            </li>




            <li className="flex gap-4 md:gap-8 ">
              <p> <PerformanceIcon />
              </p>
              <figure className="flex flex-col  gap-2 ">
                <p className="md:text-xl">Performance Optimization</p>
                <p>speed audits, SEO, and Optimization to boost Core web vitals & conversions.
                </p>
              </figure>
            </li>
          </ol>


          <div className=" flex flex-col gap-3 overflow-x-hidden  pl-2 md:flex-row md:gap-5 md:items-center  md:py-2 md:px-4 md:w-fit ">


            <h3>Frames</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a8ea36" className="size-6">
              <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
            </svg>

            </p>
            <h3>Component Libraries</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a8ea36" className="size-6">
              <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
            </svg>

            </p>
            <h3>Api Integration</h3>
          </div>
        </div>





      </motion.div>

    </section>

  )
}