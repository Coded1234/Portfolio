import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowDownIcon } from 'lucide-react';
import FadeIn from "@/components/FadeIn";

const categories = [
  {
    title: "Ready-to-Wear",
    slug: "ready-to-wear",
    desc: "Elevated everyday essentials and avant-garde statement pieces.",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sneakers & Footwear",
    slug: "sneakers",
    desc: "Luxury athletic silhouettes crafted with premium Italian leathers.",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Timepieces",
    slug: "timepieces",
    desc: "Precision engineering meets timeless elegance in our watch collection.",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fine Jewelry",
    slug: "jewelry",
    desc: "Bespoke diamond and gold jewelry designed to last generations.",
    img: "https://images.unsplash.com/photo-1599643477874-dc81cbd21966?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] min-h-[320px] sm:min-h-[500px] overflow-hidden group">
        <Image
          src="/images/collection/collection-hero.png"
          alt="Happy Boy Collection"
          fill
          className="object-cover scale-105 duration-[20000ms] ease-out group-hover:scale-125 pointer-events-none select-none"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
        />
        {/* Film grain overlay */}
        <div className="absolute inset-0 bg-noise z-0 mix-blend-overlay opacity-20 pointer-events-none select-none"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 flex items-end z-10 transition-colors duration-1000 group-hover:from-black/90 pointer-events-none select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-24 text-center">
            <FadeIn>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white font-playfair mb-6">
                Happy Boy Collection
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto uppercase">
                Curated Fashion & Luxury Goods
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Glide Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20 pointer-events-none select-none">
          <span className="text-white/60 text-xs tracking-widest uppercase mb-2 font-semibold">Explore</span>
          <ArrowDownIcon className="text-white/60 w-4 h-4" />
        </div>
      </div>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn delay={100}>
          <div className="mb-20 text-center">
            <Link href="/#portfolio" className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center mb-32 relative">
          <FadeIn delay={200} className="lg:w-1/2 lg:pr-16 z-20 lg:-mr-12 relative lg:mt-32">
            <div className="bg-white p-8 lg:p-12 shadow-2xl border border-gray-100">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-4 block">The Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-playfair leading-tight mb-8">
                Timeless style combined with modern elegance.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                At <strong className="font-semibold text-gray-900">Happy Boy Collection</strong>, we believe that style is a reflection of identity. We source materials from the finest artisans globally, bringing together traditional craftsmanship and contemporary design.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={400} className="relative h-[320px] md:h-[600px] w-full lg:w-3/5 z-0">
            <Image
              src="/images/collection/collection-hero1.png"
              fill
              className="object-cover pointer-events-none select-none"
              alt="Fashion Philosophy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
              loading="lazy"
            />
            {/* Subtle luxury border */}
            <div className="absolute inset-4 border border-white/50 pointer-events-none select-none mix-blend-overlay"></div>
          </FadeIn>
        </div>

        {/* Categories Grid */}
        <div className="mb-32">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair mb-4">Our Categories</h2>
              <div className="w-16 h-[1px] bg-[#B89D58] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <FadeIn key={cat.title} delay={idx * 150}>
                <div className="group relative block h-[320px] md:h-[450px] overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out z-20">
                    <h3 className="text-3xl text-white font-playfair mb-3">{cat.title}</h3>
                    <p className="text-white/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Boutiques Call to Action */}
        <FadeIn delay={200}>
          <div className="relative py-16 sm:py-24 px-8 text-center bg-gray-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
                fill
                className="object-cover grayscale"
                alt="Boutique background"
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-playfair mb-6">The Boutiques</h3>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                Experience our collections in person at our flagship locations across major global fashion capitals. Our boutiques offer private styling sessions and exclusive previews of upcoming seasonal drops.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-900 text-[13px] font-semibold tracking-wider uppercase px-8 py-4 bg-white">
                Book an Appointment <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>

      </section>
    </div>
  );
}
