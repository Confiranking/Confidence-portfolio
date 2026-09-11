"use client"
import Link from "next/link"
import { FacebookIconFooter, WhatsappIconFooter, YoutubeIconFooter } from "./Icons"

import { Sora, Inter } from "next/font/google"
const date = Date


const sor = Sora({
    subsets: ['latin'],
    weight: "variable"
})

const int = Inter({
    subsets: ['latin'],
    weight: "variable"
})


export default function Footer() {

    return (
        <div className="pb-5">
            <section className="px-4 bg-[#0F0F14] border-t-2  mx-auto max-w-full w-full md:px-15 py-10 text-white">
                <div className={`flex flex-col gap-10 md:flex-row md:gap-5  md:justify-between `}>


                    <div className="pl-2 md:self-center  border-b-1 md:border-none">
                        <p className="text-2xl font-bold pb-4">Confidence Nneka </p>
                        <p >Frontend Developer. Building clean, responsive web</p>
                        <p>Based in Abia State. Available for full time roles</p>
                    </div>


                    <div className=" self-center text-center   ">
                        <p className="text-Xm ">QUICK LINKS</p>
                        <div className="flex flex-col gap-4 pt-6 text-lg ">
                            <Link href="#hero">Home</Link>
                            <Link href="#about">About</Link>
                            <Link href="#services">Services</Link>
                            <Link href="#contact">Contact</Link>
                        </div>
                    </div>



                    <div className="text-center border-t-1 pt-5 md:border-none">

                        <p className="">CONNECT</p>
                        <div className="flex md:flex-row gap-10 md:gap-4 pt-6 justify-center">
                            <a href="https://www.facebook.com/share/1CwZq7LJG7"><FacebookIconFooter /></a>
                            <a href="https://wa.me/2347085892518"><WhatsappIconFooter /></a>

                            <a href="https://youtube.com/@confidencenneka9755?si=EWzioD6FFJ5mboRH"> <YoutubeIconFooter /></a>
                        </div>

                    </div>


                </div>


            </section>
            <div className="px-4 w-full max-w-full bg-whte text-black flex flex-col justify-center  items-center pt-8 ">
                <p> &copy; {new Date().getFullYear()} Confidence Nneka. All rights reserved.</p>
                
                <a href="tel:+2348144931736">Call me: +234 814 493 1736</a>
            <a href="mailto:nnekanneka477@gmail.com"> Email me: nnekanneka477@gmail.com</a>
            </div>
        </div>
    )
}