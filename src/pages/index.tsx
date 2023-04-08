import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Eventbrite</title>
        <meta name="description" content="Eventbrite is an online platform that simplifies event management by providing tools for ticketing, registration, promotion, and analytics for events of all sizes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='bg-gray-800'>
        <img className='inline w-full' src="/homepage_modal.jpg" alt="homepage modal" />
        <section className='text-white w-full'>Here</section>
      </main>
      <Footer />
    </>
  )
}
