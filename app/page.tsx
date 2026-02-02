'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    // Custom easing - organic, non-linear motion
    const customEase = 'cubic-bezier(0.87, 0, 0.13, 1)'

    // Hero animation - fade in with slight upward movement
    if (heroRef.current) {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: customEase,
        delay: 0.2,
      })
    }

    // Stats section - scroll-triggered reveal with stagger
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item')
      gsap.from(statItems, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.08,
        ease: customEase,
      })
    }

    // Work section - scroll-triggered reveal (triggers earlier)
    if (workRef.current) {
      gsap.from(workRef.current.children, {
        scrollTrigger: {
          trigger: workRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.12,
        ease: customEase,
      })
    }

    // Project items - scroll-triggered staggered reveal (triggers earlier)
    projectRefs.current.forEach((project, index) => {
      if (project) {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: -20,
          duration: 0.8,
          delay: index * 0.08,
          ease: customEase,
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="w-screen min-h-screen px-5 pt-24">
      {/* Hero Section - Positioned at 55-65vh with enhanced typography */}
      <section
        ref={heroRef}
        className="flex flex-col justify-center"
        style={{ minHeight: '60vh' }}
      >
        <h1
          className="font-display font-bold uppercase text-[80px] md:text-[120px] lg:text-[180px] leading-[0.85] mb-8"
          style={{ letterSpacing: '-0.03em' }}
        >
          DIGITAL
          <br />
          SOLUTIONS,
          <br />
          CULTURAL DEPTH
        </h1>

        {/* Positioning Statement with improved line height */}
        <p
          className="text-[32px] md:text-[40px] max-w-[500px] font-light"
          style={{ lineHeight: '1.25em', letterSpacing: '-0.01em' }}
        >
          <span className="inline-block mr-3">→</span>
          Creating meaningful digital experiences that honor culture and drive
          results
        </p>
      </section>

      {/* Statistics Section with scroll-triggered animation */}
      <section ref={statsRef} className="mt-[8vh] mb-[8vh]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item space-y-2">
              <div
                className="font-mono text-4xl md:text-5xl font-bold"
                style={{ letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </div>
              <div
                className="font-mono text-xs uppercase text-gray"
                style={{ letterSpacing: '0.05em' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section with scroll-triggered reveal */}
      <section
        ref={workRef}
        className="border-t border-white pt-12 pb-24"
        style={{ marginTop: '10vh' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: About/What We Do */}
          <div>
            <h2
              className="font-mono text-sm uppercase mb-8 text-gray"
              style={{ letterSpacing: '0.08em' }}
            >
              WHAT WE DO_
            </h2>
            <div
              className="space-y-6 text-lg md:text-xl"
              style={{ lineHeight: '1.5em' }}
            >
              <p>
                We are a digital studio based in Aotearoa, specializing in
                creating meaningful digital experiences that honor culture and
                drive results.
              </p>
              <p className="text-gray">
                Our work spans brand identity, web development, and digital
                strategy-always with a focus on craft, clarity, and connection.
              </p>
              <p className="text-gray">
                We partner with businesses, organizations, and communities to
                build digital presences that are as functional as they are
                beautiful.
              </p>
            </div>
          </div>

          {/* Right: Projects List with enhanced hover interactions */}
          <div>
            <h2
              className="font-mono text-sm uppercase mb-8 text-gray"
              style={{ letterSpacing: '0.08em' }}
            >
              SELECTED WORK (2024-2026)_
            </h2>
            <div className="space-y-0">
              {PROJECTS.map((project, index) => {
                const isExternal = project.url.startsWith('http')
                return (
                  <Link
                    key={project.name}
                    ref={(el) => {
                      projectRefs.current[index] = el
                    }}
                    href={project.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group block w-full border-b border-white/10 py-6 hover:bg-white/5"
                    style={{
                      transition: 'all 0.6s cubic-bezier(0.87, 0, 0.13, 1)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-grow">
                        <div className="flex items-baseline gap-4 mb-2">
                          <h3
                            className="text-xl md:text-2xl font-medium group-hover:translate-x-2"
                            style={{
                              transition:
                                'transform 0.6s cubic-bezier(0.87, 0, 0.13, 1)',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {project.name}
                          </h3>
                          <span
                            className="font-mono text-xs uppercase text-gray"
                            style={{ letterSpacing: '0.05em' }}
                          >
                            {project.tag}
                          </span>
                        </div>
                        <p
                          className="text-gray text-sm md:text-base"
                          style={{ lineHeight: '1.5em' }}
                        >
                          {project.description}
                        </p>
                      </div>

                      <span
                        className="text-xl md:text-2xl flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{
                          transition:
                            'transform 0.6s cubic-bezier(0.87, 0, 0.13, 1)',
                        }}
                      >
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
