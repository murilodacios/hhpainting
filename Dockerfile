FROM node:latest

RUN mkdir -p /usr/src/app
ENV PORT 3010

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install

COPY . /usr/src/app

RUN yarn build

RUN npx prisma generate

EXPOSE 3010
CMD [ "yarn", "start" ]