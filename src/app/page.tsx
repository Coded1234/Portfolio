import HeroSlideshow from "@/components/HeroSlideshow";
import MarqueePortfolio from "@/components/MarqueePortfolio";

const businesses = [
  {
    title: "Happy Boy Collection",
    description: "Curated fashion and luxury goods emphasizing timeless style and modern elegance.",
    href: "/collection",
    tag: "Retail & Fashion",
    image: "/images/collection/collection-hero.png"
  },
  {
    title: "Happy Boy Farms",
    description: "Sustainable agriculture delivering high-quality organic produce and livestock globally.",
    href: "/farms",
    tag: "Agriculture",
    image: "/images/farms/farm hero.png"
  },
  {
    title: "Happy Boy Homes",
    description: "Premium real estate development focused on beautifully crafted living spaces.",
    href: "/homes",
    tag: "Real Estate",
    image: "/images/homes/homes-hero.jpg"
  },
  {
    title: "Nick Phones",
    description: "Your trusted iPhone specialist — new, pre-owned, and rental iPhones with full support.",
    href: "/nick-phones",
    tag: "Electronics",
    image: "/images/nick-phones/apple_accessories_hero.png"
  },
  {
    title: "Happy Boy Automobile",
    description: "Luxury and commercial vehicle distribution, sales, and comprehensive servicing.",
    href: "/automobile",
    tag: "Transport",
    image: "/images/automobile/hero.png"
  },
  {
    title: "HB Oil and Gas",
    description: "Robust energy solutions prioritizing efficiency, reliability, and security of supply.",
    href: "/oil-and-gas",
    tag: "Energy",
    image: "/images/oil-and-gas/oil_gas_hero_refinery.png",
    comingSoon: true
  },
  {
    title: "HB Mining",
    description: "Responsible extraction and processing of valuable raw minerals and resources.",
    href: "/mining",
    tag: "Resources",
    image: "/images/mining/gold_mine_hero.png"
  }
];

export default function Home() {
  const heroImages = businesses.map(b => b.image);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center overflow-hidden py-28 sm:py-40 lg:py-48 min-h-[82vh] sm:min-h-[90vh] w-full items-center text-center">
        <HeroSlideshow images={heroImages} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-indigo-100 uppercase backdrop-blur-md mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.9)]" />
            Excellence in every industry
          </div>
          <p className="text-sm font-medium tracking-[0.2em] text-white/80 uppercase mb-4">
            Excellence In Every Industry We Serve™
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-normal tracking-tight mb-6 text-white leading-[1.08] max-w-4xl">
            Redefining Quality & Innovation In Every Happy Boy Enterprise
          </h1>
          <p className="text-base sm:text-xl text-white/90 font-light mb-10 max-w-2xl px-4 sm:px-4">
            From sustainable agriculture to premium real estate and luxury goods,
            we are building the foundations for tomorrow.
          </p>
          <a href="#portfolio" className="enterprise-button bg-white text-[#122033] hover:bg-indigo-50 text-[13px] font-semibold tracking-wider uppercase px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-2 shadow-xl shadow-black/20">
            Explore Portfolio <span className="text-lg leading-none">&rarr;</span>
          </a>
          <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-10 text-left text-white/80">
            <div><p className="text-2xl sm:text-3xl font-semibold text-white">07</p><p className="text-[10px] sm:text-xs uppercase tracking-wider">Operating companies</p></div>
            <div><p className="text-2xl sm:text-3xl font-semibold text-white">01</p><p className="text-[10px] sm:text-xs uppercase tracking-wider">Shared standard</p></div>
            <div><p className="text-2xl sm:text-3xl font-semibold text-white">∞</p><p className="text-[10px] sm:text-xs uppercase tracking-wider">Possibilities</p></div>
          </div>
        </div>
      </section>

      {/* Portfolio Marquee */}
      <MarqueePortfolio businesses={businesses} />

      {/* Call to Action Section */}
      <section className="py-24 bg-white relative z-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="eyebrow mb-4">Partner with purpose</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal tracking-tight text-[#122033] mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light max-w-2xl">
            Partner with the Happy Boy Group and experience uncompromising quality across every venture. Let&apos;s discuss how we can achieve excellence together.
          </p>
          <a href="/contact" className="enterprise-button inline-flex items-center gap-2 bg-[#122033] hover:bg-indigo-600 text-white text-[13px] font-semibold tracking-wider uppercase px-8 py-4">
            Get In Touch <span className="text-lg leading-none">&rarr;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
