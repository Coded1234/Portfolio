import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 bg-clip-text">
          Contact Us
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
          Reach out to the HappyBoy Group. Whether you're interested in partnerships, inquiries, or media relations, our team is ready to assist you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-medium tracking-tight mb-6">Headquarters</h3>
            <address className="not-italic text-gray-500 space-y-2 mb-8">
              <p>100 HappyBoy Avenue</p>
              <p>Business District</p>
              <p>Global City, 10001</p>
            </address>

            <h3 className="text-xl font-medium tracking-tight mb-6">Direct Lines</h3>
            <div className="text-gray-500 space-y-2 mb-8">
              <p>General: +1 (555) 000-0000</p>
              <p>Press: media@happyboygroup.com</p>
              <p>Careers: careers@happyboygroup.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" className="mt-1 block w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors" placeholder="Jane Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" className="mt-1 block w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors" placeholder="jane@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <select id="subject" className="mt-1 block w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors text-gray-500">
                  <option>General Inquiry</option>
                  <option>Happyboy Collection</option>
                  <option>HappyBoy Farms</option>
                  <option>Happyboy Homes</option>
                  <option>Nick Phones</option>
                  <option>HappyBoy Automobile</option>
                  <option>HB Oil and Gas</option>
                  <option>HB Mining</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors resize-none" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}