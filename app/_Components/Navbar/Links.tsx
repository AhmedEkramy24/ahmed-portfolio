"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/projects", label: "projects" },
  {
    href: "/skills",
    label: "skills",
  },
  {
    href: "/contact",
    label: "contact",
  },
];

export default function Links() {
  const [openMenue, setopenMenue] = useState(false);
  const pathName = usePathname();

  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setopenMenue(false);
      }
    };

    if (openMenue) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenue]);

  return (
    <>
      {/* links large screens */}
      <ul className=" text-[17px] text-white  font-semibold lg:flex hidden items-center">
        {navLinks.map(({ href, label }, index) => (
          <li key={index} className="mx-3">
            <Link
              href={href}
              className={` hover:text-blue-300 transition-colors ${
                pathName === href ? "text-blue-300 font-semibold " : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      {/* links small screens */}

      <ul
        className={` text-sm lg:hidden text-white flex flex-col min-w-[300px] duration-500 fixed top-0  bottom-0  pt-10 z-50 text-start border-r bg-[rgba(0,0,0,.8)] border-gray-800 ${
          openMenue ? "right-0" : "-right-full"
        }`}
        ref={menuRef}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer text-red-500 text-xl"
          onClick={() => setopenMenue(false)}
        >
          <i className="fas fa-xmark"></i>
        </button>
        {navLinks.map(({ href, label }) => (
          <li key={href} className="p-3" onClick={() => setopenMenue(false)}>
            <Link
              href={href}
              className={` hover:text-blue-300 transition-colors ${
                pathName === href ? "text-blue-300 font-semibold" : ""
              }`}
              onClick={() => setopenMenue(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* bars icon to close and open menu in small screens */}
      <button
        className="lg:hidden text-white"
        onClick={() => setopenMenue(!openMenue)}
      >
        <i className="fas fa-bars"></i>
      </button>
    </>
  );
}
