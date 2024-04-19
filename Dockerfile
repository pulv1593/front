FROM node:20.12.2

WORKDIR /usr/src/app

COPY /front/roulette-front/package.json 

RUN npm i

COPY ./ ./

EXPOSE 3000

CMD ["npm", "dev"]