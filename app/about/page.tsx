// Editable constants
const ABOUT = {
  story: `Te Wairama Digital is a boutique web development studio specializing in premium digital experiences.
We partner with ambitious startups and creative businesses to bring their vision to life through thoughtful design
and robust development. Every project is crafted with attention to detail, modern best practices, and a focus on
delivering measurable results.`,
};

const SERVICES = [
  {
    name: "Landing Pages",
    price: "$400-800",
    description: "High-converting single-page sites perfect for launches and campaigns",
  },
  {
    name: "E-commerce",
    price: "$1500-5000",
    description: "Complete online stores with payment processing and inventory management",
  },
  {
    name: "Custom Web Apps",
    price: "Quote",
    description: "Tailored solutions for complex business requirements and workflows",
  },
];

const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Node.js",
  "PostgreSQL",
  "Vercel",
];

export default function About() {
  return (
    <div className="w-full px-8 max-w-7xl mx-auto py-16 md:py-24">
      {/* Page heading */}
      <h1 className="text-6xl font-bold mb-16">About</h1>

      {/* Story section */}
      <section className="max-w-3xl mb-24">
        <p className="text-base leading-relaxed whitespace-pre-line">{ABOUT.story}</p>
      </section>

      {/* Services section */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.name} className="border border-white p-8">
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-xl font-bold text-gray mb-4">{service.price}</p>
              <p className="text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack section */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {TECH_STACK.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 border border-white bg-white text-black font-bold"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
