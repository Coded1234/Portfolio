import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center overflow-hidden py-24 sm:py-40 lg:py-48 min-h-[56vh] sm:min-h-[60vh] w-full items-center text-center bg-[#171717]">
        {/* We can use a single elegant image for the About hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Corporate Office"
            fill
            priority
            className="object-cover opacity-80 backdrop-blur-sm"
          />
          {/* Cinematic gradient shading */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <p className="text-sm font-medium tracking-[0.2em] text-white uppercase mb-4 drop-shadow">
            Our Story
          </p>
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-playfair font-normal tracking-tight mb-6 text-white leading-[1.1] drop-shadow-md max-w-4xl px-2 sm:px-0">
            A Legacy of Excellence & Innovation
          </h1>
          <p className="text-base sm:text-xl text-white/90 font-light max-w-2xl px-4 drop-shadow">
            Discover the vision, mission, and leadership driving the HappyBoy Group forward globally.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 sm:py-28 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Vision */}
            <FadeIn delay={100} className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-playfair font-normal mb-6 sm:mb-8 text-gray-900 border-b border-gray-100 pb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed font-light text-base sm:text-lg first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-[#B89D58] first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                To be the world’s most trusted and diversified conglomerate,
                defining the standard of quality across every industry we touch.
                We envision a future where our subsidiaries—from agriculture to
                luxury real estate—work in harmony to elevate communities and
                inspire global progress.
              </p>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={300} className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-playfair font-normal mb-6 sm:mb-8 text-gray-900 border-b border-gray-100 pb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed font-light text-base sm:text-lg first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-[#B89D58] first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                Our mission is to consistently deliver exceptional value to our
                customers, partners, and stakeholders. Through innovation,
                sustainable practices, and a relentless pursuit of perfection, we
                empower our diverse businesses to lead their respective markets
                with integrity and purpose.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Owner's Profile Section */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

            {/* Owner Image */}
            <FadeIn delay={100} className="w-full lg:w-5/12 flex justify-center">
              <div className="relative group">
                {/* Offset gold border decoration */}
                <div className="absolute inset-0 border-2 border-[#B89D58] translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                <div className="relative w-[18rem] h-[24rem] sm:w-96 sm:h-[32rem] overflow-hidden shadow-lg z-10 bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                    alt="Founder & CEO"
                    fill
                    className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Owner Details */}
            <FadeIn delay={300} className="w-full lg:w-7/12 flex flex-col justify-center pt-4 sm:pt-8">
              <p className="text-sm font-medium tracking-[0.2em] text-[#B89D58] uppercase mb-4">
                Founder & Chairman
              </p>
              <h2 className="text-3xl sm:text-5xl font-playfair font-normal mb-6 sm:mb-8 text-gray-900 leading-tight">
                Mr. HappyBoy
              </h2>

              <div className="space-y-5 sm:space-y-6 text-gray-600 font-light text-base sm:text-lg leading-relaxed">
                <p>
                  As the founding visionary behind the HappyBoy Group, Mr. HappyBoy
                  has dedicated his life to building a conglomerate born out of a desire
                  for uncompromising quality. Starting with a single venture, his
                  relentless drive and sharp business acumen have transformed the brand
                  into a global powerhouse encompassing 7 distinct subsidiaries.
                </p>
                <p>
                  Under his leadership, the organization has pioneered breakthroughs in
                  sustainable farming, telecommunications, luxury automotive distribution,
                  and premier real estate. He believes that &quot;Not every business is
                  created equal,&quot; heavily prioritizing integrity, flawless execution,
                  and continuous innovation.
                </p>
                <p className="italic text-gray-900 font-playfair text-lg sm:text-xl border-l-2 border-[#B89D58] pl-4 sm:pl-6 my-8 sm:my-10 leading-relaxed bg-white/50 p-4 rounded-r-lg">
                  &quot;Excellence isn&apos;t just an objective&mdash;it&apos;s a requirement embedded into
                  the very DNA of our entire portfolio. We build the foundations for
                  tomorrow, today.&quot;
                </p>
              </div>

              {/* Signature */}
              <div className="mt-4 sm:mt-8 flex justify-end lg:justify-start w-full pr-0 lg:pr-0">
                <p className="font-caveat text-4xl sm:text-5xl text-gray-800 -rotate-3 hover:scale-110 transition-transform cursor-default">
                  HappyBoy
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 sm:py-24 bg-white relative z-20 border-t border-gray-100">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-playfair font-normal tracking-tight text-gray-900 mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10 font-light max-w-2xl">
            Explore our diverse portfolio of industry-leading subsidiaries and discover how we are building the foundations for tomorrow.
          </p>
          <Link href="/#portfolio" className="inline-flex items-center gap-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-900 text-[13px] font-semibold tracking-wider uppercase px-6 sm:px-8 py-3.5 sm:py-4">
            Explore Subsidiaries <span className="text-lg leading-none">&rarr;</span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}