"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-330 px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <Link href={"/"}>
              <h2 className="bg-linear-to-r from-emerald-400 via-green-300 to-red-400 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                AIposter
              </h2>
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
              Create professional posters easily with AI-powered design
              suggestions and beautiful ready-made templates.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-emerald-400"
            >
              My poster
            </Link>

            <Link
              href="#"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-emerald-400"
            >
              Create poster
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              aria-label="Github"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <FaGithub />
            </Link>

            <Link
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AIposter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
