import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowDownIcon } from 'lucide-react';
import FadeIn from "@/components/FadeIn";
import LazyVideo from "@/components/LazyVideo";

type Operation =
  | { name: string; type: string; desc: string; image: string; video?: never }
  | { name: string; type: string; desc: string; video: string; image?: never };

const operations: Operation[] = [
  {
    name: "Underground Gold Mining",
    type: "Deep-Level Extraction",
    desc: "Our underground operations reach high-grade gold veins through controlled tunneling and shaft work, with trained crews, ventilation systems, and safety protocols at every stage of extraction.",
    image: "/images/mining/underground_mining_tunnel.png"
  },
  {
    name: "Gold Processing & Refinement",
    type: "Ore to Bullion",
    desc: "Raw ore is crushed, milled, and refined on site to recover pure gold — turning extracted material into market-ready bullion through careful processing and quality assurance.",
    video: "/images/mining/gold.mp4"
  },
  {
    name: "Site Operations",
    type: "Production Management",
    desc: "Coordinated shift planning, equipment maintenance, and environmental monitoring keep our mining sites productive, compliant, and operating to the highest safety standards.",
    video: "/images/mining/underground-mining.mp4"
  },
  {
    name: "Secure Logistics",
    type: "Bullion Transport",
    desc: "Processed gold is handled, documented, and transported through secure channels — ensuring traceability from mine to vault for partners, refineries, and institutional buyers.",
    image: "/images/mining/gold_bars_vault.png"
  }
];

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] min-h-[320px] sm:min-h-[500px] overflow-hidden group">
        <Image
          src="/images/mining/gold_mine_hero.png"
          alt="HB Mining"
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
                HB Mining
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto uppercase">
                Ethical Gold Extraction & Refinement
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
                Premium gold mining with uncompromising standards.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                From underground extraction to on-site gold processing, our operations are built for yield, safety, and accountability. We combine deep-level mining expertise with modern refinement practices to deliver high-purity gold to partners who demand transparency at every step.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={400} className="relative h-[320px] md:h-[500px] lg:h-[700px] w-full lg:w-3/5 z-0">
            <Image
              src="/images/mining/underground_mining_tunnel.png"
              fill
              className="object-cover pointer-events-none select-none"
              alt="Mining Operations"
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
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">The Gold Standard</h2>
              <div className="w-12 h-[1px] bg-[#B89D58] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {operations.map((op, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="group">
                <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden mb-6 bg-gray-100">
                  {"video" in op ? (
                    <LazyVideo
                      src={op.video!}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={op.image}
                      alt={op.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                      loading="lazy"
                    />
                  )}
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
                src="/images/mining/gold_bars_vault.png"
                fill
                className="object-cover opacity-10"
                alt="Gold bars background"
              />
              <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-6 block">Supply & Security</span>
              <h3 className="text-4xl md:text-5xl font-playfair mb-8">Secure your gold reserves.</h3>
              <p className="text-white/70 leading-relaxed mb-12 text-lg font-light">
                From underground extraction to refined bullion, we offer direct access to responsibly mined gold. Partner with us for a stable, transparent supply chain backed by on-the-ground operations.
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
