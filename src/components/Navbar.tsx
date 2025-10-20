'use client';

import { usePathname } from 'next/navigation';
import { useLoading } from './LoadingContext';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const sections = [
  { id: '/about', name: 'About' },
  { id: '/experience', name: 'Experience' },
  { id: '/projects', name: 'Projects' },
  { id: '/contact', name: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, setIsLoading]);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#151417] shadow-md p-4 flex items-center justify-between z-50">
      <Link href="/" onClick={handleClick} className="flex items-center w-64 cursor-pointer">
        <Image src="/t-icon.png" alt="T Logo" width={40} height={40} className="mr-4" />
      </Link>
      <div className="flex-grow flex justify-center">
        <div className="flex space-x-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.id}
              onClick={handleClick}
              className={`nav-link text-lg font-medium px-3 py-2 rounded-md uppercase ${pathname === section.id ? 'active' : ''}`}
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-64 flex justify-end"></div>
    </nav>
  );
}
