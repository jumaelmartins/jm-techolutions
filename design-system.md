# 🎨 Design System - JMTechSolutions

## Visão Geral
Design system inspirado na **Stripe**, com foco em **dark mode premium**, gradientes vibrantes e interface tecnológica. Desenvolvido para um site institucional de tecnologia com forte apelo comercial.

---

## 🎨 Paleta de Cores

### **Backgrounds (Fundos)**
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **BG Primary** | `#0B0D12` | `11, 13, 18` | Fundo principal da página |
| **BG Secondary** | `#11141B` | `17, 20, 27` | Seções alternadas |
| **BG Tertiary** | `#171A22` | `23, 26, 34` | Áreas terciárias |

### **Superfícies (Cards/Containers)**
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Surface 1** | `#151922` | `21, 25, 34` | Cards principais |
| **Surface 2** | `#1C2130` | `28, 33, 48` | Cards de destaque |
| **Surface 3** | `#242A3B` | `36, 42, 59` | Cards especiais |

### **Bordas**
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Border Soft** | `#2A3042` | `42, 48, 66` | Bordas sutis |
| **Border Strong** | `#3A4156` | `58, 65, 86` | Bordas de destaque |

### **Cores de Destaque (Accent)**
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Primary** | `#635BFF` | `99, 91, 255` | Cor principal (roxo vibrante) |
| **Primary Hover** | `#7A73FF` | `122, 115, 255` | Estado hover do primary |
| **Accent Blue** | `#00D4FF` | `0, 212, 255` | Azul ciano vibrante |
| **Accent Purple** | `#8A7CFF` | `138, 124, 255` | Roxo médio |
| **Accent Pink** | `#FF7AD9` | `255, 122, 217` | Rosa vibrante (opcional) |

### **Texto**
| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Text Primary** | `#FFFFFF` | `255, 255, 255` | Títulos e texto principal |
| **Text Secondary** | `#B6BED1` | `182, 190, 209` | Texto corpo e descrições |
| **Text Muted** | `#7E879C` | `126, 135, 156` | Texto menos importante |

---

## 🌈 Gradientes

### **Gradiente Principal**
```css
background: linear-gradient(135deg, #635BFF, #8A7CFF, #00D4FF);
```
**Visual:** Roxo → Roxo Claro → Azul Ciano  
**Uso:** Botões primários, CTAs, destaques

### **Gradiente Hover**
```css
background: linear-gradient(135deg, #7A73FF, #9B8FFF, #1ADEFF);
```
**Uso:** Estado hover dos botões com gradiente

### **Gradiente para Texto**
```css
background: linear-gradient(135deg, #635BFF, #8A7CFF, #00D4FF);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```
**Uso:** Títulos especiais, palavras de destaque

---

## ✍️ Tipografia

### **Fonte**
- **Família:** Inter
- **Fallbacks:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif`
- **Importação:** Via Google Fonts ou auto-hospedada

### **Escala de Tamanhos**
| Nome | Tamanho | Uso |
|------|---------|-----|
| **Hero** | 56px (3.5rem) | Títulos principais (H1 da home) |
| **Section** | 36px (2.25rem) | Títulos de seção (H2) |
| **Subtitle** | 24px (1.5rem) | Subtítulos (H3) |
| **Body Large** | 18px (1.125rem) | Texto destaque (H4) |
| **Body** | 16px (1rem) | Texto padrão (parágrafos) |
| **Small** | 14px (0.875rem) | Labels, caption |

### **Pesos (Weights)**
| Nome | Valor | Uso |
|------|-------|-----|
| **Normal** | 400 | Texto corpo |
| **Medium** | 500 | Labels, botões |
| **Semibold** | 600 | Subtítulos |
| **Bold** | 700 | Títulos principais |

### **Line Heights**
- **Títulos:** 1.1 (110%)
- **Texto:** 1.4 (140%)

### **Letter Spacing**
- **H1:** -0.02em (mais condensado)
- **H2:** -0.01em (levemente condensado)
- **H3+:** padrão

---

## 📏 Espaçamento

### **Escala de Spacing**
| Token | Valor | Pixels | Uso |
|-------|-------|--------|-----|
| `space-1` | 0.25rem | 4px | Espaçamento mínimo |
| `space-2` | 0.5rem | 8px | Gaps pequenos |
| `space-3` | 0.75rem | 12px | Padding interno |
| `space-4` | 1rem | 16px | Spacing padrão |
| `space-6` | 1.5rem | 24px | Spacing médio |
| `space-8` | 2rem | 32px | Spacing grande |
| `space-12` | 3rem | 48px | Spacing entre seções pequenas |
| `space-16` | 4rem | 64px | Spacing entre seções médias |
| `space-24` | 6rem | 96px | Spacing entre seções grandes |

---

## 📐 Layout

### **Container**
- **Max Width:** 1200px
- **Padding Lateral:** 24px (1.5rem)
- **Comportamento:** Centralizado com `margin: 0 auto`

### **Grid**
- **Gap Padrão:** 32px (2rem)
- **Colunas:** Flexível (geralmente 2-3 colunas)

---

## 🔲 Border Radius

| Nome | Valor | Pixels | Uso |
|------|-------|--------|-----|
| **Small** | 0.5rem | 8px | Botões pequenos, badges |
| **Medium** | 0.75rem | 12px | Inputs, cards pequenos |
| **Large** | 1rem | 16px | Cards padrão, modais |
| **XLarge** | 1.5rem | 24px | Hero sections, elementos grandes |

---

## 🌑 Sombras (Shadows)

### **Sombras de Profundidade**
```css
/* Small - Elevação sutil */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

/* Medium - Elevação média */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

/* Large - Elevação alta */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
```

### **Sombra Glow (Efeito Neon)**
```css
box-shadow: 0 0 32px rgba(99, 91, 255, 0.3);
```
**Uso:** CTAs, elementos em hover que precisam "brilhar"

---

## 🧩 Componentes

### **1. Buttons (Botões)**

#### **Primary Button**
```tsx
<button className="px-8 py-4 rounded-lg font-medium transition-all"
  style={{
    background: 'var(--gradient-primary)',
    color: '#FFFFFF'
  }}>
  Fale Conosco
</button>
```
- **Padding:** 32px horizontal, 16px vertical
- **Radius:** 12px (Large)
- **Font Weight:** 500 (Medium)
- **Transition:** 300ms ease

#### **Secondary Button**
```tsx
<button className="px-8 py-4 rounded-lg font-medium border transition-all"
  style={{
    background: 'transparent',
    borderColor: 'var(--color-border-soft)',
    color: 'var(--text-primary)'
  }}>
  Saiba Mais
</button>
```

#### **Ghost Button**
```tsx
<button className="px-6 py-3 font-medium transition-all"
  style={{ color: 'var(--color-primary)' }}>
  Ver Projetos
</button>
```

### **2. Cards**

#### **Card Padrão**
```tsx
<div className="p-8 rounded-xl border"
  style={{
    background: 'var(--color-surface-1)',
    borderColor: 'var(--color-border-soft)'
  }}>
  {/* Conteúdo */}
</div>
```
- **Padding:** 32px
- **Radius:** 16px (XLarge)
- **Border:** 1px solid

#### **Card com Hover**
```tsx
<div className="p-8 rounded-xl border transition-all group hover:border-primary"
  style={{
    background: 'var(--color-surface-1)',
    borderColor: 'var(--color-border-soft)'
  }}>
  {/* Efeito glow no hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100"
    style={{
      background: 'radial-gradient(circle, rgba(99,91,255,0.08), transparent)'
    }} />
  {/* Conteúdo */}
</div>
```

#### **Card de Projeto (com imagem)**
```tsx
<div className="rounded-xl overflow-hidden border"
  style={{
    background: 'var(--color-surface-1)',
    borderColor: 'var(--color-border-soft)'
  }}>
  {/* Imagem */}
  <div className="aspect-video overflow-hidden">
    <img className="w-full h-full object-cover transition-transform group-hover:scale-105" />
  </div>
  {/* Conteúdo */}
  <div className="p-6">
    <h3>Título</h3>
    <p>Descrição</p>
  </div>
</div>
```

### **3. Inputs (Campos de Formulário)**

```tsx
<input 
  type="text"
  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-primary transition-colors"
  style={{
    background: 'var(--color-surface-2)',
    borderColor: 'var(--color-border-soft)',
    color: 'var(--text-primary)'
  }}
  placeholder="Digite aqui..."
/>
```
- **Padding:** 16px horizontal, 12px vertical
- **Radius:** 12px
- **Border:** 1px solid
- **Focus:** Border muda para primary

### **4. Badges/Tags**

```tsx
<span className="px-3 py-1 rounded-full text-sm font-medium"
  style={{
    background: 'rgba(99, 91, 255, 0.1)',
    color: 'var(--color-primary)'
  }}>
  React
</span>
```

---

## 🎭 Efeitos Especiais

### **1. Efeito Degradê no Hover (Mouse Follow)**
```tsx
// Mouse tracking gradient effect
const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

<div 
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }}
  style={{
    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
      rgba(99, 91, 255, 0.15), 
      transparent 50%)`
  }}
>
  {/* Conteúdo */}
</div>
```

### **2. Efeito Glow no Hover**
```css
.card:hover {
  box-shadow: 0 0 32px rgba(99, 91, 255, 0.3);
  border-color: var(--color-primary);
}
```

### **3. Gradiente Animado**
```tsx
<div 
  className="gradient-bg"
  style={{
    background: 'var(--gradient-primary)',
    animation: 'gradient-shift 3s ease infinite'
  }}
/>
```

### **4. Texto com Gradiente**
```tsx
<h1 className="gradient-text">
  Transforme sua Empresa
</h1>
```

---

## 🎬 Animações

### **Duração das Transições**
- **Rápida:** 150ms (hover sutil)
- **Média:** 300ms (padrão)
- **Lenta:** 500ms (efeitos complexos)
- **Muito Lenta:** 1000ms+ (animações especiais)

### **Easing Functions**
```css
/* Padrão */
transition: all 0.3s ease;

/* Suave entrada e saída */
transition: all 0.3s ease-in-out;

/* Spring (motion) */
transition: { type: "spring", stiffness: 100, damping: 15 }
```

### **Animações do Projeto**

#### **Contador Animado**
- Anima de 0 até o valor final
- Duração: 2 segundos
- Easing: ease-out

#### **Seções Deslizantes**
- Entra de baixo (translateY: 100px → 0)
- Opacity: 0 → 1
- Threshold: 10% visível

#### **Carousel Infinito**
- Loop contínuo
- Pausa no hover
- Continua de onde parou

#### **Explosão no CTA**
- Partículas coloridas (primary, blue, purple, pink)
- Duração: 1 segundo
- 20 partículas

---

## 📱 Responsividade

### **Breakpoints**
```css
/* Mobile */
@media (max-width: 640px) { }

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### **Ajustes por Dispositivo**

#### **Mobile (< 640px)**
- **Hero Title:** 32px (reduzido de 56px)
- **Section Title:** 24px (reduzido de 36px)
- **Container Padding:** 16px
- **Grid:** 1 coluna
- **Spacing:** Reduzir em 25-50%

#### **Tablet (641px - 1024px)**
- **Hero Title:** 42px
- **Section Title:** 30px
- **Grid:** 2 colunas
- **Spacing:** Reduzir em 15-25%

#### **Desktop (> 1025px)**
- **Valores completos** conforme especificação

---

## 🔧 Implementação Técnica

### **CSS Variables (theme.css)**
Todas as cores, tamanhos e tokens estão definidos como CSS custom properties em `/src/styles/theme.css`

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #0B0D12;
  --color-bg-secondary: #11141B;
  
  /* Superfícies */
  --color-surface-1: #151922;
  
  /* Gradiente */
  --gradient-primary: linear-gradient(135deg, #635BFF, #8A7CFF, #00D4FF);
  
  /* Texto */
  --text-primary: #FFFFFF;
  --text-secondary: #B6BED1;
  
  /* Spacing */
  --space-4: 1rem;
  
  /* E muito mais... */
}
```

### **Uso em Componentes**
```tsx
// Inline styles
<div style={{ 
  background: 'var(--color-surface-1)',
  color: 'var(--text-primary)'
}}>

// Tailwind com CSS variables
<div className="bg-[var(--color-surface-1)]">
```

---

## 📚 Estrutura de Componentes

### **Componentes Principais**
```
/src/app/components/
├── Button.tsx           # Botões (primary, secondary, ghost)
├── Card.tsx             # Cards com variantes
├── Header.tsx           # Cabeçalho com navegação
├── Footer.tsx           # Rodapé
├── AnimatedCounter.tsx  # Contador com animação
└── InfiniteCarousel.tsx # Carousel infinito com pause
```

### **Páginas**
```
/src/app/pages/
├── Home.tsx             # Landing page principal
├── Services.tsx         # Página de serviços
├── Projects.tsx         # Portfólio de projetos
├── About.tsx            # Sobre a empresa
└── Contact.tsx          # Formulário de contato
```

---

## 🎯 Casos de Uso por Seção

### **Hero Section (Acima da dobra)**
- Background: `bg-primary` (#0B0D12)
- Título: `text-hero` (56px) com gradiente opcional
- Descrição: `text-body-large` (18px) com `text-secondary`
- CTA: Botão primary com gradiente
- Spacing: `space-24` (96px) vertical

### **Features/Benefits Section**
- Background: `bg-secondary` (#11141B)
- Grid: 3 colunas (desktop), 1 coluna (mobile)
- Cards: Surface-1 com hover effect
- Icons: 48px, cor primary
- Spacing: `space-16` (64px) vertical

### **Projects/Portfolio Section**
- Background: `bg-primary` (#0B0D12)
- Cards: Imagem aspect-video + conteúdo
- Hover: Scale 1.05 na imagem
- Grid: 2 colunas (desktop), 1 coluna (mobile)

### **Testimonials Section**
- Carousel infinito com pause no hover
- Cards: Surface-1, altura mínima 320px
- Avatares: Círculo com gradiente, iniciais
- Rating: Estrelas amarelas (fill-yellow-400)

### **CTA Final Section**
- Background: Surface-2 ou gradiente
- Título grande com gradiente
- Botão primary com efeito explosão
- Spacing generoso

---

## 🎨 Palette Completa (Resumo Visual)

```
DARK BACKGROUNDS:
███ #0B0D12 (Primary)
███ #11141B (Secondary)
███ #171A22 (Tertiary)

SURFACES:
███ #151922 (Surface 1)
███ #1C2130 (Surface 2)
███ #242A3B (Surface 3)

ACCENTS:
███ #635BFF (Primary Purple)
███ #00D4FF (Cyan Blue)
███ #8A7CFF (Light Purple)
███ #FF7AD9 (Pink)

TEXT:
███ #FFFFFF (Primary)
███ #B6BED1 (Secondary)
███ #7E879C (Muted)

BORDERS:
███ #2A3042 (Soft)
███ #3A4156 (Strong)
```

---

## 📖 Guia de Boas Práticas

### **1. Hierarquia Visual**
- Use o gradiente apenas em 1-2 elementos por seção
- Títulos sempre em `text-primary` (#FFFFFF)
- Corpo de texto em `text-secondary` (#B6BED1)
- Informações secundárias em `text-muted` (#7E879C)

### **2. Espaçamento**
- Sempre use a escala de spacing definida
- Mantenha consistência vertical entre seções
- Mobile: reduza spacing em 25-50%

### **3. Contraste**
- Certifique-se de WCAG AAA para textos importantes
- Ratio mínimo: 7:1 (texto principal)
- Ratio mínimo: 4.5:1 (texto secundário)

### **4. Performance**
- Use `will-change` com cuidado
- Prefira `transform` e `opacity` para animações
- Otimize imagens (WebP quando possível)

### **5. Acessibilidade**
- Sempre forneça alternativas visuais a cores
- Use labels semânticos
- Mantenha tab order lógica
- Focus states sempre visíveis

---

## 📦 Exportação de Assets

### **Ícones**
- Biblioteca: Lucide React
- Tamanho padrão: 24px
- Cor: `currentColor` (herda do texto)

### **Imagens**
- Formato: WebP (fallback: JPG/PNG)
- Aspect ratios: 16:9 (projetos), 1:1 (avatares)
- Otimização: ImageWithFallback component

### **Logos**
- Versão light (fundo escuro) ✅
- Versão dark (fundo claro) ⚠️
- SVG preferencial
- PNG fallback em 2x, 3x

---

## 🚀 Próximos Passos

### **Para Implementar no Figma:**
1. Crie estilos de cor com os hex codes acima
2. Configure text styles com a tipografia Inter
3. Crie componentes de botões (3 variantes)
4. Crie componentes de cards (com auto-layout)
5. Configure spacing tokens (4, 8, 16, 24, 32, 48, 64, 96)
6. Crie gradientes salvos (primary, hover)

### **Plugins Úteis:**
- **Design Tokens:** Exportar tokens para código
- **Content Reel:** Preencher textos automaticamente
- **Unsplash:** Imagens de placeholder
- **Iconify:** Integrar Lucide icons

---

## 📞 Contato do Projeto

**Empresa:** JMTechSolutions  
**Tipo:** Startup de Tecnologia  
**Serviços:** Desenvolvimento de sistemas sob medida, automações, integrações, consultoria técnica  
**Objetivo:** Converter visitantes em clientes através de design moderno e profissional

---

**Versão do Documento:** 1.0  
**Última Atualização:** Março 2026  
**Design System por:** Figma Make AI Assistant
