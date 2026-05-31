import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import FadeIn from "@/components/FadeIn";
import LightboxGallery from '@/components/LightboxGallery';

// Data for our dynamic category pages
const categoryData = {
    "ready-to-wear": {
        title: "Ready-to-Wear",
        subtitle: "Elevated everyday essentials.",
        heroImg: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=2000&auto=format&fit=crop",
        description: "Our Ready-to-Wear collection redefines modern luxury by weaving together timeless tailoring and contemporary street aesthetics. Each garment is meticulously crafted in renowned European ateliers using only the finest sustainable fabrics. Expect sharp silhouettes, bespoke detailing, and an unapologetic approach to everyday elegance.",
        spotlight: {
            name: "The Monarch Trench",
            desc: "A masterclass in tailoring. Crafted from double-faced cashmere, featuring our signature gold-accent buttons and a bespoke silk lining.",
            img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
            price: "GHS 2,450"
        },
        gallery: [
            "https://images.unsplash.com/photo-1512436990141-65c02dc39bc1?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550614000-4b95d4aa0405?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop"
        ]
    },
    "sneakers": {
        title: "Sneakers & Footwear",
        subtitle: "Luxury athletic silhouettes.",
        heroImg: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=2000&auto=format&fit=crop",
        description: "Bridging the gap between high fashion and vibrant sneaker culture, our footwear collection is crafted using premium Italian leathers and advanced technical soles. From sleek, minimalist low-tops to structurally complex statement sneakers, every pair is designed for maximum comfort without compromising edge.",
        spotlight: {
            name: "Aero-Runner 01",
            desc: "Italian calfskin meets aerodynamic design. A sneaker built for the avant-garde collector.",
            img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200&auto=format&fit=crop",
            price: "GHS 850"
        },
        gallery: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop"
        ]
    },
    "timepieces": {
        title: "Luxury Timepieces",
        subtitle: "Precision engineering meets timeless elegance.",
        heroImg: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2000&auto=format&fit=crop",
        description: "The Happy Boy Watch Collection stands at the intersection of haute horlogerie and contemporary design. Engineered with meticulous precision and powered by Swiss-made mechanical movements, our timepieces are encased in advanced materials like titanium, ceramic, and rose gold. A true collector's statement.",
        spotlight: {
            name: "The Chronograph Ref. 01",
            desc: "Housed in brushed titanium with a skeletonized dial revealing the intricate in-house automatic caliber within.",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
            price: "GHS 14,000"
        },
        gallery: [
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508656919643-98781ae2d5ff?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612817288484-9bc08ab34f76?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1614164185128-f4cc39ebcc25?q=80&w=800&auto=format&fit=crop"
        ]
    },
    "jewelry": {
        title: "Fine Jewelry",
        subtitle: "Bespoke diamond and gold mastery.",
        heroImg: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop",
        description: "Our fine jewelry encapsulates the essence of the Happy Boy legacy. Handcrafted by master jewelers, the collection features ethically sourced VVS diamonds set in 18k solid gold and platinum. From statement heavy chains to delicate iced-out pendants, these pieces are designed to be heirlooms spanning generations.",
        spotlight: {
            name: "Eternity Diamond Chain",
            desc: "18k solid yellow gold set with 45 carats of VVS diamonds, meticulously hand-placed in Milan.",
            img: "https://images.unsplash.com/photo-1599643478524-fb66f7f32997?q=80&w=1200&auto=format&fit=crop",
            price: "GHS 28,500"
        },
        gallery: [
            "https://images.unsplash.com/photo-1599643477874-dc81cbd21966?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1603561591411-0a60477efca5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596944924616-7b565aebce48?q=80&w=800&auto=format&fit=crop"
        ]
    }
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // ensure the slug exists in our predefined data
    const data = categoryData[slug as keyof typeof categoryData];
    if (!data) {
        notFound();
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-white text-gray-900 pb-32">
            {/* Category Hero */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] min-h-[320px] sm:min-h-[500px] overflow-hidden group">
                <Image
                    src={data.heroImg}
                    alt={data.title}
                    fill
                    className="object-cover scale-105 duration-[20000ms] ease-out group-hover:scale-125"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                />
                {/* Film grain overlay */}
                <div className="absolute inset-0 bg-noise z-0 mix-blend-overlay opacity-20 pointer-events-none"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 flex flex-col justify-end z-10 transition-colors duration-1000 group-hover:from-black/95">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
                        <FadeIn>
                            {/* Elegant Breadcrumbs */}
                            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/50 mb-8">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span>/</span>
                                <Link href="/collection" className="hover:text-white transition-colors">Collection</Link>
                                <span>/</span>
                                <span className="text-[#B89D58]">{data.title}</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-playfair text-white mb-4">
                                {data.title}
                            </h1>
                            <p className="text-white/80 text-lg uppercase tracking-widest font-light">
                                {data.subtitle}
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Glide Arrow */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20 pointer-events-none">
                    <span className="text-white/60 text-xs tracking-widest uppercase mb-2 font-semibold">Scroll</span>
                    <ArrowDownIcon className="text-white/60 w-4 h-4" />
                </div>
            </div>

            {/* Description Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
                <FadeIn delay={200}>
                    <div className="w-12 h-[1px] bg-[#B89D58] mx-auto mb-10"></div>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-10">
                        {data.description}
                    </p>
                    <div className="w-12 h-[1px] bg-[#B89D58] mx-auto mt-10"></div>
                </FadeIn>
            </section>

            {/* Signature Spotlight Piece */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-32">
                <div className="flex flex-col lg:flex-row items-center relative">
                    <FadeIn delay={200} className="relative w-full lg:w-1/2 h-[320px] md:h-[500px] lg:h-[700px] z-0">
                        <Image
                            src={data.spotlight.img}
                            fill
                            className="object-cover"
                            alt={data.spotlight.name}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                            loading="lazy"
                        />
                        {/* Subtle luxury border overlay */}
                        <div className="absolute inset-4 border border-white/50 pointer-events-none mix-blend-overlay"></div>
                    </FadeIn>

                    <FadeIn delay={400} className="lg:w-1/2 z-10 lg:-ml-16 mt-8 lg:mt-0 relative">
                        <div className="bg-white p-8 lg:p-16 shadow-2xl border border-gray-100">
                            <span className="text-[#B89D58] text-sm uppercase font-bold tracking-widest mb-4 block">Signature Piece</span>
                            <h3 className="text-4xl md:text-5xl font-playfair mb-6">{data.spotlight.name}</h3>
                            <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                                {data.spotlight.desc}
                            </p>
                            <div className="flex items-center gap-6">
                                <span className="text-2xl font-mono text-gray-900">{data.spotlight.price}</span>
                                <Link href="/contact" className="inline-block border border-gray-900 bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-colors text-xs font-semibold tracking-widest uppercase px-6 py-3">
                                    Inquire Now
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Dynamic Image Gallery Grid */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <FadeIn>
                    <div className="mb-16 text-center">
                        <span className="text-gray-400 text-sm tracking-widest uppercase font-semibold block mb-4">Complete Series</span>
                        <h2 className="text-4xl font-playfair">The Gallery</h2>
                        <div className="w-8 h-[1px] bg-[#B89D58] mx-auto mt-6"></div>
                    </div>
                </FadeIn>
                <LightboxGallery gallery={data.gallery} title={data.title} />
            </section>

            {/* Footer CTA */}
            <section className="mt-32 text-center">
                <FadeIn>
                    <h2 className="text-3xl font-playfair mb-6">Interested in a specific piece?</h2>
                    <Link href="/contact" className="inline-flex items-center gap-2 border border-gray-900 bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-colors text-[13px] font-semibold tracking-wider uppercase px-10 py-5">
                        Contact Boutique <span className="text-lg leading-none">&rarr;</span>
                    </Link>
                </FadeIn>
            </section>
        </div>
    );
}