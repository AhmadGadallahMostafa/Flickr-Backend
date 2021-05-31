# --------------> The build image
FROM node:latest AS builder 
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
RUN npm install
USER node
CMD ["npm", "start"]


# --------------> The production image
FROM node:lts-alpine
RUN mkdir /usr/src/app
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
EXPOSE 8080
CMD ["npm", "start"]