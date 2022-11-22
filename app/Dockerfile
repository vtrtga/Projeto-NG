FROM node
WORKDIR /app-frontend

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
