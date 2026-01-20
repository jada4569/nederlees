'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar navbar-expand-lg light-green-bg">
      <div className="container-fluid">

        <Link href="/" className="name-home afacad-font navbar-brand d-flex align-items-center gap-2">
          <Image src="/logo.svg" alt="NederLees Logo" width={50} height={50} />
          NederLees
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse raleway-font" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">

            {[
              ['/', 'Home'],
              ['/readers', 'Readers'],
              ['/about', 'About'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  )
}
