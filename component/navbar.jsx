import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",fontSize:"20px",textDecoration:"none"}}>
       <Link href="/">Vivek Soni</Link>
       <Link href="/project">Projects</Link>
       <Link href="/education">Education</Link>
    </div>
  )
}

export default Navbar