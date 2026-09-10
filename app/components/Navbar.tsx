"use client"
import Image from "next/image"
import MYLogo from "@/assets/log.jpg"
import { useEffect, useState } from "react"
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sora, Inter } from "next/font/google";


const sor = Sora({
    subsets: ['latin'],
    weight: "variable"
})

const int = Inter({
    subsets: ['latin'],
    weight: "variable"
})

const links = [
    { label: 'Home', href: "#hero" },
    { label: 'About', href: "#about" },
    { label: 'Services', href: "#services" },
    { label: 'Contact', href: "#contact" }
];

export default function Navbar() {
    // const pathname = usePathname();
    const [isopen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState('#hero')


    // ***********************OBSERVER FOR PAGE SCROLL*******************************

    useEffect(() => {

        const pageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsActive(`#${entry.target.id}`)
                }
            })

        }, {
            rootMargin: "0px",
            threshold: 0.5
        }
        )


        links.forEach((link) => {
            const id = link.href.replace("#", "")
            const el = document.getElementById(id)
            if (el) pageObserver.observe(el)
        })

        return () => pageObserver.disconnect()


    }, [])



    return (
        <div className=" fixed top-0 left-0 w-full max-w-full mx-auto ">

            <nav className="flex justify-between bg-[#0F0F14] py-3 px-6 items-center ">

                <Image src={MYLogo} alt="spin-image" className="h-10 w-auto "
                    // width={150}
                    // height={100}
                     />

                <div className={`${sor.className} flex gap-6 items-center hidden md:flex`}>
                    {links.map((link) => {
                        // const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={(() => setIsActive(link.href))}
                                className={`text-black  p-1 px-2  ${isActive === link.href ?
                                    " text-lime-400 border-b-2 rounded-lg" : "text-white"}`}>
                                {link.label}</Link>
                        )
                    })}
                </div>


                <button className="md:hidden text-white" onClick={() => setIsOpen(!isopen)}>
                    {isopen ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    ) :
                        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0  1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                        )}
                </button>

            </nav>

            <div className={`${sor.className}`}>

                <div className={`${isopen ? "translate-x-0" : "translate-x-full"}
transition-transform duration-500 ease-in-out pt-20 
  fixed top-16 left-0 w-full h-screen bg-white/70  backdrop-blur-sm md:hidden`} >

                    <div className="flex flex-col gap-4 items-center ">
                        {links.map((link) => {
                            // const Active = pathname === link.href;
                            // onclick = (()=> setIsOpen(false))

                            return (
                                <Link

                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        setIsActive(link.href)
                                        setIsOpen(false)
                                    }}
                                    className={`text-black  p-1 px-2  ${isActive === link.href ?
                                        " text-lime-600 border-l-3 " : "text-black"}`}>
                                    {link.label}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>



        </div>
    )

}