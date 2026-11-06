export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.happyboy.website";

export const sitePages = [
  { path: "/", title: "Happy Boy Company Limited", description: "A diversified corporation based in Accra, Ghana." },
  { path: "/about", title: "About Happy Boy Company Limited", description: "Learn about Happy Boy Company Limited." },
  { path: "/collection", title: "Happy Boy Collection", description: "Fashion and luxury goods." },
  { path: "/farms", title: "Happy Boy Farms", description: "Sustainable agriculture and livestock." },
  { path: "/homes", title: "Happy Boy Homes", description: "Premium real estate development." },
  { path: "/nick-phones", title: "Nick Phones", description: "New, pre-owned, and rental iPhones." },
  { path: "/automobile", title: "Happy Boy Automobile", description: "Vehicle distribution, sales, and servicing." },
  { path: "/oil-and-gas", title: "HB Oil and Gas", description: "Operational petrol and diesel fuel stations." },
  { path: "/mining", title: "HB Mining", description: "Responsible mineral extraction and processing." },
  { path: "/contact", title: "Contact Happy Boy Company Limited", description: "Get in touch with Happy Boy Company Limited." },
] as const;
