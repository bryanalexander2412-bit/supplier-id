"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Suppliers", href: "/suppliers" },
];

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-token bg-white">
      <div className="container-page flex h-[88px] items-center gap-6">
        <Link href="/" className="text-[26px] font-bold text-navy">
          Supplier.id
        </Link>

        <form onSubmit={handleSearch} className="relative hidden flex-1 md:block">
          <span className="pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2">
            <Image src="/assets/search.svg" alt="" width={22} height={22} aria-hidden />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, categories, or suppliers..."
            aria-label="Search"
            className="h-[48px] w-full rounded-[8px] border border-border-token bg-field-bg pl-[51px] pr-[60px] text-[14px] text-navy placeholder:text-muted focus:border-green focus:outline-none"
          />
          <kbd className="absolute right-[11px] top-1/2 hidden -translate-y-1/2 rounded-[4px] bg-white px-[8px] py-[4px] text-[11px] text-muted lg:block">
            ⌘ K
          </kbd>
        </form>

        {/* Desktop nav links + profile */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-[14px] font-medium text-navy hover:text-green">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="ml-auto md:ml-0"
        >
          <Image src="/assets/menu.svg" alt="" width={22} height={22} aria-hidden />
        </button>

        <div className="flex size-[44px] items-center justify-center rounded-full bg-field-bg">
          <Image src="/assets/profile.svg" alt="Account" width={22} height={22} />
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-border-token bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            <form onSubmit={handleSearch} className="relative mb-2">
              <span className="pointer-events-none absolute left-[15px] top-1/2 -translate-y-1/2">
                <Image src="/assets/search.svg" alt="" width={20} height={20} aria-hidden />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
                className="h-[44px] w-full rounded-[8px] border border-border-token bg-field-bg pl-[46px] pr-4 text-[14px] text-navy placeholder:text-muted focus:border-green focus:outline-none"
              />
            </form>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-[15px] font-medium text-navy hover:bg-field-bg">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
