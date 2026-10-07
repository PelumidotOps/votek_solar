import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Savings calculator', path: '/calculator' },
  ];

  return (
    <header className="w-full bg-white border-b border-[#EAEAEA] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-[80px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-[#76B521] rounded-sm flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-[#68a01c] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-bold text-[20px] tracking-tight text-[#121212]">
            VOTEK
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors hover:text-[#76B521] ${
                  isActive ? 'text-[#76B521] font-semibold' : 'text-[#434242]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/calculator"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white bg-[#76B521] hover:bg-[#68a01c] text-[14px] font-medium transition-all shadow-sm hover:shadow"
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-[#76B521]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAEAEA] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-[15px] font-medium transition-colors ${
                  isActive ? 'text-[#76B521] font-semibold' : 'text-[#434242]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white bg-[#76B521] hover:bg-[#68a01c] text-[14px] font-medium transition-all"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
