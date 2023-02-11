'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from '../app/server-constants'
import styles from '../styles/header.module.css'

interface NavItem {
  label: string
  path: string
}

const Header = () => {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
  ]

  return (
    <div className={styles.contents}>
      <header className={styles.header}>
        <h1>
          <Link href="/">{NEXT_PUBLIC_SITE_TITLE}</Link>
        </h1>

        <ul className={styles.naviContent}>
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link href={path} className={pathname === path ? 'active' : null}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <div
        style={{
          width: '100%',
          height: '352px',
          backgroundColor: '#fc8b534b',
        }}
      ></div>
    </div>
  )
}

export default Header
