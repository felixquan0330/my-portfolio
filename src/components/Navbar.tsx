'use client'

interface NavbarProps {
  activePage: string
  setActivePage: (page: string) => void
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar bg-eerie-black-2 border border-jet rounded-t-[20px] p-4 shadow-shadow-1">
      <ul className="navbar-list flex flex-wrap justify-center gap-4">
        {navItems.map((item) => (
          <li key={item.id} className="navbar-item">
            <button
              className={`navbar-link px-4 py-2 rounded-lg transition-colors ${
                activePage === item.id
                  ? 'active text-aqua-teal-1 bg-jet'
                  : 'text-light-gray hover:text-aqua-teal-1'
              }`}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
} 