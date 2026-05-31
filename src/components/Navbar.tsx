"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";

const businesses = [
  { name: "Happyboy Collection", desc: "Curated fashion & luxury goods", href: "/collection" },
  { name: "HappyBoy Farms", desc: "Premium livestock & agriculture", href: "/farms" },
  { name: "Happyboy Homes", desc: "Premium real estate development", href: "/homes" },
  { name: "Nick Phones", desc: "Latest mobile technologies", href: "/nick-phones" },
  { name: "HappyBoy Automobile", desc: "Luxury & commercial vehicles", href: "/automobile" },
  { name: "HB Oil and Gas", desc: "Robust energy solutions", href: "/oil-and-gas" },
  { name: "HB Mining", desc: "Responsible mineral extraction", href: "/mining" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBusinessesOpen, setIsMobileBusinessesOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const isBusinessPage = ['/collection', '/farms', '/homes', '/nick-phones', '/automobile', '/oil-and-gas', '/mining'].includes(pathname);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileBusinessesOpen(false);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!isMobileMenuOpen) {
        return;
      }

      const target = event.target as Node | null;
      if (target && navRef.current && !navRef.current.contains(target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navRef} className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] max-w-6xl z-[200] isolate rounded-2xl md:rounded-full border border-gray-200 bg-white/80 md:bg-white/60 backdrop-blur-lg shadow-sm pointer-events-auto">
      <div className="px-4 sm:px-6 py-3 md:py-3">
        <div className="flex items-center gap-3 min-h-10 md:grid md:min-h-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 min-w-0 md:justify-self-start">
            <div className="w-8 h-8 flex items-center justify-center rounded-md text-foreground">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <Link href="/" className="text-sm sm:text-lg font-bold tracking-widest uppercase truncate">
              HAPPYBOY
            </Link>
          </div>

          {/* Centered Links */}
          <div className="hidden md:flex md:justify-self-center items-center space-x-2">
            <Link href="/" className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${pathname === '/' ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:text-black hover:bg-white/50'}`}>
              Home
            </Link>

            <Link href="/about" className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${pathname === '/about' ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:text-black hover:bg-white/50'}`}>
              About
            </Link>

            {/* Businesses Dropdown Wrapper */}
            <div className="relative group">
              <Link href="/#portfolio" className={`flex items-center text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${isBusinessPage ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:text-black hover:bg-white/50'}`}>
                Businesses
                <svg className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                {/* Invisible hover bridge */}
                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <h4 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-6 ml-2">Our Businesses</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {businesses.map((b) => (
                      <Link key={b.name} href={b.href} className="group/item flex flex-col items-start p-2 -m-2 rounded-xl hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-semibold text-gray-900 group-hover/item:text-[#2A3B5C] transition-colors">{b.name}</span>
                        <span className="text-xs text-gray-500 mt-1">{b.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${pathname === '/contact' ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:text-black hover:bg-white/50'}`}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex md:justify-self-end items-center" />

          <button
            type="button"
            className="md:hidden relative z-50 ml-auto inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-none border-0 bg-transparent text-gray-800 shadow-none transition active:scale-95 touch-manipulation"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={(event) => {
              event.stopPropagation();
              setIsMobileMenuOpen((open) => !open);
            }}
          >
            {isMobileMenuOpen ? <XIcon className="h-5 w-5 pointer-events-none" strokeWidth={2.25} /> : <MenuIcon className="h-5 w-5 pointer-events-none" strokeWidth={2.25} />}
          </button>
        </div>

        <div
          id="mobile-nav-menu"
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden relative z-[230] mt-3`}
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl shadow-black/10 backdrop-blur-lg">
            <div className="grid gap-2">
              <Link href="/" onClick={closeMobileMenu} className={`rounded-xl px-4 py-3 text-sm font-medium ${pathname === '/' ? 'bg-gray-100 text-black' : 'text-gray-700'}`}>
                Home
              </Link>
              <Link href="/about" onClick={closeMobileMenu} className={`rounded-xl px-4 py-3 text-sm font-medium ${pathname === '/about' ? 'bg-gray-100 text-black' : 'text-gray-700'}`}>
                About
              </Link>
              <div className="rounded-xl border border-gray-100">
                <button
                  type="button"
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${isBusinessPage ? 'bg-gray-100 text-black' : 'text-gray-700'}`}
                  aria-expanded={isMobileBusinessesOpen}
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsMobileBusinessesOpen((open) => !open);
                  }}
                >
                  <span>Businesses</span>
                  <ChevronDownIcon className={`h-4 w-4 pointer-events-none transition-transform duration-200 ${isMobileBusinessesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`${isMobileBusinessesOpen ? 'grid' : 'hidden'} grid-cols-1 gap-1 border-t border-gray-100 p-2`}>
                  {businesses.map((b) => (
                    <Link
                      key={b.name}
                      href={b.href}
                      onClick={closeMobileMenu}
                      className="rounded-xl px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black"
                    >
                      <div className="font-medium">{b.name}</div>
                      <div className="text-xs text-gray-400">{b.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/contact" onClick={closeMobileMenu} className={`rounded-xl px-4 py-3 text-sm font-medium ${pathname === '/contact' ? 'bg-gray-100 text-black' : 'text-gray-700'}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
