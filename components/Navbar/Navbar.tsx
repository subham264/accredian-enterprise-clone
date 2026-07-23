"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Stats", href: "#stats" },
  { name: "Clients", href: "#clients" },
  { name: "Accredian Edge", href: "#edge" },
  { name: "CAT", href: "#cat" },
  { name: "How It Works", href: "#how" },
  { name: "FAQ", href: "#faq" },
  { name: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-blue-600">
            Accredian
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-blue-600">Accredian</h2>

            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-700 transition hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
