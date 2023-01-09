import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
       <Link href="/">Vivek Soni</Link>
       <Link href="/project">Project</Link>
       <Link href="/education">Education</Link>
    </div>
  )
}

export default Navbar