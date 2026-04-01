import React from 'react'
import {Linkedin} from 'lucide-react'
import {Github} from 'lucide-react'
import {Instagram} from 'lucide-react'
import {Twitter} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className="flex `flex-shrink-0` items-center">
        <h1 className='text-white mx-2 font-bold text-3xl'>Kr</h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <Github />
      <Instagram />
      <Linkedin />
      <Twitter />
    </div>
     
    </nav>
  )
}

export default Navbar
