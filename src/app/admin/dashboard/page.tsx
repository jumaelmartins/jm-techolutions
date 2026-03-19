'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Code2, MessageSquare, LayoutGrid, FolderOpen,
  BarChart3, LogOut, Plus, Trash2, Save, CheckCircle2,
  AlertCircle, Eye, EyeOff, ChevronDown, ChevronUp,
  Star, Settings
} from 'lucide-react';
import styles from './page.module.scss';

type Tab = 'services' | 'projects' | 'testimonials' | 'stats' | 'contact';

type Service = {
  id: number; icon: string; title: string; description: string;
  features: string[]; techs: string[]; offers: string[];
  order: number; active: boolean;
};
type Project = {
  id: number; tag: string; title: string; subtitle: string;
  challenge: string; solution: string; results: string[];
  techs: string[]; accentColor: string; image?: string; order: number; active: boolean;
};
type Testimonial = {
  id: number; name: string; role: string; initials: string;
  rating: number; text: string; active: boolean;
};
type Stat = { id: number; value: number; suffix: string; label: string };
type Contact = { email: string; phone: string; whatsapp: string; location: string };

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('testimonials');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [contact, setContact] = useState<Contact>({ email: '', phone: '', whatsapp: '', location: '' });

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const loadData = useCallback(async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      setServices(data.services || []);
      setProjects(data.projects || []);
      setTestimonials(data.testimonials || []);
      setStats(data.stats || []);
      setContact(data.contact || {});
    } catch {
      showToast('Erro ao carregar dados', 'error');
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const save = async (section: string, data: unknown) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/content/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) showToast('Salvo com sucesso!');
      else showToast('Erro ao salvar', 'error');
    } catch {
      showToast('Erro ao salvar', 'error');
    } finally {
      setSaving(false);
    }
  };

  const logout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin');
  };

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'testimonials', label: 'Depoimentos', icon: <MessageSquare size={16} /> },
    { id: 'projects', label: 'Projetos', icon: <FolderOpen size={16} /> },
    { id: 'services', label: 'Serviços', icon: <LayoutGrid size={16} /> },
    { id: 'stats', label: 'Estatísticas', icon: <BarChart3 size={16} /> },
    { id: 'contact', label: 'Contato', icon: <Settings size={16} /> },
  ];

  return (
    <div className={styles.layout}>

      {/* Toast */}
      {toast && (
        <div className={`${styles.toast} ${toast.type === 'success' ? styles.toastSuccess : styles.toastError}`}>
          {toast.type === 'success'
            ? <CheckCircle2 size={18} color="#22c55e" />
            : <AlertCircle size={18} color="#ef4444" />}
          <span className={styles.toastText}>{toast.msg}</span>
        </div>
      )}

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerBrand}>
          <div className={styles.headerLogoIcon}>
            <Code2 size={18} color="white" />
          </div>
          <div>
            <p className={styles.headerBrandName}>JMTechSolutions</p>
            <p className={styles.headerBrandSub}>Painel de Administração</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <a href="/" target="_blank" rel="noopener noreferrer" className={styles.headerActionLink}>
            <Eye size={14} /> Ver site
          </a>
          <button onClick={logout} className={styles.headerActionBtn}>
            <LogOut size={14} /> Sair
          </button>
        </div>
      </header>

      <div className={styles.body}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>CONTEÚDO</p>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[styles.tabBtn, activeTab === tab.id && styles.tabBtnActive].filter(Boolean).join(' ')}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </aside>

        {/* Content */}
        <main className={styles.main}>

          {/* ===== TESTIMONIALS ===== */}
          {activeTab === 'testimonials' && (
            <div>
              <div className={styles.sectionHeaderRow}>
                <div>
                  <h2 className={styles.sectionTitle}>Depoimentos</h2>
                  <p className={styles.sectionCount}>{testimonials.length} depoimentos cadastrados</p>
                </div>
                <div className={styles.sectionActions}>
                  <button
                    onClick={() => {
                      const newItem: Testimonial = {
                        id: Date.now(), name: 'Novo Cliente', role: 'Cargo, Empresa',
                        initials: 'NC', rating: 5, text: 'Depoimento aqui...', active: true,
                      };
                      setTestimonials([...testimonials, newItem]);
                      setExpandedItem(newItem.id);
                    }}
                    className={styles.addBtn}
                  >
                    <Plus size={15} /> Adicionar
                  </button>
                  <button
                    onClick={() => save('testimonials', testimonials)}
                    disabled={saving}
                    className={styles.saveBtn}
                  >
                    <Save size={15} /> {saving ? 'Salvando...' : 'Salvar'}
                  </button>
                </div>
              </div>

              {testimonials.map((t) => (
                <div key={t.id} className={styles.card}>
                  <div className={styles.cardHeaderRow}
                    onClick={() => setExpandedItem(expandedItem === t.id ? null : t.id)}>
                    <div className={styles.cardHeaderLeft}>
                      <div className={styles.avatar}>
                        {t.initials || t.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className={styles.cardItemName}>{t.name}</p>
                        <p className={styles.cardItemSub}>{t.role}</p>
                      </div>
                      <div className={styles.starsRow}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={12} fill={i < t.rating ? '#FBBF24' : 'none'} color="#FBBF24" />
                        ))}
                      </div>
                    </div>
                    <div className={styles.cardHeaderRight}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTestimonials(testimonials.map(x => x.id === t.id ? { ...x, active: !x.active } : x));
                        }}
                        className={`${styles.statusBadge} ${t.active ? styles.statusActive : styles.statusInactive}`}
                      >
                        {t.active
                          ? <><Eye size={12} className={styles.statusIcon} />Ativo</>
                          : <><EyeOff size={12} className={styles.statusIcon} />Oculto</>}
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setTestimonials(testimonials.filter(x => x.id !== t.id)); }}
                        className={styles.deleteBtn}
                      >
                        <Trash2 size={14} />
                      </button>
                      {expandedItem === t.id ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                    </div>
                  </div>

                  {expandedItem === t.id && (
                    <div className={styles.expandedForm}>
                      <div className={styles.formGrid2}>
                        <div>
                          <label className={styles.label}>Nome</label>
                          <input className={styles.input} value={t.name}
                            onChange={(e) => setTestimonials(testimonials.map(x => x.id === t.id ? { ...x, name: e.target.value } : x))} />
                        </div>
                        <div>
                          <label className={styles.label}>Cargo, Empresa</label>
                          <input className={styles.input} value={t.role}
                            onChange={(e) => setTestimonials(testimonials.map(x => x.id === t.id ? { ...x, role: e.target.value } : x))} />
                        </div>
                        <div>
                          <label className={styles.label}>Iniciais (para avatar)</label>
                          <input className={styles.input} value={t.initials} maxLength={2}
                            onChange={(e) => setTestimonials(testimonials.map(x => x.id === t.id ? { ...x, initials: e.target.value.toUpperCase() } : x))} />
                        </div>
                        <div>
                          <label className={styles.label}>Avaliação (1-5 estrelas)</label>
                          <div className={styles.starsPicker}>
                            {[1, 2, 3, 4, 5].map((n) => (
                              <button key={n} onClick={() => setTestimonials(testimonials.map(x => x.id === t.id ? { ...x, rating: n } : x))}
                                className={styles.starPickerBtn}>
                                <Star size={20} fill={n <= t.rating ? '#FBBF24' : 'none'} color="#FBBF24" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className={styles.label}>Depoimento</label>
                        <textarea className={`${styles.input} ${styles.textareaLg}`} value={t.text}
                          onChange={(e) => setTestimonials(testimonials.map(x => x.id === t.id ? { ...x, text: e.target.value } : x))} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===== PROJECTS ===== */}
          {activeTab === 'projects' && (
            <div>
              <div className={styles.sectionHeaderRow}>
                <div>
                  <h2 className={styles.sectionTitle}>Projetos</h2>
                  <p className={styles.sectionCount}>{projects.length} projetos cadastrados</p>
                </div>
                <div className={styles.sectionActions}>
                  <button
                    onClick={() => {
                      const newItem: Project = {
                        id: Date.now(), tag: 'Sistema Web', title: 'Novo Projeto',
                        subtitle: 'Descrição do projeto...', challenge: 'Desafio...', solution: 'Solução...',
                        results: ['Resultado 1', 'Resultado 2'],
                        techs: ['React', 'Node.js'], accentColor: '#635BFF', image: '',
                        order: projects.length + 1, active: true,
                      };
                      setProjects([...projects, newItem]);
                      setExpandedItem(newItem.id);
                    }}
                    className={styles.addBtn}
                  >
                    <Plus size={15} /> Adicionar
                  </button>
                  <button onClick={() => save('projects', projects)} disabled={saving} className={styles.saveBtn}>
                    <Save size={15} /> {saving ? 'Salvando...' : 'Salvar'}
                  </button>
                </div>
              </div>

              {projects.map((p) => (
                <div key={p.id} className={styles.card}>
                  <div className={styles.cardHeaderRow}
                    onClick={() => setExpandedItem(expandedItem === p.id ? null : p.id)}>
                    <div className={styles.cardHeaderLeft}>
                      <div className={styles.accentDot} style={{ background: p.accentColor }} />
                      <div>
                        <p className={styles.cardItemName}>{p.title}</p>
                        <p className={styles.cardItemSub}>{p.tag}</p>
                      </div>
                    </div>
                    <div className={styles.cardHeaderRight}>
                      <button onClick={(e) => { e.stopPropagation(); setProjects(projects.map(x => x.id === p.id ? { ...x, active: !x.active } : x)); }}
                        className={`${styles.statusBadge} ${p.active ? styles.statusActive : styles.statusInactive}`}>
                        {p.active ? 'Ativo' : 'Oculto'}
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); setProjects(projects.filter(x => x.id !== p.id)); }}
                        className={styles.deleteBtn}>
                        <Trash2 size={14} />
                      </button>
                      {expandedItem === p.id ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                    </div>
                  </div>

                  {expandedItem === p.id && (
                    <div className={styles.expandedForm}>
                      <div className={styles.formGrid2}>
                        <div>
                          <label className={styles.label}>Tag (ex: Sistema Web)</label>
                          <input className={styles.input} value={p.tag} onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, tag: e.target.value } : x))} />
                        </div>
                        <div>
                          <label className={styles.label}>Cor de destaque (hex)</label>
                          <div className={styles.colorPickerRow}>
                            <input type="color" value={p.accentColor} onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, accentColor: e.target.value } : x))}
                              className={styles.colorInput} />
                            <input className={`${styles.input} ${styles.colorPickerRow}`} style={{ flex: 1 }} value={p.accentColor} onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, accentColor: e.target.value } : x))} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className={styles.label}>Título</label>
                        <input className={styles.input} value={p.title} onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, title: e.target.value } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Subtítulo</label>
                        <input className={styles.input} value={p.subtitle} onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, subtitle: e.target.value } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Desafio</label>
                        <textarea className={`${styles.input} ${styles.textarea}`} value={p.challenge} onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, challenge: e.target.value } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Solução</label>
                        <textarea className={`${styles.input} ${styles.textarea}`} value={p.solution} onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, solution: e.target.value } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Resultados (um por linha)</label>
                        <textarea className={`${styles.input} ${styles.textarea}`} value={p.results.join('\n')}
                          onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, results: e.target.value.split('\n').filter(Boolean) } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Tecnologias (separadas por vírgula)</label>
                        <input className={styles.input} value={p.techs.join(', ')}
                          onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, techs: e.target.value.split(',').map(t => t.trim()).filter(Boolean) } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Imagem (URL)</label>
                        <input className={styles.input} placeholder="https://exemplo.com/imagem.jpg" value={p.image || ''}
                          onChange={(e) => setProjects(projects.map(x => x.id === p.id ? { ...x, image: e.target.value } : x))} />
                        {p.image && (
                          <div className={styles.imagePreview}>
                            <img src={p.image} alt="Preview" className={styles.imagePreviewImg} />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===== SERVICES ===== */}
          {activeTab === 'services' && (
            <div>
              <div className={styles.sectionHeaderRow}>
                <div>
                  <h2 className={styles.sectionTitle}>Serviços</h2>
                  <p className={styles.sectionCount}>{services.length} serviços cadastrados</p>
                </div>
                <button onClick={() => save('services', services)} disabled={saving} className={styles.saveBtn}>
                  <Save size={15} /> {saving ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
              {services.map((s) => (
                <div key={s.id} className={styles.card}>
                  <div className={styles.cardHeaderRow}
                    onClick={() => setExpandedItem(expandedItem === s.id ? null : s.id)}>
                    <div className={styles.cardHeaderLeft}>
                      <div className={styles.serviceIcon}>
                        <Code2 size={18} color="white" />
                      </div>
                      <div>
                        <p className={styles.cardItemName}>{s.title}</p>
                        <p className={styles.cardItemSub}>{s.techs.join(', ')}</p>
                      </div>
                    </div>
                    <div className={styles.cardHeaderRight}>
                      <button onClick={(e) => { e.stopPropagation(); setServices(services.map(x => x.id === s.id ? { ...x, active: !x.active } : x)); }}
                        className={`${styles.statusBadge} ${s.active ? styles.statusActive : styles.statusInactive}`}>
                        {s.active ? 'Ativo' : 'Oculto'}
                      </button>
                      {expandedItem === s.id ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                    </div>
                  </div>
                  {expandedItem === s.id && (
                    <div className={styles.expandedForm}>
                      <div>
                        <label className={styles.label}>Título</label>
                        <input className={styles.input} value={s.title} onChange={(e) => setServices(services.map(x => x.id === s.id ? { ...x, title: e.target.value } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Descrição</label>
                        <textarea className={`${styles.input} ${styles.textarea}`} value={s.description} onChange={(e) => setServices(services.map(x => x.id === s.id ? { ...x, description: e.target.value } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Features do card (uma por linha)</label>
                        <textarea className={`${styles.input} ${styles.textarea}`} value={s.features.join('\n')} onChange={(e) => setServices(services.map(x => x.id === s.id ? { ...x, features: e.target.value.split('\n').filter(Boolean) } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>O que oferecemos (uma por linha)</label>
                        <textarea className={`${styles.input} ${styles.textareaLg}`} value={s.offers.join('\n')} onChange={(e) => setServices(services.map(x => x.id === s.id ? { ...x, offers: e.target.value.split('\n').filter(Boolean) } : x))} />
                      </div>
                      <div>
                        <label className={styles.label}>Tecnologias (separadas por vírgula)</label>
                        <input className={styles.input} value={s.techs.join(', ')} onChange={(e) => setServices(services.map(x => x.id === s.id ? { ...x, techs: e.target.value.split(',').map(t => t.trim()).filter(Boolean) } : x))} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===== STATS ===== */}
          {activeTab === 'stats' && (
            <div>
              <div className={styles.sectionHeaderRow}>
                <div>
                  <h2 className={styles.sectionTitle}>Estatísticas</h2>
                  <p className={styles.sectionCount}>Números exibidos no hero da home</p>
                </div>
                <button onClick={() => save('stats', stats)} disabled={saving} className={styles.saveBtn}>
                  <Save size={15} /> {saving ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
              {stats.map((st) => (
                <div key={st.id} className={`${styles.card} ${styles.statsCard}`}>
                  <div>
                    <label className={styles.label}>Número</label>
                    <input type="number" className={styles.input} value={st.value} onChange={(e) => setStats(stats.map(x => x.id === st.id ? { ...x, value: Number(e.target.value) } : x))} />
                  </div>
                  <div>
                    <label className={styles.label}>Sufixo (ex: +, %, /7)</label>
                    <input className={styles.input} value={st.suffix} onChange={(e) => setStats(stats.map(x => x.id === st.id ? { ...x, suffix: e.target.value } : x))} />
                  </div>
                  <div>
                    <label className={styles.label}>Label</label>
                    <input className={styles.input} value={st.label} onChange={(e) => setStats(stats.map(x => x.id === st.id ? { ...x, label: e.target.value } : x))} />
                  </div>
                </div>
              ))}
              <div className={styles.statsHint}>
                <p className={styles.statsHintText}>
                  💡 Preview: {stats.map(s => `${s.value}${s.suffix} ${s.label}`).join(' · ')}
                </p>
              </div>
            </div>
          )}

          {/* ===== CONTACT ===== */}
          {activeTab === 'contact' && (
            <div>
              <div className={styles.sectionHeaderRow}>
                <div>
                  <h2 className={styles.sectionTitle}>Informações de Contato</h2>
                  <p className={styles.sectionCount}>Dados exibidos na página de contato e rodapé</p>
                </div>
                <button onClick={() => save('contact', contact)} disabled={saving} className={styles.saveBtn}>
                  <Save size={15} /> {saving ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
              <div className={styles.card}>
                <div className={styles.expandedForm}>
                  {[
                    { key: 'email', label: 'Email', placeholder: 'contato@empresa.com' },
                    { key: 'phone', label: 'Telefone', placeholder: '(11) 99999-9999' },
                    { key: 'whatsapp', label: 'WhatsApp (número com DDI, ex: 5511999999999)', placeholder: '5511999999999' },
                    { key: 'location', label: 'Localização', placeholder: 'São Paulo, SP - Brasil' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className={styles.label}>{field.label}</label>
                      <input className={styles.input} placeholder={field.placeholder}
                        value={contact[field.key as keyof Contact] || ''}
                        onChange={(e) => setContact({ ...contact, [field.key]: e.target.value })} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
