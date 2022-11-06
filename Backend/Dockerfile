FROM node:14-alpine

WORKDIR /Backend

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "run", "server"]