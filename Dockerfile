FROM node:20.12.2

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]