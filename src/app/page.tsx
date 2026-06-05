import HeroSlideshow from "@/components/HeroSlideshow";
import MarqueePortfolio from "@/components/MarqueePortfolio";

const businesses = [
  {
    title: "Happy Boy Collection",
    description: "Curated fashion and luxury goods emphasizing timeless style and modern elegance.",
    href: "/collection",
    tag: "Retail & Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Happy Boy Farms",
    description: "Sustainable agriculture delivering high-quality organic produce and livestock globally.",
    href: "/farms",
    tag: "Agriculture",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Happy Boy Homes",
    description: "Premium real estate development focused on beautifully crafted living spaces.",
    href: "/homes",
    tag: "Real Estate",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Nick Phones",
    description: "Latest mobile technologies and telecommunication accessories.",
    href: "/nick-phones",
    tag: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Happy Boy Automobile",
    description: "Luxury and commercial vehicle distribution, sales, and comprehensive servicing.",
    href: "/automobile",
    tag: "Transport",
    image: "https://images.unsplash.com/photo-1503376710356-70e68c85f4ba?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "HB Oil and Gas",
    description: "Robust energy solutions prioritizing efficiency, reliability, and security of supply.",
    href: "/oil-and-gas",
    tag: "Energy",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    comingSoon: true
  },
  {
    title: "HB Mining",
    description: "Responsible extraction and processing of valuable raw minerals and resources.",
    href: "/mining",
    tag: "Resources",
    image: "https://images.unsplash.com/photo-1582214488219-c0ae2f1ab8cf?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Home() {
  const heroImages = businesses.map(b => b.image);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center overflow-hidden py-24 sm:py-36 lg:py-48 min-h-[82vh] sm:min-h-[90vh] w-full items-center text-center">
        <HeroSlideshow images={heroImages} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <p className="text-sm font-medium tracking-[0.2em] text-white uppercase mb-4">
            Excellence In Every Industry We Serve™
          </p>
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-playfair font-normal tracking-tight mb-6 text-white leading-[1.1] max-w-4xl">
            Redefining Quality & Innovation In Every Happy Boy Enterprise
          </h1>
          <p className="text-base sm:text-xl text-white/90 font-light mb-10 max-w-2xl px-4 sm:px-4">
            From sustainable agriculture to premium real estate and luxury goods,
            we are building the foundations for tomorrow.
          </p>
          <a href="#portfolio" className="border border-white/60 hover:bg-white hover:text-gray-900 transition-colors text-white text-[13px] font-semibold tracking-wider uppercase px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-2 backdrop-blur-sm">
            Explore Portfolio <span className="text-lg leading-none">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Portfolio Marquee */}
      <MarqueePortfolio businesses={businesses} />

      {/* Call to Action Section */}
      <section className="py-24 bg-white relative z-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal tracking-tight text-gray-900 mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light max-w-2xl">
            Partner with the Happy Boy Group and experience uncompromising quality across every venture. Let&apos;s discuss how we can achieve excellence together.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-900 text-[13px] font-semibold tracking-wider uppercase px-8 py-4">
            Get In Touch <span className="text-lg leading-none">&rarr;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
