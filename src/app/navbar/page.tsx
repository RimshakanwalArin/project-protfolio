import Link from 'next/link'
import React from 'react'
import NavOpen from './navOpen'
import { FaGithub } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import Image from 'next/image';

// Navbar component
const Navbar = () => {
  return (
    <main>
      <Image src='/haameem-logo.jpeg' alt='logo' width={150} height={150} className='justify-center'/>
      <div className="flex justify-between items-center mt-12 px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-7">
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
          <Link href={'/project'}>Project</Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <NavOpen />

        {/* Social Media Icons */}
        <section className="flex space-x-3">
          <button aria-label="GitHub">
            <Link href={'https://github.com/RimshakanwalArin'}>
              <FaGithub />
            </Link>
          </button>
          <button aria-label="LinkedIn">
            <Link href='https://www.linkedin.com/in/arin-rimshakanwal-6b7a062b9'>
              <RiLinkedinFill />
            </Link>
          </button>
        </section>
      </div>
    </main>
  )
}

export default Navbar;
