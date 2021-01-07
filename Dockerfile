FROM node:14-alpine

WORKDIR /usr/src/app

COPY pages/ pages/
COPY public/ public/
COPY package.json /
COPY yarn.lock /
COPY .next/ .next/

RUN yarn install --frozen-lockfile

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
