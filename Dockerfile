# ───── Stage 1: build con Astro ─────
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# ───── Stage 2: runtime estático con `serve` ─────
FROM node:20-alpine AS runtime
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./
COPY --from=build /app/public/serve.json ./serve.json
EXPOSE 3000
# IMPORTANTE: NO usar el flag `-s` (single-page-app mode).
# Con `-s`, serve devuelve index.html (la home) para cualquier ruta no encontrada,
# rompiendo /diagnostico, /servicios/heritage-protocol, etc. en producción.
# Sin `-s`, serve respeta cleanUrls y rewrites de serve.json correctamente.
CMD ["serve", "-l", "3000", "."]
