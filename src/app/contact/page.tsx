import Image from "next/image";
import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Map Background */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] min-h-[420px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image / Map placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
            alt="Map location"
            fill
            className="object-cover grayscale opacity-80"
            priority
          />
          {/* Luxurious gradient overlay matching the home page */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-8 sm:mt-12">
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-playfair font-normal text-white mb-4 sm:mb-6 tracking-tight drop-shadow-md max-w-3xl">
            Get In Touch
          </h1>
          <p className="text-base sm:text-2xl text-white/90 font-light mb-8 sm:mb-10 drop-shadow max-w-2xl px-2">
            Let us help you connect with Happy Boy Company Limited.
          </p>

          <div className="inline-flex items-center space-x-3 px-5 sm:px-8 py-3.5 sm:py-4 border border-white/60 text-white text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-colors cursor-pointer backdrop-blur-sm max-w-[90vw]">
            <MapPinIcon className="w-4 h-4" />
            <span>Accra, Ghana</span>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full bg-white relative z-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal tracking-tight text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-500 font-light text-base sm:text-lg max-w-2xl mx-auto px-2">
            Reach out to us directly through any of the channels below. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Column - Contact Details */}
          <div className="flex flex-col space-y-6 sm:space-y-8 mt-2">
            <div className="flex items-start space-x-4 border-b border-gray-100 pb-5 sm:pb-6">
              <div className="p-2.5 bg-gray-50 rounded-full text-gray-500 border border-gray-100 mt-1">
                <MailIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Email</p>
                <a href="mailto:nicksonmanasseh2@gmail.com" className="text-sm font-medium text-[#B89D58] hover:underline">
                  nicksonmanasseh2@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 border-b border-gray-100 pb-5 sm:pb-6">
              <div className="p-2.5 bg-gray-50 rounded-full text-gray-500 border border-gray-100 mt-1">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Phone</p>
                <div className="text-sm font-medium text-gray-900 space-y-1">
                  <div>0543770645</div>
                  <div>0245911215</div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 border-b border-gray-100 pb-5 sm:pb-6">
              <div className="p-2.5 bg-gray-50 rounded-full text-gray-500 border border-gray-100 mt-1">
                <MapPinIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Address</p>
                <p className="text-sm font-medium text-gray-900 leading-relaxed">
                  Accra, Ghana
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 pb-5 sm:pb-6">
              <div className="p-2.5 bg-gray-50 rounded-full text-gray-500 border border-gray-100 mt-1">
                <ClockIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Office Hours</p>
                <p className="text-sm font-medium text-gray-900">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-500 mt-1">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Column - Direct Action */}
          <div className="bg-gray-50 p-8 sm:p-10 border border-gray-100 flex flex-col justify-center items-center text-center rounded-sm">
            <MailIcon className="w-12 h-12 text-[#B89D58] mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-playfair text-gray-900 mb-4">Send Us a Message</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-sm">
              Click the button below to open your preferred email application and send us a direct message. We typically respond within 24 hours.
            </p>
            <a 
              href="mailto:nicksonmanasseh2@gmail.com?subject=Enquiry for Happy Boy Company"
              className="inline-flex items-center justify-center gap-2 w-full max-w-xs py-4 bg-[#B89D58] text-white text-[13px] tracking-wider uppercase font-semibold hover:bg-[#a68a48] transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              Email Us Now
            </a>

            <div className="mt-12 pt-8 border-t border-gray-200 w-full">
              <h5 className="text-xs font-semibold text-gray-500 uppercase mb-4">Follow Us</h5>
              <div className="flex items-center justify-center gap-6">
                <a href="https://www.instagram.com/nicksonmanase?igsh=ZjFhMzBhdzFndWh3" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B89D58] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="3"></circle>
                    <circle cx="17.5" cy="6.5" r="0.5"></circle>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@kofisthappyboy" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B89D58] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}