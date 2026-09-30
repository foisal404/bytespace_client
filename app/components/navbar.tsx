"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ICON } from "../utils/imports";
import { BagIcon } from "../utils/svgs/BagIcon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check current position immediately
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
          isScrolled ? "bg-[#003BE2]/95" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full container items-center justify-between p-5 sm:p-6 lg:p-14">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <div className="flex items-end gap-2">
              <Image
                src={ICON}
                alt="ByteSpace Logo"
                width={30}
                height={30}
                priority
              />

              <p className="font-clash text-[24px] font-bold leading-none text-primary">
                ByteSpace
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] transition-colors ${
                    active
                      ? "font-bold text-primary"
                      : "font-medium text-primary/70 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/signin"
              className={`text-[15px] transition-colors ${
                isActive("/signin")
                  ? "font-bold text-primary"
                  : "font-medium text-primary/70 hover:text-primary"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/join"
              className={`text-[15px] transition-colors ${
                isActive("/join")
                  ? "font-bold text-primary"
                  : "font-medium text-primary/70 hover:text-primary"
              }`}
            >
              Join Us
            </Link>

            <Link
              href="/marketplace"
              aria-label="Marketplace"
              className={`transition-opacity hover:opacity-70 ${
                isActive("/marketplace") ? "opacity-100" : "opacity-70"
              }`}
            >
              <BagIcon width={24} height={24} className="text-primary" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-primary/20 text-primary md:hidden"
          >
            <Menu size={21} />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[88%] max-w-sm flex-col bg-[#003BE2] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 px-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <div className="flex items-end gap-2">
              <Image src={ICON} alt="ByteSpace Logo" width={30} height={30} />

              <p className="font-clash text-[22px] font-bold leading-none text-primary">
                ByteSpace
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center text-primary/70 transition-colors hover:text-primary"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
          {/* Navigation */}
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between py-4 transition-colors ${
                    active
                      ? "border-primary/20 font-bold text-primary"
                      : "border-gray-100 font-medium text-primary/70"
                  }`}
                >
                  <span>{link.name}</span>

                  <ChevronRight
                    size={18}
                    className={`transition-transform ${
                      active
                        ? "text-primary"
                        : "text-gray-400 group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className={`flex h-11 items-center justify-center border text-sm transition-colors ${
                isActive("/signin")
                  ? "border-primary bg-primary/5 font-bold text-primary"
                  : "border-gray-200 font-medium text-primary hover:border-primary/30"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className={`flex h-11 items-center justify-center text-sm transition-opacity hover:opacity-90 ${
                isActive("/join")
                  ? "bg-primary font-bold text-white"
                  : "bg-black font-medium text-white"
              }`}
            >
              Join Us
            </Link>

            <Link
              href="/marketplace"
              onClick={() => setIsOpen(false)}
              className={`flex h-11 items-center justify-center border gap-2 text-sm transition-colors ${
                isActive("/marketplace")
                  ? "border-primary bg-primary/5 font-bold text-primary"
                  : "border-gray-200 font-medium text-primary hover:border-primary/30"
              }`}
            >
              <BagIcon width={18} height={18} className="text-current" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
