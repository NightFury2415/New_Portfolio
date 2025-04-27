"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500"
        >
          Dev Modi
        </Link>
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group hover:text-cyan-400 transition duration-300 ${
                pathname === link.href ? "text-cyan-400" : "text-white"
              }`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
