import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      <div className="relative w-full h-[45vh] sm:h-[50vh] min-h-[320px] sm:min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          alt="Happy Boy Farms"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              Happy Boy Farms
            </h1>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <Link href="/#portfolio" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        <div className="max-w-3xl">
          <p className="text-2xl text-gray-500 font-light leading-relaxed mb-12">
            Leading providers of high-quality livestock and poultry. From premium cattle and pork to extensive organic poultry operations, we embrace humane, modern farming techniques to feed the future responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-4">Ethical Livestock & Poultry</h3>
            <p className="text-gray-500 leading-relaxed">
              Our farms specialize in premium cows and pigs, alongside extensive poultry operations. We utilize advanced veterinary monitoring, spacious free-range grazing, and organic feed to ensure the highest standards of animal welfare and meat quality.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-4">Global Distribution</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our specialized cold-chain logistics ensure that farm-fresh poultry and premium meat cuts reach international markets securely. Quality is maintained from the farm to the table.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
                Partner with Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
