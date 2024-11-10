import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <main>
    <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-6">

<Image
      className=""
      src="/hero-image.png"
      alt="Hero image"
      width={700}
      height={700}
    />
    <div className="flex flex-col items-center md:items-start space-y-4 max-w-lg">
      <h1 className="font-extrabold text-4xl md:text-6xl text-black">
        Turning vision into reality with code and design.
      </h1>
      <p className="text-gray-700 text-lg">
        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
      </p>
      <button className='text-black underline font-bold'>
        <Link href={'/contact'}>Contact</Link></button>
      <button className='text-black underline font-bold'>
        <Link href={'/cv'}>CV</Link></button>
    <Image src='/bulbs.png' alt='bulb' width={250} height={250} className='ml-60 mt-64 '/>
    </div>
  </div>
  <div className='flex gap-4'>
  <button className='rounded-full bg-black text-white font-semibold ml-10 py-10 px-10 animate-pulse '>HireMe</button>
  </div>
  </main>
  )
}

export default Hero