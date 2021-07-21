FROM node:latest AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

EXPOSE 8080

RUN npm run build

FROM node:latest AS production

ARG node_env=production
ENV node_env=${node_env}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist


CMD ["node", "dist/main"]

