import Link from 'next/link'

// Editable constants
const COMPANY_NAME = 'Te Wairama Digital'
const NZBN = '9429053152510'
const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ali-harrison' },
  { label: 'LinkedIn', href: 'https://linkedin.com/ali-harrison' },
  { label: 'Email', href: 'mailto:tewairama@proton.me' },
]

export default function Footer() {
  return (
    <footer className="w-full px-8 py-16 max-w-7xl mx-auto border-t border-white mt-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Company info */}
        <div className="text-sm text-gray">
          {COMPANY_NAME} • NZBN: {NZBN}
        </div>

        {/* Links */}
        <nav className="flex gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-gray transition-colors"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
