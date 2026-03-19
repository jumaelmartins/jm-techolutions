'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import styles from './page.module.scss';

type Contact = { email: string; phone: string; whatsapp: string; location: string };

const services = [
  'Desenvolvimento Web', 'Automação de Processos',
  'Integrações e APIs', 'MVP para Startups', 'Consultoria Técnica', 'Outro',
];

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState<Contact>({ email: '', phone: '', whatsapp: '', location: '' });
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', empresa: '', servico: '', mensagem: '' });

  useEffect(() => {
    fetch('/api/content/contact').then(r => r.json()).then(setContact);
  }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const contactCards = [
    { icon: <Mail size={22} color="white" />, title: 'Email', value: contact.email, gradient: 'linear-gradient(135deg, #635BFF, #8A7CFF)' },
    { icon: <Phone size={22} color="white" />, title: 'Telefone', value: contact.phone, gradient: 'linear-gradient(135deg, #8A7CFF, #00D4FF)' },
    { icon: <MessageSquare size={22} color="white" />, title: 'WhatsApp', value: 'Chat direto', gradient: 'linear-gradient(135deg, #00D4FF, #635BFF)' },
    { icon: <MapPin size={22} color="white" />, title: 'Localização', value: contact.location, gradient: 'linear-gradient(135deg, #635BFF, #FF7AD9)' },
  ];

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
              <span className={styles.badgeText}>Entre em Contato</span>
            </div>
            <h1 className={styles.heroTitle}>
              Vamos conversar sobre<br />
              seu <span className="gradient-text">Projeto</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Estamos prontos para transformar sua ideia em realidade
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className={styles.cardsSection}>
          <div className="container">
            <div className={styles.cardsGrid}>
              {contactCards.map((info, i) => (
                <div key={i} className={styles.contactCard}>
                  <div className={styles.contactCardIcon} style={{ background: info.gradient }}>
                    {info.icon}
                  </div>
                  <p className={styles.contactCardTitle}>{info.title}</p>
                  <p className={styles.contactCardValue}>{info.value || '—'}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className={styles.formSection}>
          <div className="container">
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>
                  Solicite um <span className="gradient-text">Orçamento</span>
                </h2>
                <p className={styles.formSubtitle}>
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas
                </p>
              </div>

              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successBg} />
                  <div className={styles.successContent}>
                    <div className={styles.successIcon}>
                      <CheckCircle2 size={40} color="white" />
                    </div>
                    <h3 className={styles.successTitle}>Mensagem enviada!</h3>
                    <p className={styles.successText}>
                      Obrigado pelo contato. Retornaremos em até 24 horas.
                    </p>
                    <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formTopBar} />

                  <div>
                    <label className={styles.formLabel}>Nome Completo *</label>
                    <input type="text" required placeholder="Seu nome" value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className={styles.formInput} />
                  </div>

                  <div className={styles.formRow}>
                    <div>
                      <label className={styles.formLabel}>Email *</label>
                      <input type="email" required placeholder="seu@email.com" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={styles.formInput} />
                    </div>
                    <div>
                      <label className={styles.formLabel}>Telefone</label>
                      <input type="tel" placeholder="(11) 99999-9999" value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className={styles.formInput} />
                    </div>
                  </div>

                  <div>
                    <label className={styles.formLabel}>Empresa</label>
                    <input type="text" placeholder="Nome da sua empresa" value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className={styles.formInput} />
                  </div>

                  <div>
                    <label className={styles.formLabel}>Serviço de Interesse *</label>
                    <select required value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })}
                      className={`${styles.formInput} ${styles.formSelect}`}>
                      <option value="">Selecione uma opção</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: 'var(--color-surface-2)' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={styles.formLabel}>Mensagem *</label>
                    <textarea required placeholder="Conte-nos sobre seu projeto..." rows={5} value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className={`${styles.formInput} ${styles.formTextarea}`} />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Enviar Mensagem <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* WhatsApp */}
        <section className={styles.waSection}>
          <div className="container">
            <div className={styles.waBanner}>
              <div className={styles.waBannerBg} />
              <div className={styles.waBannerContent}>
                <div className={styles.waIconBox}>
                  <MessageSquare size={30} color="white" />
                </div>
                <h3 className={styles.waTitle}>Prefere falar pelo WhatsApp?</h3>
                <p className={styles.waSubtitle}>
                  Clique no botão abaixo e converse diretamente conosco
                </p>
                <a href={`https://wa.me/${contact.whatsapp || '5511999999999'}`} target="_blank" rel="noopener noreferrer">
                  <button className={styles.waButton}>
                    <MessageSquare size={18} /> Abrir WhatsApp
                  </button>
                </a>
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
