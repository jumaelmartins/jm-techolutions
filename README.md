# JMTechSolutions — Site Institucional

Website institucional moderno e completo para empresa de tecnologia, com painel administrativo CMS integrado. Construído com Next.js 16, React 19 e TypeScript, containerizado com Docker e estilizado com um design escuro premium inspirado no Stripe.

---

## Visão Geral

**JMTechSolutions** é uma aplicação web full-stack que combina um site de marketing com um painel de administração para gestão de conteúdo. O site apresenta as soluções da empresa, portfólio de projetos, depoimentos de clientes e formulário de contato — tudo gerenciável via CMS sem necessidade de alterar código.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript 5 |
| Estilização | SCSS Modules + CSS Variables |
| Autenticação | JWT (`jose`) + bcryptjs |
| Ícones | Lucide React |
| Infra | Docker + Docker Compose |
| Storage | JSON file-based (content.json) |

---

## Funcionalidades

### Site Público

- **Home** — Hero com animações, vitrine de serviços, portfólio de projetos e carrossel de depoimentos
- **Serviços** — Detalhamento de cada serviço com layout alternado, tecnologias e diferenciais
- **Projetos** — Portfolio com case studies completos: desafio, solução, resultados e stack
- **Sobre** — História da empresa, missão/visão, valores, linha do tempo e perfil do fundador
- **Contato** — Cards de contato e formulário de solicitação de orçamento

### Painel Admin (CMS)

Acesso em `/admin` com autenticação por senha. Permite editar sem tocar no código:

- **Depoimentos** — Adicionar, editar, remover e ativar/desativar
- **Projetos** — Gerenciar case studies completos com imagem e cor de destaque
- **Serviços** — Editar título, descrição, funcionalidades e stack
- **Estatísticas** — Números do hero da home (valor, sufixo, rótulo)
- **Contato** — Email, telefone, WhatsApp e localização

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── admin/              # Login e dashboard CMS
│   │   └── dashboard/
│   ├── api/
│   │   ├── auth/           # POST /api/auth (login), DELETE (logout)
│   │   └── content/        # GET /api/content, GET|PUT /api/content/[section]
│   ├── components/
│   │   ├── Header.tsx      # Navegação principal + menu mobile
│   │   ├── Footer.tsx      # Footer 4 colunas com links e contato
│   │   ├── AnimatedCounter.tsx  # Contador com Intersection Observer
│   │   └── ScrollTop.tsx   # Botão scroll-to-top
│   ├── contato/
│   ├── projetos/
│   ├── servicos/
│   ├── sobre/
│   ├── page.tsx            # Home page
│   ├── layout.tsx
│   └── globals.css
├── lib/
│   ├── auth.ts             # JWT (signToken, verifyToken, checkPassword)
│   └── content.ts          # Leitura e escrita do content.json
├── data/
│   └── content.json        # Dados do CMS (persistido via Docker volume)
└── styles/
    └── theme.css           # Tokens de design (cores, espaçamento, tipografia)
```

---

## API

### Autenticação

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/auth` | Login com senha. Define cookie `admin_token` (JWT, 24h) |
| `DELETE` | `/api/auth` | Logout. Remove cookie `admin_token` |

**Body (POST):**
```json
{ "password": "sua-senha" }
```

### Conteúdo

| Método | Endpoint | Auth | Descrição |
|--------|----------|------|-----------|
| `GET` | `/api/content` | Não | Retorna todo o conteúdo |
| `GET` | `/api/content/[section]` | Não | Retorna seção específica |
| `PUT` | `/api/content/[section]` | Sim | Atualiza seção específica |

**Seções disponíveis:** `hero`, `stats`, `services`, `projects`, `testimonials`, `contact`

---

## Configuração e Execução

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
ADMIN_PASSWORD=sua-senha-aqui
JWT_SECRET=seu-segredo-jwt-aqui
```

> **Padrões (se não configurado):**
> - `ADMIN_PASSWORD`: `admin@jmtech2026`
> - `JWT_SECRET`: `jmtech-super-secret-key-2026`

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 7000)
npm run dev
```

Acesse: `http://localhost:7000`

### Build de Produção

```bash
npm run build
npm start
```

### Docker (Recomendado para Produção)

```bash
# Subir container em background
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar
docker-compose down
```

Acesse: `http://localhost:7000`

> O conteúdo do CMS é persistido no volume `site_data` — não é perdido ao recriar o container.

---

## Design System

Design escuro premium com os seguintes tokens principais:

### Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-primary` | `#0B0D12` | Fundo principal |
| `--bg-secondary` | `#11141B` | Fundo secundário |
| `--accent-primary` | `#635BFF` | Roxo — ações principais |
| `--accent-blue` | `#00D4FF` | Ciano — destaques |
| `--text-primary` | `#FFFFFF` | Texto principal |
| `--text-secondary` | `#B6BED1` | Texto secundário |
| `--text-muted` | `#7E879C` | Texto auxiliar |

### Tipografia

- **Fonte:** Inter (Google Fonts)
- **Hero:** 56px / weight 700
- **Section title:** 36px / weight 700
- **Body:** 16px / weight 400

### Convenções de Estilo

- Todos os estilos de componente usam **SCSS Modules** (`*.module.scss`)
- Tokens globais definidos em `src/styles/theme.css` como CSS custom properties
- Nenhum estilo inline nos componentes

---

## Autenticação

- Login por senha (configurada via `ADMIN_PASSWORD`)
- JWT assinado com `HS256`, expiração de 24 horas
- Cookie `admin_token` com flags `HttpOnly`, `Secure` (produção) e `SameSite: lax`
- Rotas protegidas verificam o token a cada requisição

---

## Scripts

```bash
npm run dev    # Servidor de desenvolvimento (porta 7000)
npm run build  # Build de produção
npm run start  # Inicia servidor de produção (porta 7000)
npm run lint   # Verifica código com ESLint
```

---

## Requisitos

- Node.js 20+
- npm 10+
- Docker e Docker Compose (para deploy containerizado)

---

## Autor

Desenvolvido por **Jumael Martins** — JMTechSolutions
Fundada em 2025 | Soluções tecnológicas sob medida
