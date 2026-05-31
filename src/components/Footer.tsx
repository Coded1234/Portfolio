import Link from "next/link";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pt-16 pb-8 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center rounded-md text-gray-900 bg-gray-50 border border-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span className="text-lg font-bold tracking-widest uppercase text-gray-900">
                HAPPYBOY
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              A premier diversified corporation building the foundations for tomorrow through excellence and innovation across global industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-medium text-lg text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/#portfolio" className="hover:text-gray-900 transition-colors">Our Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">News & Media</Link></li>
            </ul>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="font-playfair font-medium text-lg text-gray-900 mb-6">Our Businesses</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/collection" className="hover:text-gray-900 transition-colors">Happyboy Collection</Link></li>
              <li><Link href="/farms" className="hover:text-gray-900 transition-colors">HappyBoy Farms</Link></li>
              <li><Link href="/homes" className="hover:text-gray-900 transition-colors">Happyboy Homes</Link></li>
              <li><Link href="/automobile" className="hover:text-gray-900 transition-colors">HappyBoy Automobile</Link></li>
              <li><Link href="/oil-and-gas" className="hover:text-gray-900 transition-colors">HB Oil and Gas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-medium text-lg text-gray-900 mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />
                <span>100 HappyBoy Avenue, Global City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-gray-400 shrink-0" />
                <span>+1 555 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-4 h-4 text-gray-400 shrink-0" />
                <span>contact@happyboy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} HappyBoy Group. All rights reserved.</p>
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
