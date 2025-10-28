"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Links() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();
  const menuRef = useRef<HTMLUListElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    if (openMenu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  return (
    <>
      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center text-[17px] font-semibold">
        {navLinks.map(({ href, label }) => (
          <li key={href} className="mx-3">
            <Link
              href={href}
              className={`transition-colors duration-300 ${
                pathName === href
                  ? "text-[#5227FF]"
                  : "text-white hover:text-[#5227FF]/80"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.ul
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 z-50 flex flex-col bg-black/95 text-white w-64 p-8 border-l border-[#5227FF]/30 shadow-[0_0_20px_#5227FF30]"
          >
            <button
              className="absolute top-5 right-5 text-2xl hover:text-[#5227FF] transition-colors"
              onClick={() => setOpenMenu(false)}
            >
              <FaTimes />
            </button>

            {navLinks.map(({ href, label }) => (
              <li key={href} className="my-3 text-lg">
                <Link
                  href={href}
                  onClick={() => setOpenMenu(false)}
                  className={`block transition-all duration-300 ${
                    pathName === href
                      ? "text-[#5227FF] font-semibold"
                      : "text-gray-300 hover:text-[#5227FF]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <div className="mt-auto pt-6 text-sm text-gray-500 border-t border-gray-800">
              © {new Date().getFullYear()} AhmedDev
            </div>
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Menu Toggle Button (Mobile) */}
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <FaBars className="hover:text-[#5227FF] transition-colors" />
      </button>
    </>
  );
}
