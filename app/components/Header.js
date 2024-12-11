'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)



  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
           MZ
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link></li>
            <li><Link href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link></li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}
