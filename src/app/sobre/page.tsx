'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollTop from '../components/ScrollTop';
import { Code2, Eye, Heart, Shield, Zap, ArrowRight, Award } from 'lucide-react';
import styles from './page.module.scss';

const values = [
  {
    icon: <Code2 size={24} color="white" />,
    title: 'Excelência Técnica',
    description: 'Comprometidos com código limpo, boas práticas e tecnologias modernas',
  },
  {
    icon: <Zap size={24} color="white" />,
    title: 'Agilidade',
    description: 'Entregas rápidas sem comprometer a qualidade do produto final',
  },
  {
    icon: <Heart size={24} color="white" />,
    title: 'Foco no Cliente',
    description: 'Seu sucesso é nosso sucesso. Trabalhamos como parceiros do seu negócio',
  },
  {
    icon: <Shield size={24} color="white" />,
    title: 'Transparência',
    description: 'Comunicação clara e honesta em todas as etapas do projeto',
  },
];

const expertise = [
  'Desenvolvimento Full Stack',
  'Arquitetura de Software',
  'APIs e Microserviços',
  'Cloud Computing',
  'DevOps e CI/CD',
  'Automação de Processos',
  'Integrações Complexas',
  'Banco de Dados',
];

const timeline = [
  {
    year: '2019',
    title: 'Fundação',
    description: 'Início da jornada com foco em desenvolvimento web e automações',
  },
  {
    year: '2020',
    title: 'Primeiros Grandes Projetos',
    description: 'Expansão do portfólio com sistemas corporativos',
  },
  {
    year: '2022',
    title: 'Especialização em MVPs',
    description: 'Desenvolvimento de metodologia própria para startups',
  },
  {
    year: '2024',
    title: 'Consolidação',
    description: '50+ projetos entregues e equipe expandida',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Projetos entregues' },
  { value: 5, suffix: '+', label: 'Anos de experiência' },
  { value: 100, suffix: '%', label: 'Clientes satisfeitos' },
  { value: 30, suffix: '+', label: 'Tecnologias dominadas' },
];

const codeLines = [
  { text: 'const app = createServer();', accent: false },
  { text: 'app.use(middleware());', accent: false },
  { text: 'app.listen(3000);', accent: false },
  { text: '// Serving 50+ clients', accent: true },
];

export default function SobrePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroOrb} />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeText}>Sobre Nós</span>
            </div>
            <h1 className={styles.heroTitle}>
              Transformando ideias em{' '}
              <span className="gradient-text">Soluções Digitais</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Somos especialistas em desenvolvimento de sistemas sob medida, com foco em resultados e inovação
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className={styles.statValue}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className={styles.historySection}>
          <div className="container">
            <div className={styles.historyGrid}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Nossa <span className="gradient-text">História</span></h2>
                <p className={styles.historyText}>
                  A <strong style={{ color: 'var(--text-primary)' }}>JMTechSolutions</strong> nasceu da paixão por tecnologia e do desejo de ajudar empresas a crescerem através da inovação digital.
                </p>
                <p className={styles.historyText}>
                  Fundada por <strong style={{ color: 'var(--text-primary)' }}>Jumael Martins</strong>, desenvolvedor especializado em sistemas web e automação, a empresa começou com um propósito claro: criar soluções tecnológicas que realmente fazem diferença no dia a dia das empresas.
                </p>
                <p className={styles.historyText}>
                  Ao longo dos anos, evoluímos de uma operação solo para uma equipe de especialistas apaixonados por resolver problemas complexos com elegância e simplicidade.
                </p>
                <p className={styles.historyText} style={{ marginBottom: 0 }}>
                  Hoje, somos reconhecidos pela qualidade técnica, agilidade nas entregas e, principalmente, pela capacidade de entender profundamente as necessidades de nossos clientes.
                </p>
              </div>
              <div>
                <div className={styles.historyVisual}>
                  <div className={styles.historyVisualOverlay} />
                  <div className={styles.historyVisualContent}>
                    <div className={styles.historyCodeLines}>
                      {codeLines.map((line, i) => (
                        <div key={i} className={`${styles.codeLine} ${line.accent ? styles.codeLineAccent : ''}`}>
                          {line.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão & Visão */}
        <section className={styles.mvSection}>
          <div className="container">
            <div className={styles.mvGrid}>
              {[
                {
                  icon: <Code2 size={28} color="white" />,
                  title: 'Missão',
                  text: 'Empoderar empresas através de soluções tecnológicas sob medida, transformando desafios complexos em sistemas simples, eficientes e escaláveis que geram resultados reais.',
                  delay: '0',
                },
                {
                  icon: <Eye size={28} color="white" />,
                  title: 'Visão',
                  text: 'Ser referência em desenvolvimento de sistemas sob medida, reconhecidos pela excelência técnica, inovação e compromisso com o sucesso de nossos clientes.',
                  delay: '1',
                },
              ].map((item, i) => (
                <div key={i} className={styles.mvCard}>
                  <div
                    className={`icon-float-delay-${i} icon-glow-pulse ${styles.mvIconBox}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className={styles.mvTitle}>{item.title}</h3>
                  <p className={styles.mvText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nossos <span className="gradient-text">Valores</span></h2>
              <p className={styles.sectionSubtitle}>Princípios que guiam nosso trabalho e relacionamento com clientes</p>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((value, i) => (
                <div key={i} className={styles.valueCard}>
                  <div className={`icon-float-delay-${i % 4} icon-glow-pulse ${styles.valueIconBox}`}>
                    {value.icon}
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Expertise */}
        <section className={styles.expertiseSection}>
          <div className="container">
            <div className={styles.expertiseHeader}>
              <h2 className={styles.sectionTitle}>Nossa <span className="gradient-text">Expertise</span></h2>
              <p className={styles.sectionSubtitle}>Áreas de especialização técnica</p>
            </div>
            <div className={styles.expertiseTags}>
              {expertise.map((item) => (
                <span key={item} className={styles.expertiseTag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nossa <span className="gradient-text">Trajetória</span></h2>
            </div>
            <div className={styles.timelineInner}>
              <div className={styles.timelineLine} />
              <div className={styles.timelineItems}>
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight}`}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineCard}>
                      <p className={styles.timelineYear}>{item.year}</p>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      <p className={styles.timelineDesc}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className={styles.founderSection}>
          <div className="container">
            <div className={styles.founderInner}>
              <div className={styles.founderAvatar}>
                <Award size={36} color="white" />
              </div>
              <h3 className={styles.founderName}>Jumael Martins</h3>
              <p className={styles.founderRole}>Fundador & Desenvolvedor Sênior</p>
              <p className={styles.founderBio}>
                Desenvolvedor especializado em sistemas web, APIs e automações, com mais de 5 anos de experiência transformando desafios complexos em soluções elegantes e eficientes.
              </p>
              <p className={styles.founderQuote}>
                &ldquo;Minha missão é usar a tecnologia para simplificar processos, automatizar tarefas e criar sistemas que realmente fazem diferença no dia a dia das empresas.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBanner}>
              <h2 className={styles.ctaTitle}>Vamos trabalhar juntos?</h2>
              <p className={styles.ctaSubtitle}>
                Entre em contato e descubra como podemos ajudar seu negócio a crescer
              </p>
              <Link href="/contato">
                <button className={styles.ctaButton}>
                  Falar com a gente <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
