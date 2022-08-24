FROM node:16.16-alpine as base
FROM base as build

WORKDIR /www

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

FROM base
WORKDIR /www
COPY --from=build /www/node_modules node_modules
COPY . /www

EXPOSE 5000

CMD ["yarn", "start"]
