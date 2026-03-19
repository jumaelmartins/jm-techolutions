'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { CheckCircle2, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import styles from './page.module.scss';

type Project = {
  id: number; tag: string; title: string; subtitle: string;
  challenge: string; solution: string; results: string[];
  techs: string[]; accentColor: string; image?: string; order: number; active: boolean;
};

export default function ProjetosPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/content/projects')
      .then(r => r.json())
      .then(data => setProjects(data.filter((p: Project) => p.active).sort((a: Project, b: Project) => a.order - b.order)));
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
              <span className={styles.badgeText}>Cases de Sucesso</span>
            </div>
            <h1 className={styles.heroTitle}>
              Projetos que geram{' '}
              <span className="gradient-text">Resultados</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Conheça alguns dos projetos que transformaram negócios com tecnologia
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.projectsSection}>
          <div className="container">
            <div className={styles.projectsList}>
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  className={styles.projectCard}
                  style={{ '--card-accent': project.accentColor } as React.CSSProperties}
                >
                  <div className={styles.projectTopBar} />

                  <div className={styles.projectRow}>
                    {/* Content */}
                    <div
                      className={styles.projectContent}
                      style={{ order: i % 2 === 0 ? 1 : 2 }}
                    >
                      <span className={styles.projectTag}>{project.tag}</span>
                      <h2 className={styles.projectTitle}>{project.title}</h2>
                      <p className={styles.projectSubtitle}>{project.subtitle}</p>

                      <div className={styles.projectSections}>
                        {[
                          { label: 'DESAFIO', content: project.challenge },
                          { label: 'SOLUÇÃO', content: project.solution },
                        ].map((section) => (
                          <div key={section.label}>
                            <p className={styles.projectSectionLabel}>{section.label}</p>
                            <p className={styles.projectSectionText}>{section.content}</p>
                          </div>
                        ))}
                      </div>

                      <div className={styles.techsArea}>
                        <p className={styles.techsLabel}>TECNOLOGIAS:</p>
                        <div className={styles.techsList}>
                          {project.techs.map((tech) => (
                            <span key={tech} className={styles.techPill}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results panel */}
                    <div
                      className={styles.projectResults}
                      style={{
                        order: i % 2 === 0 ? 2 : 1,
                        background: `linear-gradient(135deg, color-mix(in srgb, ${project.accentColor} 4%, transparent), transparent)`,
                      }}
                    >
                      <p className={styles.resultsLabel}>RESULTADOS ALCANÇADOS</p>
                      <div className={styles.resultsList}>
                        {project.results.map((result, j) => (
                          <div key={j} className={styles.resultItem}>
                            <div className={styles.resultIconBox}>
                              <CheckCircle2 size={14} color={project.accentColor} />
                            </div>
                            <span className={styles.resultText}>{result}</span>
                          </div>
                        ))}
                      </div>

                      {project.image ? (
                        <div className={styles.projectImageBox}>
                          <img src={project.image} alt={project.title} className={styles.projectImage} />
                        </div>
                      ) : (
                        <div className={styles.projectPlaceholder}>
                          <TrendingUp size={32} color={project.accentColor} style={{ marginBottom: '0.75rem' }} />
                          <p className={styles.placeholderText}>Projeto entregue com sucesso</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
                  Quer um projeto <span className="gradient-text">assim?</span>
                </h2>
                <p className={styles.ctaSubtitle}>
                  Conte-nos sobre seu desafio e vamos criar a solução ideal para sua empresa.
                </p>
                <Link href="/contato">
                  <button className={styles.ctaButton}>
                    Iniciar meu projeto <ArrowRight size={20} />
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
