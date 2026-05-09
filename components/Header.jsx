"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex h-[76px] items-center justify-between border-b px-5 transition md:px-8 ${
        scrolled
          ? "border-white/15 bg-ink/85 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-blacktop/75 to-blacktop/0"
      }`}
    >
      <Link className="inline-flex items-center gap-3 whitespace-nowrap text-base font-bold" href="/">
        <span className="brand-symbol" aria-hidden="true" />
        <span>
          Chromosome <strong className="text-gold">Designs</strong>
        </span>
      </Link>

      <button
        className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 md:hidden"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Open navigation</span>
        <span className="grid gap-1.5">
          <span className="block h-0.5 w-5 bg-bone" />
          <span className="block h-0.5 w-5 bg-bone" />
        </span>
      </button>

      <nav
        id="site-nav"
        className={`fixed inset-x-0 top-[76px] grid border-b border-white/15 bg-ink/95 px-5 py-4 font-bold text-bone-soft transition md:static md:flex md:translate-y-0 md:items-center md:gap-10 md:border-0 md:bg-transparent md:p-0 ${
          open ? "translate-y-0" : "-translate-y-[125%] md:translate-y-0"
        }`}
      >
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              className={`relative border-b border-white/15 py-4 transition hover:text-bone md:border-0 md:py-3 ${
                active ? "text-bone" : ""
              }`}
              href={item.href}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
              <span
                className={`absolute bottom-2 left-0 h-0.5 bg-gold transition-all md:bottom-1 ${
                  active ? "w-full" : "w-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
