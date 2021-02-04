FROM navikt/node-express:14-alpine

WORKDIR /usr/src/app
#RUN apt-get update
#RUN apt-get install sudo
RUN chown -R apprunner /usr/src/app

ENV NODE_ENV=production

COPY src/ src/
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY next.config.js next.config.js
COPY .env .env

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
