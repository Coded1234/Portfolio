import BusinessCard from "@/components/BusinessCard";
import Image from "next/image";

const businesses = [
  {
    title: "Happyboy Collection",
    description: "Curated fashion and luxury goods emphasizing timeless style and modern elegance.",
    href: "/collection",
    tag: "Retail & Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "HappyBoy Farms",
    description: "Sustainable agriculture delivering high-quality organic produce and livestock globally.",
    href: "/farms",
    tag: "Agriculture",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Happyboy Homes",
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
    title: "HappyBoy Automobile",
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
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
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
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="grid h-full w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
            {businesses.map((business) => (
              <div key={`hero-bg-${business.title}`} className="relative">
                <Image
                  src={business.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-white/70 dark:bg-black/40" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Building the foundations for tomorrow.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 font-light leading-relaxed mb-12">
            The HappyBoy Group is a diversified portfolio of businesses operating across essential industries worldwide.
            From sustainable agriculture to premium real estate, we deliver excellence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="border-t border-gray-200 dark:border-gray-800">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-gray-200 dark:border-gray-800">
            {/* Introductory Block in Grid */}
            <div className="border-r border-b border-gray-200 dark:border-gray-800 p-8 flex flex-col justify-end bg-gray-50 dark:bg-zinc-900/50 min-h-[300px]">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">Our Portfolio</h2>
              <p className="text-gray-500">Explore our diverse range of operating companies driving growth globally.</p>
            </div>

            {/* The Cards */}
            {businesses.map((business, idx) => (
              <div key={idx} className="border-r border-b border-gray-200 dark:border-gray-800 h-full">
                <BusinessCard {...business} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
