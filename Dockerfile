FROM cgr.dev/chainguard/node:18

WORKDIR /usr/src/app
ENV PORT=3000 \
    NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

COPY --chown=node:node .next/standalone ./
COPY --chown=node:node .next/static ./.next/static
COPY --chown=node:node public ./public

EXPOSE 3000

ENV NODE_OPTIONS="--no-experimental-fetch"
CMD ["node", "server.js"]