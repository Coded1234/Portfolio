import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from 'lucide-react';
import FadeIn from "@/components/FadeIn";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900">
      <div className="relative w-full h-[60vh] sm:h-[80vh] min-h-[320px] sm:min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
          alt="HB Oil and Gas"
          fill
          className="object-cover pointer-events-none select-none"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-noise z-0 mix-blend-overlay opacity-20 pointer-events-none select-none"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70 flex items-center justify-center z-10 pointer-events-none select-none">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <FadeIn>
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-6 block">Energy</span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-playfair text-white mb-6">
                HB Oil & Gas
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light tracking-[0.3em] uppercase">
                Coming Soon
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full flex-1 flex flex-col items-center text-center">
        <FadeIn delay={100}>
          <Link href="/#portfolio" className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors mb-16">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="w-12 h-[1px] bg-[#B89D58] mx-auto mb-8"></div>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
            We are preparing robust energy solutions prioritizing efficiency, reliability, and security of supply. Check back soon for updates on HB Oil & Gas.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-900 text-[13px] font-semibold tracking-wider uppercase px-10 py-5">
            Get In Touch <span className="text-lg leading-none">&rarr;</span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
