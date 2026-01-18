'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
            <div className="container-fluid light-green-bg">
                <a className="name-home afacad-font" href="/">
                    <Image src="logo.svg" alt="NederLees Logo" width="50" height="50" />
                    NederLees
                </a>              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse raleway-font nav-links" id="navbarNav">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <Link
                                href="/"
                                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                href="/readers"
                                className={`nav-link ${pathname === '/readers' ? 'active' : ''}`}
                            >
                                Readers
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                href="/about"
                                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                            >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                href="/contact"
                                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
