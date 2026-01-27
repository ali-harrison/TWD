import Link from "next/link";

// Editable constants
const PROJECTS = [
  {
    name: "Hinewaa Ltd",
    url: "#",
    tag: "Strategy Consultancy",
    description:
      "A modern website for a leading strategy consultancy firm. Features include a dynamic project showcase and client testimonials system.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "E-Commerce Platform",
    url: "#",
    tag: "E-commerce",
    description:
      "Full-featured e-commerce platform with inventory management, secure checkout, and customer portal. Built for scalability and performance.",
    techStack: ["Next.js", "TypeScript", "Stripe", "Prisma"],
  },
  {
    name: "SaaS Landing Page",
    url: "#",
    tag: "Landing Page",
    description:
      "High-converting landing page for a SaaS product launch. Includes animated sections and integrated newsletter signup with analytics tracking.",
    techStack: ["Next.js", "GSAP", "Tailwind CSS"],
  },
  {
    name: "Custom Web Application",
    url: "#",
    tag: "Web App",
    description:
      "Custom web application for workflow automation. Features real-time collaboration, role-based access control, and comprehensive reporting.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

export default function Work() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-[10%] md:px-[10%] sm:px-6 pt-32">
      {/* Page heading */}
      <h1 className="font-mono text-xl uppercase tracking-wider mb-[8vh]">
        PROJECTS WE&apos;VE SHIPPED_
      </h1>

      {/* Simple vertical list */}
      <div className="space-y-0 mb-[15vh]">
        {PROJECTS.map((project, index) => (
          <div key={project.name}>
            <Link
              href={project.url}
              className="group block py-12 hover:text-gray transition-all duration-200"
            >
              {/* Project name and arrow */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[clamp(32px,5vw,56px)] font-medium">
                  {project.name}
                </h2>
                <span className="text-[clamp(32px,5vw,56px)] transition-transform duration-200 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Tag */}
              <p className="font-mono text-sm uppercase tracking-wider text-gray mb-4">
                {project.tag}
              </p>

              {/* Description */}
              <p className="text-lg leading-relaxed max-w-[700px] mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>

            {/* Divider */}
            {index < PROJECTS.length - 1 && <div className="h-px bg-white/15" />}
          </div>
        ))}
      </div>
    </div>
  );
}
