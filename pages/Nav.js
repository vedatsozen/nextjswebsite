import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div id="menu">
        <div id="code"><Link href="https://vedatsozen.netlify.app" target="_blank">Coded by Vedat Sözen</Link></div>
        <Link href="/">Home</Link>
        <Link href="Vision">Vision</Link>
        <Link href="Mision">Mision</Link>
        <Link href="References">References</Link>
        <Link href="Contact">Contact</Link>
        
       
    </div>
  )
}

export default Nav
