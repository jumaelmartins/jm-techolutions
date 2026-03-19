import Link from 'next/link';
import { Code2, Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import styles from './Footer.module.scss';

const footerLinks = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  services: [
    { label: 'Desenvolvimento Web', href: '/servicos' },
    { label: 'Automação de Processos', href: '/servicos' },
    { label: 'Integrações e APIs', href: '/servicos' },
    { label: 'MVP para Startups', href: '/servicos' },
    { label: 'Consultoria Técnica', href: '/servicos' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <Link href="/" className={styles.brandLink}>
              <div className={styles.logoIcon}>
                <Code2 size={18} color="white" />
              </div>
              <span className={styles.brandName}>
                JMTech<span className={styles.brandAccent}>Solutions</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Desenvolvimento de sistemas sob medida, automações e integrações para empresas que buscam inovação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className={styles.heading}>Links</h4>
            <ul className={styles.list}>
              {footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.heading}>Serviços</h4>
            <ul className={styles.list}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.heading}>Contato</h4>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <Mail size={14} color="var(--color-primary)" />
                <span className={styles.contactText}>contato@jmtechsolutions.com.br</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={14} color="var(--color-primary)" />
                <span className={styles.contactText}>(11) 99999-9999</span>
              </li>
              <li className={styles.socialList}>
                <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="GitHub" className={styles.socialLink}>
                  <Github size={18} />
                </a>
                <a href="#" aria-label="Instagram" className={styles.socialLink}>
                  <Instagram size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 JMTechSolutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
