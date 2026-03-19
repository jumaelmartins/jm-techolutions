# ─────────────────────────────────────────────────────────────
# Stage 1: instalar dependências
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# ─────────────────────────────────────────────────────────────
# Stage 2: build da aplicação
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ─────────────────────────────────────────────────────────────
# Stage 3: imagem de produção (mínima)
# ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=7000
ENV HOSTNAME=0.0.0.0

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Copiar output standalone (server.js + node_modules mínimo)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copiar assets estáticos
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public        ./public

# Criar diretório de dados com conteúdo padrão.
# Na primeira execução o Docker inicializa o named volume
# com esse conteúdo; nas execuções seguintes o volume persiste.
RUN mkdir -p /app/src/data
COPY --from=builder --chown=nextjs:nodejs /app/src/data/content.json /app/src/data/content.json

USER nextjs

EXPOSE 7000

CMD ["node", "server.js"]
