import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowDownIcon } from 'lucide-react';
import FadeIn from "@/components/FadeIn";

const operations = [
  {
    name: "Heritage Swine",
    type: "Ethical Livestock",
    desc: "Raising elite pig bloodlines with extensive veterinary care and specialized organic feed to ensure unmatched meat quality.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Free-Range Poultry",
    type: "Organic Farming",
    desc: "Expansive free-range environments designed to deliver the healthiest, ethically raised poultry to premium markets.",
    image: "https://images.unsplash.com/photo-1548550023-2bf3c49b338c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Veterinary Excellence",
    type: "Animal Welfare",
    desc: "Continuous health monitoring and specialized care protocols ensuring the highest standards of welfare for our pigs and poultry.",
    image: "https://images.unsplash.com/photo-1584852936254-073c683b544b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Cold-Chain Logistics",
    type: "Global Distribution",
    desc: "State-of-the-art climate-controlled transport networks ensuring farm-fresh delivery to premium retail and hospitality partners.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c15274?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] min-h-[320px] sm:min-h-[500px] overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          alt="Happy Boy Farms"
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
                Happy Boy Farms
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto uppercase">
                Ethical Swine & Premium Poultry
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

        {/* Philosophy */}
        <div className="flex flex-col lg:flex-row items-center mb-40 relative">
          <FadeIn delay={200} className="lg:w-1/2 lg:pr-16 z-20 lg:-mr-12 relative lg:mt-32">
            <div className="bg-white p-8 lg:p-16 shadow-2xl border border-gray-100">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-4 block">Our Operations</span>
              <h2 className="text-4xl md:text-5xl font-playfair leading-tight mb-8">
                Cultivating quality through sustainable practices.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                We are leading providers of high-quality swine and poultry. From elite pig rearing to extensive organic poultry operations, we embrace humane, modern farming techniques to feed the future responsibly and sustainably.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={400} className="relative h-[320px] md:h-[500px] lg:h-[700px] w-full lg:w-3/5 z-0">
            <Image
              src="https://images.unsplash.com/photo-1598402283838-8e6cbb7bf317?q=80&w=1200&auto=format&fit=crop"
              fill
              className="object-cover pointer-events-none select-none"
              alt="Farm Operations"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
              loading="lazy"
            />
            {/* Subtle luxury border */}
            <div className="absolute inset-4 border border-white/50 pointer-events-none select-none mix-blend-overlay"></div>
          </FadeIn>
        </div>

        {/* Resources Grid */}
        <div className="mb-32">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-gray-400 text-sm tracking-widest uppercase font-semibold block mb-4">Core Focus</span>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">Livestock Excellence</h2>
              <div className="w-12 h-[1px] bg-[#B89D58] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {operations.map((op, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="group cursor-pointer">
                <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden mb-6 bg-gray-100">
                  <Image
                    src={op.image}
                    alt={op.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-playfair text-gray-900 group-hover:text-[#B89D58] transition-colors">{op.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <span className="uppercase tracking-widest">{op.type}</span>
                  </div>
                  <p className="text-gray-600 font-light mb-4">{op.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <FadeIn delay={200}>
          <div className="relative py-32 px-8 text-center bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
                fill
                className="object-cover opacity-10"
                alt="Farms Background"
              />
              <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-6 block">Supply & Partnership</span>
              <h3 className="text-4xl md:text-5xl font-playfair mb-8">Farm-to-table excellence.</h3>
              <p className="text-white/70 leading-relaxed mb-12 text-lg font-light">
                Discover our wholesale supply networks and explore partnership opportunities for scalable, high-grade organic production.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-gray-900 transition-colors text-white text-[13px] font-semibold tracking-wider uppercase px-10 py-5">
                Contact Operations <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
