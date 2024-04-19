FROM node:16

WORKDIR /front/roulette-front

COPY package.json ./

RUN npm i

COPY ./ ./

EXPOSE 3000

CMD ["node", "server.js"]