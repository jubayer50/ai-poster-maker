"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 shadow-lg shadow-black/5 backdrop-blur-xl">
      <header className="mx-auto flex max-w-330 items-center justify-between px-3 md:px-6 py-3">
        {/* Left Side */}
        <div className="flex items-center">
          {/* Mobile Menu */}
          <Button
            className={"bg-transparent md:hidden"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>

          {/* Logo */}
          <div className="group cursor-pointer">
            <Link href="/">
              <h2 className="bg-linear-to-r from-emerald-400 via-green-300 to-red-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:from-green-300 group-hover:via-emerald-400 group-hover:to-red-300">
                AIposter
              </h2>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-1 py-2 shadow-inner shadow-white/5 md:flex">
          <li>
            <Link
              href="#"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              My poster
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-emerald-500/15 hover:text-emerald-300"
            >
              Create poster
            </Link>
          </li>
        </ul>

        {/* Login */}
        <div>
          {user ? (
            <div>
              <Button
                size="sm"
                className="border border-emerald-400/30 bg-linear-to-r from-emerald-500 to-green-500 px-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
                onClick={async () => await authClient.signOut()}
              >
                Signout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href={"/signup"}>
                <Button
                  size="sm"
                  className="border border-emerald-400/30 bg-linear-to-r from-emerald-500 to-green-500 px-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
                >
                  Signup
                </Button>
              </Link>

              <Link href={"/signin"}>
                <Button
                  size="sm"
                  className="border border-green-500 bg-transparent px-3 font-semibold text-white shadow transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
                >
                  Signin
                </Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link
                href="#"
                className="block rounded-lg px-4 py-3 font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                My poster
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block rounded-lg bg-emerald-500/10 px-4 py-3 font-medium text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20"
              >
                Create poster
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
