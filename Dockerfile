FROM navikt/node-express:12.2.0-alpine
WORKDIR /usr/src/app

COPY pages/ pages/
COPY public/ public/
COPY server/ server/
COPY package.json /
COPY yarn.lock /

RUN yarn install --frozen-lockfile

EXPOSE 3000
ENTRYPOINT ["node", "server/server.js"]
