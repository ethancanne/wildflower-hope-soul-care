'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Margin } from './margin.layout';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const navbarLinks = [
  { name: 'About', href: '/about' },
  { name: "Hope's Garden", href: '/hopes-garden' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    return () => {
      setMobileOpen(false);
    };
  }, [pathname]);

  return (
    <Margin
      outerClassName={`fixed w-full z-50 tr duration-300 backdrop-blur-md transition-colors ${
        isTopVisible ? '' : mobileOpen ? 'bg-white' : 'bg-white/70'
      }`}
      innerClassName="flex items-center justify-between"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Wildflower Hope Logo"
          width={150}
          height={200}
          className="object-contain"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex ">
        {navbarLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`mx-4 relative text-xs uppercase tracking-widest transition flex items-center justify-center ${
                isActive
                  ? isTopVisible
                    ? 'text-green font-bold'
                    : 'text-green font-bold before:absolute before:-bottom-11 before:left-0 before:w-full before:h-0.5 before:bg-green'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Toggle */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((v) => !v)}
        className="md:hidden flex flex-col gap-1 cursor-pointer"
      >
        {mobileOpen ? <GrClose size={20} /> : <GiHamburgerMenu size={20} />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-full left-0 w-full bg-white back border-b-0.5 border-gray-200  md:hidden transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center py-6">
          {navbarLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3 text-sm uppercase tracking-widest ${
                  isActive
                    ? 'text-green font-bold'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </Margin>
  );
};
