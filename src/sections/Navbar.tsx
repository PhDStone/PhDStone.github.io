import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: '关于我' },
  { href: '#education', label: '教育背景' },
  { href: '#research', label: '科研项目' },
  { href: '#publications', label: '论文成果' },
  { href: '#skills', label: '专业技能' },
  { href: '#contact', label: '联系方式' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#top" className="text-lg font-bold tracking-wide text-slate-900">
          杨欣磊
          <span className="ml-2 text-xs font-normal text-teal-600 hidden sm:inline">
            Materials R&D
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-slate-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-teal-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-4 space-y-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-slate-700">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
