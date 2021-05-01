FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY package.json ./

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]