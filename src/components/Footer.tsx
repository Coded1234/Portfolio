import Link from "next/link";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import TikTokIcon from "./TikTokIcon";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pt-16 pb-8 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center rounded-md text-gray-900 bg-gray-50 border border-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span className="text-lg font-bold tracking-widest uppercase text-gray-900">
                HAPPY BOY
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              A premier diversified corporation building the foundations for tomorrow through excellence and innovation across global industries.
            </p>
            <div className="mt-6 flex items-center gap-3 justify-start">
              <a aria-label="Instagram" href="https://instagram.com/kofisthappyboy" target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-900 text-white inline-flex items-center justify-center hover:bg-gray-800">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <circle cx="17.5" cy="6.5" r="0.5"></circle>
                </svg>
              </a>

              <a aria-label="Facebook" href="https://facebook.com/kofisthappyboy" target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-900 text-white inline-flex items-center justify-center hover:bg-gray-800">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a aria-label="TikTok" href="https://www.tiktok.com/@kofisthappyboy" target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-900 text-white inline-flex items-center justify-center hover:bg-gray-800">
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="font-playfair font-medium text-lg text-gray-900 mb-6">Our Businesses</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 text-sm text-gray-500">
              <ul className="flex flex-col gap-3">
                <li><Link href="/collection" className="hover:text-gray-900 transition-colors whitespace-nowrap">Happy Boy Collection</Link></li>
                <li><Link href="/farms" className="hover:text-gray-900 transition-colors whitespace-nowrap">Happy Boy Farms</Link></li>
                <li><Link href="/homes" className="hover:text-gray-900 transition-colors whitespace-nowrap">Happy Boy Homes</Link></li>
                <li><Link href="/nick-phones" className="hover:text-gray-900 transition-colors whitespace-nowrap">Nick Phones</Link></li>
              </ul>

              <ul className="flex flex-col gap-3 mt-4 lg:mt-0">
                <li><Link href="/automobile" className="hover:text-gray-900 transition-colors whitespace-nowrap">Happy Boy Automobile</Link></li>
                <li><Link href="/oil-and-gas" className="hover:text-gray-900 transition-colors whitespace-nowrap">HB Oil and Gas</Link></li>
                <li><Link href="/mining" className="hover:text-gray-900 transition-colors whitespace-nowrap">HB Mining</Link></li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-6 sm:pl-8 lg:pl-12">
            <h4 className="font-playfair font-medium text-lg text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/#portfolio" className="hover:text-gray-900 transition-colors">Our Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-medium text-lg text-gray-900 mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-4 h-4 text-gray-400 shrink-0" />
                <div className="flex flex-col">
                  <span>0543770645</span>
                  <span>0245911215</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-4 h-4 text-gray-400 shrink-0" />
                <span>nicksonmanasseh2@gmail.com</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Happy Boy Company Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
