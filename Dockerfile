FROM node:20.18.0-alpine

WORKDIR /app

COPY . .

RUN npm set strict-ssl false

RUN npm i

RUN npm run build

EXPOSE 9090

CMD [ "npm", "run", "start" ]
