'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2 } from 'lucide-react';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={[styles.header, scrolled && styles.headerScrolled].filter(Boolean).join(' ')}>
      <div className={`container ${styles.navInner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoIcon}>
            <Code2 size={18} color="white" />
          </div>
          <span className={styles.logoText}>
            JMTech<span className={styles.logoAccent}>Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[styles.navLink, pathname === link.href && styles.navLinkActive].filter(Boolean).join(' ')}
            >
              {link.label}
              {pathname === link.href && <span className={styles.activeIndicator} />}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contato" className={styles.ctaWrapper}>
          <button className={styles.ctaButton}>
            Solicitar Orçamento
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[styles.mobileNavLink, pathname === link.href && styles.mobileNavLinkActive].filter(Boolean).join(' ')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contato" className={styles.mobileCta}>
            <button className={styles.mobileCtaButton}>
              Solicitar Orçamento
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
