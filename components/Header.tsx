'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function Header() {
  const [time, setTime] = useState<string>('')
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Animate header on mount with stagger
    if (headerRef.current) {
      const elements = headerRef.current.querySelectorAll('.header-item')
      gsap.from(elements, {
        opacity: 0,
        y: -10,
        duration: 0.8,
        stagger: 0.05,
        ease: 'cubic-bezier(0.87, 0, 0.13, 1)',
        delay: 0.1,
      })
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white">
      <div className="px-8 py-6">
        <div ref={headerRef} className="flex items-center gap-4 md:gap-8">
          {/* Brand Name */}
          <Link
            href="/"
            className="header-item font-display font-bold text-base uppercase hover:text-gray flex-shrink-0"
            style={{
              letterSpacing: '-0.02em',
              transition: 'color 0.6s cubic-bezier(0.87, 0, 0.13, 1)',
            }}
          >
            TE WAIRAMA DIGITAL_
          </Link>

          {/* Time + Location */}
          <div
            className="header-item font-mono text-xs uppercase text-gray/60 flex-shrink-0"
            style={{ letterSpacing: '0.05em' }}
          >
            {time || '--:--'} / AOTEAROA NZ
          </div>

          {/* Status Text */}
          <div
            className="header-item hidden md:block font-mono text-xs uppercase text-white flex-shrink-0"
            style={{ letterSpacing: '0.05em' }}
          >
            TEMPORARY WEBSITE
          </div>

          {/* Prominent Center Text */}
          <div
            className="header-item hidden lg:block font-mono text-base md:text-lg uppercase text-white flex-grow text-center"
            style={{ letterSpacing: '0.02em' }}
          >
            BOOKING PROJECTS FOR FEB'26
          </div>

          {/* CTA Button with enhanced hover */}
          <Link
            href="https://calendly.com/tewairama-proton/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="header-item ml-auto font-mono text-xs uppercase border border-white px-4 md:px-6 py-2 md:py-3 hover:bg-white hover:text-black flex-shrink-0 whitespace-nowrap"
            style={{
              letterSpacing: '0.05em',
              transition: 'all 0.6s cubic-bezier(0.87, 0, 0.13, 1)',
            }}
          >
            ↘BOOK CALL
          </Link>
        </div>
      </div>
    </header>
  )
}
