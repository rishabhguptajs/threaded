import Image from "next/image"
import { Inter } from "next/font/google"
import Head from "next/head"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedCircle from "./components/AnimatedCircle"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
      <main
        className={`flex h-[100vh] w-[100vw] overflow-x-hidden   bg-[#0a0a12] flex-col items-center justify-between p-4 ${inter.className}`}
      >
        <Head>
        <title>Threaded</title>
      </Head>
      <Header />
      <AnimatedCircle />
      <Footer />
      </main>
  )
}
