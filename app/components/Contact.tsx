"use client"
import { FacebookIcon, WhatsappIcon, YoutubeIcon } from "./Icons"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { Sora, Inter } from "next/font/google"
import { Span } from "next/dist/trace"

const sor = Sora({
    subsets: ['latin'],
    weight: "variable"
})

const int = Inter({
    subsets: ['latin'],
    weight: "variable"
})



export default function Contact() {


    const [isSending, setIsSending] = useState(false)
    const [textButton, setTextButton] = useState("Send Message");
    const [popUp, setPopUp] = useState("")



    async function handleSubmit(event: any) {

        event.preventDefault();
        setTextButton("Sending...")
        setIsSending(true)

        const myFormData = new FormData(event.target)
        myFormData.set("access_key", "8f3ac12b-b413-48a3-bc56-6ed015e4f6a8")


        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: myFormData
            })

            const data = await res.json()
            // console.log(data)



            if (data.success) {
                setTextButton("Send Message")
                setIsSending(false);
                setPopUp("Submitted Successfully!")
                event.target.reset()

            } else {
                setIsSending(false)
                setPopUp("error")
                setTextButton("Send Message")


            }

        }

        catch {
            setTextButton("Send Message")
            setIsSending(false)
            setPopUp("error")
        }
    }




    return (


        <section id="contact" className="bg-white overflow-x-hidden py-25 px-8 md:px-20 w-full max-w-full mx-auto text-black">

            <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}>


                <div className={`${int.className}`}></div>

                <div className={`${int.className}`}>

                    <h1 className=" pl-2 text-xl border-b-2 border-lime-400 inline-block font-bold">
                        Contact Me
                    </h1>

                    <h2 className="ext-xm pt-4">Have a project in mind? Let's talk.</h2>
                    <div className="pt-10">


                        <form
                            method="POST"
                            className=" flex flex-col gap-2"
                            onSubmit={handleSubmit}>

                            <   label className="font-bold" htmlFor="name">Name</label>
                            <input type="text"
                                name="name"
                                placeholder="Enter Your Full Name*"
                                className="mb-4  px-3 py-2 bg-white text-black max-w-lg outline-none 
                             focus:border-lime-400 border-3  rounded-lg"
                                required />

                            <label className="font-bold" htmlFor="email">Email</label>
                            <input type="email"
                                name="name"
                                placeholder="Your@example.com"
                                className=" px-3 py-2 bg-white text-black max-w-lg
                                outline-none 
                             focus:border-lime-400 border-3 bg-white rounded-lg mb-4 "
                                required />

                            <label className="font-bold" htmlFor="message">Message</label>
                            <textarea name="message" id=""
                                placeholder="Tell me how i can be of service to YOU 😊"
                                className="max-w-lg outline-none focus:border-lime-400 border-3
                                rounded-lg bg-white text-black px-3 h-30 resize-none"
                                required ></textarea>

                            <input type="hidden" name="access_key" value="8f3ac12b-b413-48a3-bc56-6ed015e4f6a8" />

                            <button className={`${isSending ? " bg-lime-200" : " bg-gradient-to-r from-lime-400 to-emerald-600"} max-w-lg flex items-center justify-center gap-2  text-black font-bold py-3  mt-5 px-10 rounded-lg`}
                                type="submit">
                                {textButton}
                                {isSending && (<span className="w-4 h-4 border-2 border-blue border-t-white rounded-full animate-spin" ></span>)}
                            </button>

                        </form>



                        {popUp === "Submitted Successfully!" && <p className="text-green-600 text-lg pt-3 font-bold"> Submitted Successfully!</p>}
                        {popUp === "error" && <p className="pl-2 text-red-400 text-lg pt-1">error, please check your internet connection</p>}



                    </div>

                    <p className="mt-10 flex justify-center md:justify-start md:pl-20">or send a message using the links below</p>
                    <h1 className="flex gap-5 justify-center md:justify-start  md:pl-50 items-center pt-5 ">
                        <a className="  hover:border-black border-2 border-white rounded-full" href="https://www.facebook.com/share/1CwZq7LJG7"> <FacebookIcon className="" /></a>
                        <a href="https://wa.me/2347085892518"
                            className=" hover:border-black overflow-hidden border-white rounded-full border-2  "><WhatsappIcon /> </a>
                        <a className=" hover:border-black border-2 border-white rounded-full" href="https://youtube.com/@confidencenneka9755?si=EWzioD6FFJ5mboRH"><YoutubeIcon /></a>
                    </h1>

                </div>

            </motion.div>
        </section>
    )
}

