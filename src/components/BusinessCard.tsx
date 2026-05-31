import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

interface BusinessCardProps {
  title: string;
  description: string;
  href: string;
  tag: string;
  image?: string;
}

export default function BusinessCard({ title, description, href, tag, image }: BusinessCardProps) {
  return (
    <Link href={href} className="group block h-full bg-white relative overflow-hidden">
      {/* Base Card */}
      <div className="p-8 h-full flex flex-col relative transition-all duration-500 min-h-[300px]">
        {/* Background Image that fades in on hover (or stays visible on mobile) */}
        {image && (
          <div className="absolute inset-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Subtle dark overlay so white text remains readable over the image */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-20 flex flex-col h-full group-hover:-translate-y-2 transition-transform duration-500 ease-out">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#B89D58] mb-6">
            {tag}
          </div>
          <h3 className="text-2xl font-playfair font-medium text-white md:text-gray-900 group-hover:text-white transition-colors duration-300 mb-4">{title}</h3>
          <p className="text-gray-200 md:text-gray-500 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          <div className="flex items-center text-sm font-semibold text-white md:text-gray-900 group-hover:text-white mt-auto opacity-100 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            Discover {title}
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
