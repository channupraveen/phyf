"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#shop", label: "Shop" },
  { href: "#engineering", label: "Design" },
  { href: "#faq", label: "Support" },
  { href: "#stories", label: "Community" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "border-black/10 bg-white/75 text-ink shadow-lg shadow-black/5" : "border-white/20 bg-white/10 text-white"
        }`}
      >
        <a href="#" aria-label="phyf home">
          <Logo className="text-2xl" />
        </a>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-80 transition hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#shop" aria-label="Cart" className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 7h12l-1 13H7L6 7Z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
          </a>
          <button
            type="button"
            className="md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="absolute top-20 w-[calc(100%-2rem)] max-w-3xl rounded-2xl bg-white/95 p-4 text-ink shadow-xl backdrop-blur md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium hover:bg-mist">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
