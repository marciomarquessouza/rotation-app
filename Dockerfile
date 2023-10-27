FROM node:18-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build

RUN npx prisma generate

EXPOSE 5001

CMD ["yarn", "start"]
