'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [time, setTime] = useState<string>('')

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white">
      <div className="px-8 py-6">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Brand Name */}
          <Link
            href="/"
            className="font-display font-bold text-base uppercase tracking-tight hover:text-gray transition-colors duration-150 flex-shrink-0"
          >
            TE WAIRAMA DIGITAL_
          </Link>

          {/* Time + Location */}
          <div
            className="font-mono text-xs uppercase text-gray/60 flex-shrink-0"
            style={{ letterSpacing: '0.05em' }}
          >
            {time || '--:--'} / AOTEAROA NZ
          </div>

          {/* Status Text */}
          <div className="hidden md:block font-mono text-xs uppercase tracking-wider text-white flex-shrink-0">
            TEMPORARY WEBSITE
          </div>

          {/* Prominent Center Text */}
          <div className="hidden lg:block font-mono text-base md:text-lg uppercase tracking-wide text-white flex-grow text-center">
            BOOKING PROJECTS FOR FEB'26
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-auto font-mono text-xs uppercase tracking-wider border border-white px-4 md:px-6 py-2 md:py-3 hover:bg-white hover:text-black transition-all duration-200 flex-shrink-0 whitespace-nowrap"
          >
            ↘BOOK CALL
          </Link>
        </div>
      </div>
    </header>
  )
}
