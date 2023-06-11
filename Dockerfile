FROM node:16.13.1-alpine3.14 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:16.13.1-alpine3.14
USER node:node
WORKDIR /app
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/env-sample /app/.env
COPY --chown=node:node package.json .
ENV PORT 3010
EXPOSE 3010
CMD ["node","build"]