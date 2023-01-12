FROM node:18-alpine

WORKDIR /app-backend

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

RUN npm run build
