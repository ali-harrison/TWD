import Link from 'next/link'

const PROJECTS = [
  {
    name: 'Hinewaa Ltd',
    tag: 'BRANDING, DESIGN, DEV',
    description:
      'Complete brand identity and digital presence for indigenous business collective',
    url: 'https://www.hinewaa.com/',
  },
  {
    name: 'Client Portal',
    tag: 'DEVELOPMENT',
    description:
      'Secure project tracker with phases, files, comments, and authentication.',
    url: 'https://github.com/ali-harrison/Client-Portal',
  },
  {
    name: 'Moana Insights',
    tag: 'DEVELOPMENT',
    description:
      'Ocean surveyor platform with live cameras, mapping, and real-time data.',
    url: 'https://github.com/ali-harrison/moana-insights',
  },
  {
    name: 'Te Wairama Digital',
    tag: 'BRANDING',
    description:
      'Bespoke web application with real-time data processing and analytics',
    url: '/work',
  },
]

const STATS = [
  { label: 'PROJECTS DELIVERED', value: '11' },
  { label: 'YEARS EXPERIENCE', value: '3' },
  { label: 'CLIENT SATISFACTION', value: '100%' },
  { label: 'COUNTRIES SERVED', value: '3' },
]

export default function Home() {
  return (
    <div className="w-screen min-h-screen px-5 pt-24">
      {/* Hero Section - Positioned at 55-65vh */}
      <section
        className="flex flex-col justify-center"
        style={{ minHeight: '60vh' }}
      >
        <h1 className="font-display font-bold uppercase tracking-tighter text-[80px] md:text-[120px] lg:text-[180px] leading-[0.85] mb-8">
          DIGITAL
          <br />
          SOLUTIONS,
          <br />
          CULTURAL DEPTH
        </h1>

        {/* Positioning Statement */}
        <p className="text-[32px] md:text-[40px] leading-tight max-w-[500px] font-light">
          <span className="inline-block mr-3">→</span>
          Creating meaningful digital experiences that honor culture and drive
          results
        </p>
      </section>

      {/* Statistics Section */}
      <section className="mt-[8vh] mb-[8vh]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="font-mono text-4xl md:text-5xl font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section
        className="border-t border-white pt-12 pb-24"
        style={{ marginTop: '10vh' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: About/What We Do */}
          <div>
            <h2 className="font-mono text-sm uppercase tracking-wider mb-8 text-gray">
              WHAT WE DO_
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p>
                We are a digital studio based in Aotearoa, specializing in
                creating meaningful digital experiences that honor culture and
                drive results.
              </p>
              <p className="text-gray">
                Our work spans brand identity, web development, and digital
                strategy—always with a focus on craft, clarity, and connection.
              </p>
              <p className="text-gray">
                We partner with businesses, organizations, and communities to
                build digital presences that are as functional as they are
                beautiful.
              </p>
            </div>
          </div>

          {/* Right: Projects List */}
          <div>
            <h2 className="font-mono text-sm uppercase tracking-wider mb-8 text-gray">
              SELECTED WORK (2024-2026)_
            </h2>
            <div className="space-y-0">
              {PROJECTS.map((project) => {
                const isExternal = project.url.startsWith('http')
                return (
                  <Link
                    key={project.name}
                    href={project.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group block w-full border-b border-white/10 py-6 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-grow">
                        <div className="flex items-baseline gap-4 mb-2">
                          <h3 className="text-xl md:text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                            {project.name}
                          </h3>
                          <span className="font-mono text-xs uppercase tracking-wider text-gray">
                            {project.tag}
                          </span>
                        </div>
                        <p className="text-gray text-sm md:text-base">
                          {project.description}
                        </p>
                      </div>

                      <span className="text-xl md:text-2xl flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
