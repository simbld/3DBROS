# 3DBROS-nestjs

# see https://docs.docker.com/engine/reference/builder/
# see https://nodejs.org/en/blog
# see https://docs.npmjs.com/cli/v10/commands/npm-ci

FROM node:20.11.0
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build
EXPOSE 4001
CMD ["npm", "run", "start:dev"]