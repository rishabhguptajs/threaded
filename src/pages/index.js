import Image from "next/image"
import { Inter } from "next/font/google"
import Head from "next/head"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-[#0a0a12] flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <Head>
        <title>Threaded</title>
      </Head>
      <Header />
    </main>
  )
}
