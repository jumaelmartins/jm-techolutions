'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedCounter from './components/AnimatedCounter';
import ScrollTop from './components/ScrollTop';
import {
  Code2, Zap, Link2, Rocket, ArrowRight, CheckCircle2,
  Star, ChevronRight, Globe, Cpu, Database, Cloud,
  BookOpen, Sparkles, TrendingUp
} from 'lucide-react';
import styles from './page.module.scss';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={28} color="white" />,
  Zap: <Zap size={28} color="white" />,
  Link2: <Link2 size={28} color="white" />,
  Rocket: <Rocket size={28} color="white" />,
  BookOpen: <BookOpen size={28} color="white" />,
};

const techStack = [
  { icon: <Globe size={18} />, label: 'React' },
  { icon: <Code2 size={18} />, label: 'Next.js' },
  { icon: <Cpu size={18} />, label: 'Node.js' },
  { icon: <Database size={18} />, label: 'PostgreSQL' },
  { icon: <Cloud size={18} />, label: 'Docker' },
  { icon: <Zap size={18} />, label: 'Python' },
  { icon: <Link2 size={18} />, label: 'TypeScript' },
  { icon: <Rocket size={18} />, label: 'AWS' },
  { icon: <Globe size={18} />, label: 'GraphQL' },
  { icon: <Database size={18} />, label: 'Redis' },
];

type ServiceItem = { id: number; icon: string; title: string; description: string; features: string[]; active: boolean };
type Testimonial = { id: number; name: string; role: string; initials: string; rating: number; text: string; active: boolean };
type Stat = { id: number; value: number; suffix: string; label: string };
type ProjectItem = { id: number; tag: string; title: string; subtitle: string; results: string[]; accentColor: string; image?: string; active: boolean; order: number };

export default function Home() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [techPaused, setTechPaused] = useState(false);
  const [testimPaused, setTestimPaused] = useState(false);

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.json())
      .then(data => {
        setServices((data.services || []).filter((s: ServiceItem) => s.active).slice(0, 4));
        setTestimonials((data.testimonials || []).filter((t: Testimonial) => t.active));
        setStats(data.stats || []);
        setProjects((data.projects || []).filter((p: ProjectItem) => p.active).sort((a: ProjectItem, b: ProjectItem) => a.order - b.order).slice(0, 4));
      });
  }, []);

  return (
    <>
      <Header />
      <main>

        {/* ═══ HERO ═══ */}
        <section className={styles.heroSection}>
          <div className={styles.heroBg} />
          <div className={styles.heroDots} />

          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroGrid}>
              {/* Left */}
              <div>
                <div className={styles.heroBadge}>
                  <span className={`sparkle-twinkle ${styles.sparkleIcon}`}>
                    <Sparkles size={14} color="var(--color-accent-purple)" />
                  </span>
                  <span className={styles.badgeText}>
                    Soluções sob medida para seu negócio
                  </span>
                </div>

                <h1 className={styles.heroTitle}>
                  <span className={`gradient-text ${styles.heroTitleGradient}`}>Desenvolvimento</span>
                  <span className={styles.heroTitleLine}>de sistemas</span>
                  <span className={styles.heroTitleLine}>sob medida</span>
                </h1>

                <p className={styles.heroSubtitle}>
                  Automação e APIs para empresas que buscam inovação, eficiência e crescimento acelerado.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/contato">
                    <button className={styles.heroPrimaryBtn}>
                      Solicitar Orçamento <ArrowRight size={18} />
                    </button>
                  </Link>
                  <Link href="/projetos">
                    <button className={styles.heroSecondaryBtn}>
                      Ver Projetos
                    </button>
                  </Link>
                </div>

                {/* Stats */}
                {stats.length > 0 && (
                  <div className={styles.heroStats}>
                    {stats.map((stat) => (
                      <div key={stat.id}>
                        <div className={styles.heroStatValue}>
                          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className={styles.heroStatLabel}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right - Visual cards */}
              <div className={styles.heroVisual}>
                <div className={styles.heroCard}>
                  <div className={styles.heroCardBg} />
                  <div className={styles.heroCardGrid}>
                    {[
                      {
                        label: 'Web Dev',
                        color: 'rgba(99,91,255,0.15)', border: 'rgba(99,91,255,0.3)',
                        icon: (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '1px', fontSize: '16px', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'monospace', lineHeight: 1, userSelect: 'none' }}>
                            <span className="bracket-left">{'<'}</span>
                            <span style={{ fontSize: '9px', opacity: 0.65, margin: '0 1px' }}>/</span>
                            <span className="bracket-right">{'>'}</span>
                          </span>
                        ),
                      },
                      {
                        label: 'Automação',
                        color: 'rgba(0,212,255,0.12)', border: 'rgba(0,212,255,0.25)',
                        icon: (
                          <span className="zap-neon" style={{ display: 'flex' }}>
                            <Zap size={22} color="var(--color-accent-blue)" />
                          </span>
                        ),
                      },
                      {
                        label: 'APIs',
                        color: 'rgba(138,124,255,0.12)', border: 'rgba(138,124,255,0.25)',
                        icon: (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0', fontSize: '20px', fontWeight: 800, color: 'var(--color-accent-purple)', fontFamily: 'monospace', lineHeight: 1, userSelect: 'none' }}>
                            <span className="paren-left">{'('}</span>
                            <span style={{ fontSize: '8px', opacity: 0.5, margin: '0 2px' }}>·</span>
                            <span className="paren-right">{')'}</span>
                          </span>
                        ),
                      },
                      {
                        label: 'Startups',
                        color: 'rgba(255,122,217,0.12)', border: 'rgba(255,122,217,0.25)',
                        icon: (
                          <div style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="speed-line-1" style={{ position: 'absolute', top: '9px', left: '0px', height: '1.5px', width: '12px', background: 'linear-gradient(90deg, transparent, var(--color-accent-pink))', borderRadius: '2px' }} />
                            <div className="speed-line-2" style={{ position: 'absolute', top: '16px', left: '3px', height: '1.5px', width: '8px', background: 'linear-gradient(90deg, transparent, rgba(255,122,217,0.65))', borderRadius: '2px' }} />
                            <Rocket size={22} color="var(--color-accent-pink)" />
                            <div className="rocket-flame" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%) translateX(1px)', width: '6px', height: '8px', background: 'linear-gradient(180deg, #FF7AD9 0%, #FF5500 60%, #FFD700 100%)', borderRadius: '0 0 50% 50%', filter: 'blur(0.5px)' }} />
                          </div>
                        ),
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={styles.heroMiniCard}
                        style={{ background: item.color, border: `1px solid ${item.border}` }}
                      >
                        <div className={styles.heroMiniCardIconBox}>
                          {item.icon}
                        </div>
                        <span className={styles.heroMiniCardLabel}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code snippet decorative */}
                  <div className={styles.heroCodeSnippet}>
                    <span style={{ color: '#7E879C' }}>// </span>
                    <span style={{ color: '#635BFF' }}>JMTechSolutions</span><br />
                    <span style={{ color: '#00D4FF' }}>const</span>
                    <span style={{ color: '#FFFFFF' }}> solution </span>
                    <span style={{ color: '#7E879C' }}>= </span>
                    <span style={{ color: '#8A7CFF' }}>build</span>
                    <span style={{ color: '#FFFFFF' }}>(</span>
                    <span style={{ color: '#FF7AD9' }}>&apos;sua ideia&apos;</span>
                    <span style={{ color: '#FFFFFF' }}>);</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TECH STACK STRIP ═══ */}
        <section
          className={styles.techSection}
          onMouseEnter={() => setTechPaused(true)}
          onMouseLeave={() => setTechPaused(false)}
        >
          <div className={[styles.techScroller, techPaused && styles.techScrollerPaused].filter(Boolean).join(' ')}>
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className={styles.techPill}>
                <span className={styles.techPillIcon}>{tech.icon}</span>
                {tech.label}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesOrb} />
          <div className={`container ${styles.servicesInner}`}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionBadge}>
                <span className={`sparkle-twinkle ${styles.sparkleIcon}`}><Sparkles size={13} color="var(--color-accent-purple)" /></span>
                <span className={styles.sectionBadgeText}>Nossos Serviços</span>
              </div>
              <h2 className={styles.sectionTitle}>
                O que podemos fazer <span className="gradient-text">por você</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Soluções tecnológicas completas para transformar sua empresa
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service, i) => {
                const colors = ['#635BFF', '#00D4FF', '#8A7CFF', '#FF7AD9'];
                const bgColors = ['rgba(99,91,255,0.08)', 'rgba(0,212,255,0.08)', 'rgba(138,124,255,0.08)', 'rgba(255,122,217,0.08)'];
                const color = colors[i % colors.length];
                const bgColor = bgColors[i % bgColors.length];
                return (
                  <div
                    key={service.id}
                    className={styles.serviceCard}
                    style={{ '--card-accent': color, '--card-bg': bgColor } as React.CSSProperties}
                  >
                    <div className={styles.serviceCardTopBar} />
                    <div
                      className={`icon-float${i > 0 ? `-delay-${i % 4}` : ''} icon-glow-pulse ${styles.serviceCardIconBox}`}
                    >
                      {ICON_MAP[service.icon] || <Code2 size={28} color="white" />}
                    </div>
                    <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                    <p className={styles.serviceCardDesc}>{service.description}</p>
                    <ul className={styles.serviceCardFeatures}>
                      {service.features.map((feat, j) => (
                        <li key={j} className={styles.serviceCardFeature}>
                          <CheckCircle2 size={15} color={color} />
                          <span className={styles.serviceCardFeatureText}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className={styles.sectionCta}>
              <Link href="/servicos">
                <button className={styles.outlineBtn}>
                  Ver todos os serviços <ChevronRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ PROJETOS DE SUCESSO ═══ */}
        {projects.length > 0 && (
          <section className={styles.projectsSection}>
            <div className={styles.projectsOrb} />
            <div className={`container ${styles.projectsInner}`}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionBadge}>
                  <span className={`sparkle-twinkle ${styles.sparkleIcon}`}><Sparkles size={13} color="var(--color-accent-purple)" /></span>
                  <span className={styles.sectionBadgeText}>Cases de Sucesso</span>
                </div>
                <h2 className={styles.sectionTitle}>
                  Projetos que geram <span className="gradient-text">Resultados</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                  Conheça alguns dos projetos que transformaram negócios reais
                </p>
              </div>

              <div className={styles.projectsGrid}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={styles.projectCard}
                    style={{ '--card-accent': project.accentColor } as React.CSSProperties}
                  >
                    <div className={styles.projectTopBar} />

                    {project.image ? (
                      <div className={styles.projectImageBox}>
                        <img src={project.image} alt={project.title} className={styles.projectImage} />
                      </div>
                    ) : (
                      <div className={styles.projectPlaceholder}>
                        <div className={styles.projectPlaceholderBg} />
                        <div className={styles.projectPlaceholderIcon}>
                          <TrendingUp size={40} color={project.accentColor} />
                        </div>
                      </div>
                    )}

                    <div className={styles.projectBody}>
                      <span className={styles.projectTag}>{project.tag}</span>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectSubtitle}>{project.subtitle}</p>
                      <div className={styles.projectResults}>
                        {project.results.slice(0, 2).map((result, j) => (
                          <div key={j} className={styles.projectResult}>
                            <CheckCircle2 size={14} color={project.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span className={styles.projectResultText}>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.sectionCta}>
                <Link href="/projetos">
                  <button className={styles.outlineBtn}>
                    Ver todos os projetos <ChevronRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ═══ TESTIMONIALS ═══ */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsFade} />
          <div className={`container ${styles.testimonialsHeader}`}>
            <div className={styles.sectionBadge}>
              <Star size={13} color="var(--color-accent-purple)" />
              <span className={styles.sectionBadgeText}>Depoimentos</span>
            </div>
            <h2 className={styles.testimonialsTitle}>O que nossos <span className="gradient-text">clientes dizem</span></h2>
          </div>

          {testimonials.length > 0 && (
            <div
              className={styles.testimonialsScroller}
              onMouseEnter={() => setTestimPaused(true)}
              onMouseLeave={() => setTestimPaused(false)}
            >
              <div className={[styles.testimonialsTrack, testimPaused && styles.testimonialsTrackPaused].filter(Boolean).join(' ')}>
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className={styles.testimonialCard}>
                    <div className={styles.testimonialTopBar} />
                    <div className={styles.testimonialStars}>
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <span key={j} className={`star-animated ${styles.starIcon}`}>
                          <Star size={15} fill="#FBBF24" color="#FBBF24" />
                        </span>
                      ))}
                    </div>
                    <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                    <div className={styles.testimonialAuthor}>
                      <div className={`icon-glow-pulse ${styles.testimonialAvatar}`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className={styles.testimonialName}>{t.name}</p>
                        <p className={styles.testimonialRole}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ═══ CTA ═══ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBanner}>
              <div className={styles.ctaBannerBg1} />
              <div className={styles.ctaBannerBg2} />
              <div className={styles.ctaBannerDots} />
              <div className={styles.ctaContent}>
                <div className={styles.ctaBadge}>
                  <span className={`sparkle-twinkle ${styles.sparkleIcon}`}><Sparkles size={13} color="var(--color-accent-purple)" /></span>
                  <span className={styles.ctaBadgeText}>Vamos conversar</span>
                </div>
                <h2 className={styles.ctaTitle}>
                  Pronto para <span className="gradient-text">transformar</span><br />seu negócio?
                </h2>
                <p className={styles.ctaSubtitle}>
                  Fale com nossos especialistas e descubra como podemos ajudar sua empresa a crescer com tecnologia.
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
