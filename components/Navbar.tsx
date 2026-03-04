'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-dark shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Jinja Safaris Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">Jinja Safaris</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary">Home</Link>
            <Link href="/activities" className="text-gray-700 dark:text-gray-300 hover:text-primary">Activities</Link>
            <Link href="/hotels" className="text-gray-700 dark:text-gray-300 hover:text-primary">Hotels</Link>
            <Link href="/gallery" className="text-gray-700 dark:text-gray-300 hover:text-primary">Gallery</Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-primary">Blog</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary">Contact</Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/booking" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition">
              Book Now
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link>
            <Link href="/activities" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Activities</Link>
            <Link href="/hotels" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Hotels</Link>
            <Link href="/gallery" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Gallery</Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Blog</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Contact</Link>
            <Link href="/booking" className="block px-3 py-2 bg-primary text-white rounded-lg text-center">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
