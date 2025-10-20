"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLoading } from "./LoadingContext";
import { useEffect } from "react";

const sections = [
  { id: "/", name: "Home" },
  { id: "/about", name: "About" },
  { id: "/experience", name: "Experience" },
  { id: "/projects", name: "Projects" },
  { id: "/contact", name: "Contact" },
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
    <nav className="fixed top-0 left-0 w-full bg-custom-dark/50 backdrop-blur-lg shadow-md p-4 flex items-center justify-between border-b-2 border-custom-purple">
      <div className="flex items-center w-64">
        <Image src="/data-logo.svg" alt="Data Logo" width={40} height={40} className="mr-4" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-custom-light"><span className="gradient-text">Artur</span> Guimarães</h1>
          <p className="text-md text-custom-light">Data Platform Engineer</p>
        </div>
      </div>
      <div className="flex-grow flex justify-center">
        <div className="flex space-x-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.id}
              onClick={handleClick}
              className={`nav-link text-lg font-medium px-3 py-2 rounded-md uppercase ${pathname === section.id ? "active" : ""}`}
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-64"></div> {/* Spacer to balance the flexbox */}
    </nav>
  );
}
