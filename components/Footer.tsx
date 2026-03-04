'use client';

import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaTwitter, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Jinja Safaris</h3>
            <p className="text-gray-300 mb-4">Hub of the Nile Tourism</p>
            <p className="text-sm text-gray-400">Trusted since 2014</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/activities" className="text-gray-300 hover:text-accent">Activities</Link></li>
              <li><Link href="/hotels" className="text-gray-300 hover:text-accent">Hotels</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-accent">Gallery</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-accent">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                <span className="text-sm">Rubaga Hill, Jinja City</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-accent" />
                <span className="text-sm">+256 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-accent" />
                <span className="text-sm">info@jinjasafaris.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://wa.me/256123456789" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/jinjasafaris" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/jinjasafaris" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition">
                <FaTwitter />
              </a>
              <a href="https://tiktok.com/@jinjasafaris" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Jinja Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
