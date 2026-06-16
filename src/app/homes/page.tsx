import Link from "next/link";
import Image from "next/image";
import { ArrowDownIcon, MapPinIcon, ArrowLeftIcon } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import LazyVideo from "@/components/LazyVideo";

type Project =
  | { name: string; location: string; status: string; desc: string; image: string; video?: never; poster?: never }
  | { name: string; location: string; status: string; desc: string; video: string; poster?: string; image?: never };

const projects: Project[] = [
  {
    name: "Residential Block A",
    location: "Accra, Ghana",
    status: "Completed",
    desc: "A fully delivered multi-unit residential development featuring modern finishes, secure parking, and quality craftsmanship throughout.",
    image: "/images/homes/building-1.jpg"
  },
  {
    name: "Residential Block B",
    location: "Accra, Ghana",
    status: "Completed",
    desc: "Completed housing units built to high standards with durable materials, functional layouts, and attention to long-term livability.",
    image: "/images/homes/building-2.jpg"
  },
  {
    name: "Residential Block C",
    location: "Accra, Ghana",
    status: "Ongoing",
    desc: "Currently under construction — structural work and exterior finishing are progressing on schedule toward handover.",
    image: "/images/homes/building-3.jpg"
  },
  {
    name: "Mixed-Use Development",
    location: "Accra, Ghana",
    status: "Ongoing",
    desc: "An active build site combining residential and commercial spaces, with foundations and framing advancing across the project.",
    video: "/images/homes/building-video.mp4",
    poster: "/images/homes/building-3.jpg"
  }
];

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900 pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] min-h-[320px] sm:min-h-[500px] overflow-hidden group">
        <Image
          src="/images/homes/homes-hero.jpg"
          alt="Happy Boy Homes"
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
                Happy Boy Homes
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto uppercase">
                Premium Real Estate Development
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

        {/* Editorial Intro */}
        <div className="flex flex-col lg:flex-row items-center mb-40 relative">
          <FadeIn delay={200} className="lg:w-1/2 lg:pr-16 z-20 lg:-mr-12 relative lg:mt-32">
            <div className="bg-white p-8 lg:p-16 shadow-2xl border border-gray-100">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-4 block">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-playfair leading-tight mb-8">
                Where architecture and nature exist in perfect harmony.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                <span className="text-6xl text-[#B89D58] font-playfair float-left mr-4 leading-none mt-2">W</span>
                e craft premium, beautifully designed living spaces that redefine modern luxury. By collaborating with award-winning architects and sourcing the finest materials globally, we deliver properties that are bold, timeless, and strictly exclusive.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={400} className="relative h-[320px] md:h-[500px] lg:h-[700px] w-full lg:w-3/5 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
              fill
              className="object-cover pointer-events-none select-none"
              alt="Architectural Excellence"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
              loading="lazy"
            />
            {/* Subtle luxury border */}
            <div className="absolute inset-4 border border-white/50 pointer-events-none select-none mix-blend-overlay"></div>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="mb-32">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-gray-400 text-sm tracking-widest uppercase font-semibold block mb-4">The Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-playfair mb-6">Our Projects</h2>
              <div className="w-12 h-[1px] bg-[#B89D58] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="group">
                <div className="relative h-[280px] md:h-[450px] w-full overflow-hidden mb-6 bg-gray-100">
                  {"video" in project ? (
                    <LazyVideo
                      src={project.video}
                      poster={project.poster}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 600px"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-900">{project.status}</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-playfair text-gray-900 group-hover:text-[#B89D58] transition-colors">{project.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPinIcon className="w-4 h-4 text-[#B89D58]" />
                    <span className="uppercase tracking-widest">{project.location}</span>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">{project.desc}</p>
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
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
                fill
                className="object-cover opacity-10"
                alt="Investment background"
              />
              <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-6 block">Acquisitions & Investments</span>
              <h3 className="text-4xl md:text-5xl font-playfair mb-8">Ready to secure a legacy?</h3>
              <p className="text-white/70 leading-relaxed mb-12 text-lg font-light">
                From commercial high-rises to luxury residential enclaves, Happy Boy Homes provides secure, high-yield investment properties tailored to your portfolio needs. Schedule a private consultation with our brokers today.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-gray-900 transition-colors text-white text-[13px] font-semibold tracking-wider uppercase px-10 py-5">
                Contact Brokerage <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
