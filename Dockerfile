FROM navikt/node-express:14

WORKDIR /var/server

USER apprunner

COPY src/ src/
COPY scripts/ scripts/
COPY public/ public/
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY next.config.js next.config.js
COPY .env .env
COPY .babelrc .babelrc
COPY tsconfig.json tsconfig.json

USER root
RUN chown -R apprunner /var/server/public
RUN chown -R apprunner /var/server/scripts
USER apprunner

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
