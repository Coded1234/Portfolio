import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image 
          src="https://images.unsplash.com/photo-1582214488219-c0ae2f1ab8cf?q=80&w=2000&auto=format&fit=crop" 
          alt="HB Mining" 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              HB Mining
            </h1>
          </div>
        </div>
      </div>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <Link href="/#portfolio" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
        
        <div className="max-w-3xl">
          <p className="text-2xl text-gray-500 font-light leading-relaxed mb-12">
            Responsible extraction and processing of valuable raw minerals and resources. Supplying the heavy industries that build our modern world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-4">Responsible Sourcing</h3>
            <p className="text-gray-500 leading-relaxed">
              We employ automated and seismically monitored operations to ensure ethical resourcing while protecting indigenous ecosystems and local worker communities.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-4">Strategic Reserves</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Providing crucial raw components for manufacturing networks. Explore our material portfolio and logistics integrations.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
                Contact Operations
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
