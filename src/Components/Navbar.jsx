import React from 'react'
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      
      <div className="flex flex-shrink-0 items-center">
        <h1 className='text-white mx-2 font-bold text-3xl'>Kr</h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a href="https://github.com/krishnayadavv1647" target="_blank" rel="noopener noreferrer">
          <Github className='cursor-pointer hover:text-gray-400 transition'/>
        </a>

        <a href="https://www.instagram.com/krishna_.1_/?hl=en" target="_blank" rel="noopener noreferrer">
          <Instagram className='cursor-pointer hover:text-pink-400 transition'/>
        </a>

        <a href="https://www.linkedin.com/in/krishna-yadav-920819400/" target="_blank" rel="noopener noreferrer">
          <Linkedin className='cursor-pointer hover:text-blue-400 transition'/>
        </a>

        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Twitter className='cursor-pointer hover:text-sky-400 transition'/>
        </a>

      </div>
     
    </nav>
  )
}

export default Navbar