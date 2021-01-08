FROM node:14-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY pages/ pages/
COPY public/ public/
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY next.config.js next.config.js

RUN yarn add --dev typescript @types/react @types/node
RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
