"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon, CheckCircle2Icon } from "lucide-react";
import { PhoneInput } from "react-international-phone";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("+233");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

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

      {/* Enquiry Form Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full bg-white relative z-20">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-playfair font-normal tracking-tight text-gray-900 mb-4">
            Send Us an Enquiry
          </h2>
          <p className="text-gray-500 font-light text-base sm:text-lg max-w-2xl mx-auto px-2">
            Fill out the form below and we&apos;ll get back to you within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-4 flex flex-col space-y-6 sm:space-y-8 mt-2">

            <div className="flex items-start space-x-4 border-b border-gray-100 pb-5 sm:pb-6">
              <div className="p-2.5 bg-gray-50 rounded-full text-gray-500 border border-gray-100 mt-1">
                <MailIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Email</p>
                <p className="text-sm font-medium text-gray-900">nicksonmanasseh2@gmail.com</p>
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

            <div className="bg-gray-50 p-6 sm:p-8 rounded-sm border border-gray-100 mt-2">
              <h4 className="text-lg sm:text-xl font-playfair mb-5 sm:mb-6 text-gray-900">Why Choose Happy Boy?</h4>
              <ul className="space-y-3 sm:space-y-4 text-[11px] sm:text-xs text-gray-600 font-medium tracking-wide">
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#B89D58] mr-4"></div> Premium portfolio worldwide</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#B89D58] mr-4"></div> Expert market knowledge</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#B89D58] mr-4"></div> Personalized client service</li>
                <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[#B89D58] mr-4"></div> Quick response within 24 hours</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Follow Us</h5>
                <div className="flex items-center gap-4">
                  <a href="https://instagram.com/kofisthappyboy" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
                    <svg className="w-4 h-4 text-[#B89D58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                      <circle cx="12" cy="12" r="3"></circle>
                      <circle cx="17.5" cy="6.5" r="0.5"></circle>
                    </svg>
                    <span>@kofisthappyboy</span>
                  </a>
                  <a href="https://www.tiktok.com/@kofisthappyboy" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
                    <svg className="w-4 h-4 text-[#B89D58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M9 18V5l12-2v13" />
                      <path d="M9 9c0 1.657 1.343 3 3 3s3-1.343 3-3" />
                    </svg>
                    <span>@kofisthappyboy</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-8">
            {isSubmitted ? (
              <div className="bg-white p-8 sm:p-12 lg:p-16 border border-gray-100 flex flex-col items-center justify-center text-center h-full min-h-[320px] sm:min-h-[400px]">
                <CheckCircle2Icon className="w-16 h-16 text-[#B89D58] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl sm:text-3xl font-playfair text-gray-900 mb-4">Thank You</h3>
                <p className="text-gray-500 font-light leading-relaxed max-w-sm text-sm sm:text-base">
                  We have received your enquiry. A representative from the Happy Boy Group will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 text-xs font-semibold uppercase tracking-widest text-[#B89D58] border border-[#B89D58] hover:bg-[#B89D58] hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-10 border border-gray-100 space-y-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="firstName" className="block text-[11px] font-semibold tracking-wider uppercase text-gray-500">First Name *</label>
                    <input type="text" id="firstName" className="w-full border border-gray-100 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors placeholder:text-gray-300" placeholder="John" required />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="lastName" className="block text-[11px] font-semibold tracking-wider uppercase text-gray-500">Last Name *</label>
                    <input type="text" id="lastName" className="w-full border border-gray-100 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors placeholder:text-gray-300" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="email" className="block text-[11px] font-semibold tracking-wider uppercase text-gray-500">Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <MailIcon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <input type="email" id="email" className="w-full border border-gray-100 rounded-none pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors placeholder:text-gray-300" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="phone" className="block text-[11px] font-semibold tracking-wider uppercase text-gray-500">Phone Number</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3.5 text-gray-400">
                      <PhoneIcon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <PhoneInput
                      defaultCountry="gh"
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      forceDialCode
                      disableDialCodeAndPrefix
                      placeholder="54 377 0645"
                      name="phone"
                      required
                      className="hb-phone-input relative z-20 w-full"
                      inputClassName="!w-full !h-[48px] !border !border-gray-100 !rounded-none !pl-10 !pr-4 !text-sm !text-gray-900 !bg-white !shadow-none !focus:outline-none !focus:border-gray-900 !focus:ring-1 !focus:ring-gray-900 !transition-colors !placeholder:text-gray-300"
                      countrySelectorStyleProps={{
                        buttonClassName: "!border !border-gray-100 !rounded-none !bg-white !px-2 !h-[48px] !min-w-[64px] !relative !z-30",
                        buttonStyle: { borderRight: 0 },
                        dropdownStyleProps: { style: { zIndex: 9999 } },
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2.5 pb-2">
                  <label htmlFor="message" className="block text-[11px] font-semibold tracking-wider uppercase text-gray-500">Your Message *</label>
                  <textarea id="message" rows={5} className="w-full border border-gray-100 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 resize-none placeholder:text-gray-300 transition-colors" placeholder="Tell us about your requirements..." required></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#B89D58] text-white text-[13px] tracking-wider uppercase font-semibold hover:bg-[#a68a48] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}