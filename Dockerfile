FROM navikt/node-express:16

WORKDIR /var/server

USER apprunner

COPY src/ src/
COPY public/ public/
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json
COPY .next .next
COPY node_modules node_modules

USER root
RUN chown -R apprunner /var/server/public
USER apprunner

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
