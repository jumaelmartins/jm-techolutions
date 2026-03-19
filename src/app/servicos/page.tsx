'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { Code2, Zap, Link2, Rocket, BookOpen, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import styles from './page.module.scss';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={32} color="white" />,
  Zap: <Zap size={32} color="white" />,
  Link2: <Link2 size={32} color="white" />,
  Rocket: <Rocket size={32} color="white" />,
  BookOpen: <BookOpen size={32} color="white" />,
};

const VISUAL_ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={72} color="rgba(99,91,255,0.25)" />,
  Zap: <Zap size={72} color="rgba(0,212,255,0.25)" />,
  Link2: <Link2 size={72} color="rgba(138,124,255,0.25)" />,
  Rocket: <Rocket size={72} color="rgba(255,122,217,0.25)" />,
  BookOpen: <BookOpen size={72} color="rgba(99,91,255,0.25)" />,
};

const ACCENT_COLORS = ['#635BFF', '#00D4FF', '#8A7CFF', '#FF7AD9', '#635BFF'];
const VISUAL_GRADIENTS = [
  'linear-gradient(135deg, rgba(99,91,255,0.12), rgba(138,124,255,0.08))',
  'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(99,91,255,0.08))',
  'linear-gradient(135deg, rgba(138,124,255,0.12), rgba(0,212,255,0.08))',
  'linear-gradient(135deg, rgba(255,122,217,0.1), rgba(99,91,255,0.08))',
  'linear-gradient(135deg, rgba(99,91,255,0.12), rgba(255,122,217,0.06))',
];

type Service = {
  id: number; icon: string; title: string; description: string;
  features: string[]; techs: string[]; offers: string[];
  order: number; active: boolean;
};

export default function ServicosPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/api/content/services')
      .then(r => r.json())
      .then(data => setServices(data.filter((s: Service) => s.active).sort((a: Service, b: Service) => a.order - b.order)));
  }, []);

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroBg} />
          <div className={styles.heroDots} />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.sectionBadge}>
              <span className={`sparkle-twinkle ${styles.sparkleIcon}`}><Sparkles size={13} color="var(--color-accent-purple)" /></span>
              <span className={styles.badgeText}>Nossos Serviços</span>
            </div>
            <h1 className={styles.heroTitle}>
              Soluções completas em{' '}
              <span className="gradient-text">Tecnologia</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Do MVP à modernização de sistemas legados, oferecemos o que sua empresa precisa para crescer
            </p>
            <Link href="/contato">
              <button className={styles.heroCtaButton}>
                Fale com um especialista <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.servicesList}>
              {services.map((service, i) => {
                const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
                return (
                  <div
                    key={service.id}
                    className={styles.serviceRow}
                    style={{ '--card-accent': accent } as React.CSSProperties}
                  >
                    {/* Content */}
                    <div
                      className={styles.serviceContent}
                      style={{ order: i % 2 === 0 ? 1 : 2 }}
                    >
                      <div
                        className={`icon-glow-pulse ${i % 2 === 0 ? 'icon-float' : 'icon-float-delay-1'} ${styles.serviceIconBox}`}
                      >
                        {ICON_MAP[service.icon] || <Code2 size={32} color="white" />}
                      </div>
                      <h2 className={styles.serviceTitle}>{service.title}</h2>
                      <p className={styles.serviceDesc}>{service.description}</p>

                      <p className={styles.offersLabel}>O que oferecemos:</p>
                      <div className={styles.offersGrid}>
                        {service.offers.map((offer, j) => (
                          <div key={j} className={styles.offerItem}>
                            <CheckCircle2 size={15} color={accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span className={styles.offerText}>{offer}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className={styles.techsLabel}>TECNOLOGIAS:</p>
                        <div className={styles.techsList}>
                          {service.techs.map((tech) => (
                            <span key={tech} className={styles.techPill}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={styles.serviceVisual}
                      style={{ order: i % 2 === 0 ? 2 : 1 }}
                    >
                      <div
                        className={styles.serviceVisualBox}
                        style={{ background: VISUAL_GRADIENTS[i % VISUAL_GRADIENTS.length] }}
                      >
                        <div className={styles.serviceVisualBg} />
                        <div className={styles.serviceVisualOrb} />
                        <div className={styles.serviceVisualIcon}>
                          {VISUAL_ICON_MAP[service.icon] || <Code2 size={72} color="rgba(99,91,255,0.25)" />}
                        </div>
                        <div className={styles.serviceVisualCorner}>
                          {service.techs[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBanner}>
              <div className={styles.ctaBannerBg} />
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>
                  Não encontrou o que <span className="gradient-text">precisa?</span>
                </h2>
                <p className={styles.ctaSubtitle}>
                  Entre em contato e vamos criar uma solução personalizada para o seu negócio.
                </p>
                <Link href="/contato">
                  <button className={styles.ctaButton}>
                    Falar com especialista <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
