import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "CN_portfolio",
    template: '% | my-Assets'
  },

  description: "We build what's on your mind",
  openGraph: {
    title: "CN_portfolio",
    description: "I build what's on your mind",
    url: 'https://confidence-portfolio-amber.vercel.app/',
    siteName: 'my-Asssets',

    images: [
      {
        url: 'https://confidence-portfolio-amber.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_NG',
    type: 'website'
  },


  icons: {
    icon: '/portfolio-icon.ico'
  }



};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
