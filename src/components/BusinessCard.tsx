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
    <Link href={href} className="group block h-full">
      <div className="border border-gray-200 dark:border-gray-800 p-8 h-full flex flex-col hover:border-foreground transition-all duration-300 relative overflow-hidden bg-white dark:bg-black">
        {image && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 z-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale"
            />
          </div>
        )}
        <div className="relative z-10 flex flex-col h-full">
          <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 group-hover:text-foreground transition-colors">
            {tag}
          </div>
          <h3 className="text-2xl font-medium tracking-tight mb-4">{title}</h3>
          <p className="text-gray-500 mb-8 flex-grow">{description}</p>

          <div className="flex items-center text-sm font-medium mt-auto group-hover:underline underline-offset-4">
            Discover {title}
            <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
