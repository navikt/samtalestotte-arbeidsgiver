FROM navikt/node-express:14

WORKDIR /var/server

USER apprunner

COPY src/ src/
COPY public/ public/
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY next.config.js next.config.js
COPY .env .env
COPY .babelrc .babelrc
COPY tsconfig.json tsconfig.json

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
