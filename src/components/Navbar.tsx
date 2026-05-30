import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              HappyBoy Group
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/#portfolio" className="text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
              Our Businesses
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
