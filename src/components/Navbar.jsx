import { profile } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-gray-900 dark:text-gray-100">
          {profile.name}
        </a>
        <ul className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gray-900 dark:hover:text-gray-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
