import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowDownIcon } from 'lucide-react';
import FadeIn from "@/components/FadeIn";

const fleet = [
  {
    model: "Toyota RAV4",
    type: "Compact SUV",
    desc: "A versatile all-terrain SUV with rugged styling, all-wheel drive capability, and a spacious cabin — ideal for daily driving, family use, and weekend adventures.",
    image: "/images/automobile/car1.png"
  },
  
  {
    model: "Toyota Highlander",
    type: "Mid-Size SUV",
    desc: "A premium family SUV offering three-row seating, a commanding road presence, and smooth performance — perfect for long journeys and comfortable group travel.",
    image: "/images/automobile/car3.png"
  },
  {
    model: "Hyundai Elantra",
    type: "Compact Sedan",
    desc: "A refined and fuel-efficient sedan with a sleek profile, modern front grille, and comfortable interior — a reliable choice for city commutes and business travel.",
    image: "/images/automobile/car4.png"
  },
  {
    model: "Honda Civic",
    type: "Executive Sedan",
    desc: "A timeless sedan known for its aerodynamic design, efficient performance, and premium finish — available for purchase and long-term rental with full servicing support.",
    image: "/images/automobile/car5.png"
  }
];

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] min-h-[320px] sm:min-h-[500px] overflow-hidden group">
        <Image
          src="/images/automobile/hero.png"
          alt="Happy Boy Automobile"
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
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-playfair text-white mb-6">
                Happy Boy Automobile
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto uppercase">
                Exclusive Sales & Luxury Rentals
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

        {/* Engineering Philosophy */}
        <div className="flex flex-col lg:flex-row items-center mb-40 relative">
          <FadeIn delay={200} className="lg:w-1/2 lg:pr-16 z-20 lg:-mr-12 relative lg:mt-32">
            <div className="bg-white p-8 lg:p-16 shadow-2xl border border-gray-100">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-4 block">Our Offering</span>
              <h2 className="text-4xl md:text-5xl font-playfair leading-tight mb-8">
                Curated mobility, tailored for ownership and experience.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                From compact sedans to capable SUVs, we source and maintain a handpicked fleet of trusted brands including Toyota, Honda, and Hyundai. Each vehicle is inspected, certified, and ready for purchase or rental — with flexible packages for personal use, business fleets, and long-term leasing.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={400} className="relative h-[320px] md:h-[500px] lg:h-[700px] w-full lg:w-3/5 z-0">
            <Image
              src="/images/automobile/car3.png"
              fill
              className="object-cover pointer-events-none select-none"
              alt="Toyota Highlander"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
              loading="lazy"
            />
            {/* Subtle luxury border */}
            <div className="absolute inset-4 border border-white/50 pointer-events-none select-none mix-blend-overlay"></div>
          </FadeIn>
        </div>

        {/* Fleet Grid */}
        <div className="mb-32">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-gray-400 text-sm tracking-widest uppercase font-semibold block mb-4">Curated Fleet</span>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">For Sale & Rent</h2>
              <div className="w-12 h-[1px] bg-[#B89D58] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fleet.map((car, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="group">
                <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={car.image}
                    alt={car.model}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-playfair text-gray-900 group-hover:text-[#B89D58] transition-colors">{car.model}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <span className="uppercase tracking-widest">{car.type}</span>
                  </div>
                  <p className="text-gray-600 font-light mb-4">{car.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Showrooms Call to Action */}
        <FadeIn delay={200}>
          <div className="relative py-32 px-8 text-center bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/automobile/hero.png"
                fill
                className="object-cover opacity-10"
                alt="Showroom background"
              />
              <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-6 block">Global Dealerships</span>
              <h3 className="text-4xl md:text-5xl font-playfair mb-8">Experience the drive.</h3>
              <p className="text-white/70 leading-relaxed mb-12 text-lg font-light">
                Browse our current inventory of sedans and SUVs, schedule a test drive, or enquire about rental and fleet packages. Every vehicle is backed by our commitment to quality and after-sales support.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-gray-900 transition-colors text-white text-[13px] font-semibold tracking-wider uppercase px-10 py-5">
                Schedule a Visit <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
