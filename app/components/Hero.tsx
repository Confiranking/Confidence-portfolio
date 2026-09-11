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

                            <a  href = "/Confidence_tech_Cv.pdf" 
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
                <div className="px-8 mt-14  md:mt-10 inline-block pb-8" >
                    <blockquote className="text-sm font-light text-lime-100 pb-5 pl-2">SELECTED PROJECTS</blockquote>

                    <article className="flex flex-col gap-4 md:flex-row
  md:gap-20">
                        <aside className=" border border-solid-2 border-lime-200 p-4 rounded-lg flex flex-col gap-3">
                            <p className="text-lime-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg></p>
                            <h2 className={`${sor.className} `}>Portfolio CMS</h2>
                            <h3 className="text-sm">Typescript . MDX . SSG . Content Layer</h3>


                        </aside>

                        <aside className="border border-solid-2 border-lime-200 p-4 rounded-lg flex flex-col gap-3">
                            <p className="text-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" />
                            </svg>
                            </p>
                            <h2 className={`${sor.className} `}>Ecommerce Dashboard</h2>
                            <h3 className="text-sm">React . Stripe . Tailwindcss</h3>


                        </aside>

                        <aside className="border border-solid-2 border-lime-200 p-4 rounded-lg flex flex-col gap-3">
                            <p className="text-lime-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                            </svg>
                            </p>
                            <h2 className={`${sor.className} `}>Taskflow App</h2>
                            <h3 className="text-sm">Next.Js . Prisma . Real-time</h3>


                        </aside>


                    </article>
                </div>
            </div>
        </div>
    )
}