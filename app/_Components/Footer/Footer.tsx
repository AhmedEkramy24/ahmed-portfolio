import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-black/90 text-gray-300 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-[#5227FF]/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left side - Logo and text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Ahmed<span className="text-[#5227FF]">Dev</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Front-end Developer passionate about crafting elegant web
              experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://github.com/AhmedEkramy24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#5227FF] transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-ekramy-12816b25a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#5227FF] transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ekramya969@gmail.com"
              className="text-gray-400 hover:text-[#5227FF] transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700/50"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#5227FF] font-medium">Ahmed Ekramy</span>. All
          Rights Reserved.
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#5227FF]/30 blur-3xl opacity-50"></div>
    </footer>
  );
}
