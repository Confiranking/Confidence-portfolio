"use client"
import Link from "next/link"
import Image from "next/image"
import MyImage from "@/assets/image.png"
import { FacebookIcon } from "./Icons"
import { WhatsappIcon } from "./Icons"
import { YoutubeIcon } from "./Icons"
import { useState, useEffect } from "react"



import { Sora, Inter } from "next/font/google"

const sor = Sora({
    subsets: ['latin'],
    weight: "variable"
})

const int = Inter({
    subsets: ['latin'],
    weight: "variable"
})



const roles = ["FRONTEND DEVELOPER",
    "WEB DEVELOPER"
];


export default function Hero() {


    // const [index, setIndex] = useState(0);
    // const [text, setText] = useState("")
    // const [isDeleting, setIsdeleting] = useState(false)







    // useEffect(()=>{
    // // setIndex(0)

    // const speed = isDeleting? 50: 100;
    // const current = roles[index];
    // let prev = 0;

    // const timer = setTimeout(()=>{
    // if( !isDeleting) {
    // setText(current.slice(0, -1))

    // if(text.length + 1 === current.length+1){
    // setTimeout(()=>{  setIsdeleting(true)});
    // } 

    // else{
    // setText(current.slice(0, text.length-1))}

    // if(text.length===1){
    //     setIsdeleting(false)
    //     setIndex( (prev)=> (prev+1) % roles.length)
    // }




    // }

    // }, 300)

    // // return clearTimeout(timer)
    // })




    return (
        <  div id="hero" className="bg-[#1C1C24]  w-full max-w-full mx-auto text-white">
            <div className={`${int.className}`}>

                <div className="mt-25 px-8  md:flex md:justify-between md:gap-10">

                    {/* **************************WRITE UPS**************** */}
                    <div className="  md:pt-8 flex flex-col gap-3">

                        <p className=" text-2xl text-lime-400 md:text-4xl">FRONTEND DEVELOPER</p>
                        <h4>Welcome, to my portfolio website 😊</h4>
                        <h2 className=" md:text-2xl ">I build fast, clean and responsive web
                            experiences using React, Next.Js,  Tailwindcss.</h2>
                        <h2 className=" md:text-lg ">As a frontend developer, i help brands and startups create
                            websites that are fast, impossible to ignore and accessible.
                        </h2>
                        <h2 className=" md:text-2xl "></h2>

                        <p className="text-lg">Click on the social links to send a DM</p>

                        {/* ****************************SOCIAL ICONS*********************** */}
                        <h1 className="flex gap-4  pl-4 items-center ">
                            <a className="  hover:border-green-400  border-2 border-white rounded-full" href="https://www.facebook.com/share/1CwZq7LJG7"> <FacebookIcon className="" /></a>
                            <a href="https://wa.me/2347085892518"
                                className=" hover:border-green-400 overflow-hidden border-white rounded-full border-2  "><WhatsappIcon /> </a>
                            <a className=" hover:border-green-400 border-2 border-white rounded-full" href="https://youtube.com/@confidencenneka9755?si=EWzioD6FFJ5mboRH"><YoutubeIcon /></a>
                        </h1>

                        {/* *********************BUTTONS****************************************** */}
                        <div className="flex gap-3 mt-5  md:mt-8 ">

                            <a href="/Confidence_tech_Cv.pdf"
                                download="Ndubuike-Confidence-Nneka-Cv.pdf" className=" hover:border-white border-2 border-lime-400 px-3 py-2 rounded-xl text-lime-400 font-bold"> Download Cv </a>
                            <button className=" hover:border-white border-lime-900 border-4 bg-lime-300 px-6 py-2 rounded-lg text-black font-bold"> <Link href="#contact">Hire Me</Link> </button>
                        </div>


                    </div>

                    {/* ******************************SPIN IMAGE******************* */}
                    <Image src={MyImage} alt="spin"

                        className="  mt-10 w-auto h-75  md:w-auto md:h-90  rounded-full border
    border-t-4 border-b-4 border-lime-400"/>



                </div>

                {/****************************** PROJECTS*/}
                <div className="px-8 mt-18  md:mt-10 pb-8 " >
                    <blockquote className="text-sm font-light text-lime-100 pb-5 pl-2">SELECTED PROJECTS</blockquote>

                    <article className="flex flex-col gap-10 md:flex-row md:gap-10">


                        <aside className=" border border-solid-2 border-lime-200 px-4 py-6 rounded-lg flex flex-col gap-3">
                            <p>01 . Nova Dashboard</p>

                            <p className="text-lime-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg></p>

                            <h2 className={`${sor.className} `}>Dashboard</h2>
                            <h3 className="text-sm">Analytics dashbord for Saas</h3>

                            <p>Real-time analytics dashboard for Saas teams.
                                Track KPIs, growth metrics, and performance with interactive charts and responsie layouts. Designed for clean date visualization and dark-mode UX.</p>

                            <div className="grid grid-cols-2 md:w-sm gap-4">
                                <button className="w-fit text-lime-200  ">Next.JS</button>
                                <button className="w-fit text-lime-200  ">TypeScipt</button>
                                <button className="w-fit text-lime-200  ">TailwindCss</button>
                                <button className="w-fit text-lime-200  ">Recharts</button>
                            </div>
                        </aside>

                        <aside className="border border-solid-2 border-lime-200 px-4 py-6 rounded-lg flex flex-col gap-3">

                            <p>02 . Orbit SEO</p>

                            <p className="text-lime-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                  </svg>
                                   </p>

                            <h2 className={`${sor.className} `}>Orbit</h2>
                            <h3 className="text-sm">SEO tool landing page</h3>

                            <p>Marketing landing page for an SEO analysis tool.
                                Focused on conversion, animated UI sections, responsive design, and performance-first frontend.</p>

                            <div className="grid grid-cols-2 md:w-sm gap-4">
                                <button className="w-fit text-lime-200 ">Next.JS</button>
                                <button className="w-fit text-lime-200 ">Framer Motion</button>
                                <button className="w-fit text-lime-200 ">TailwindCss</button>
                                <button className="w-fit text-lime-200 ">React</button>
                            </div>
                        </aside>


                        <aside className="border border-solid-2 border-lime-200 px-4 py-6 rounded-lg flex flex-col gap-3">

                            <p>03 . E-commerce platform</p>

                            <p className="text-lime-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                                     </svg>
                                     </p>

                            <h2 className={`${sor.className} `}>Personal project</h2>
                            <h3 className="text-sm">Clone-drag & drop</h3>

                            <p>Built a full-featured e-commerce site using Next.Js, tailwindCss for secure payments. 
                                Focused on responsive design for mobile first experirnce</p>

                            <div className="grid grid-cols-2 md:w-sm gap-4">
                                <button className="w-fit text-lime-200 ">Next.JS</button>
                                <button className="w-fit text-lime-200 ">TypeScipt</button>
                                <button className="w-fit text-lime-200 ">TailwindCss</button>
                                <button className="w-fit text-lime-200 ">Recharts</button>
                            </div>

                        </aside>







                    </article>
                </div>

            </div>
        </div>
    )
}