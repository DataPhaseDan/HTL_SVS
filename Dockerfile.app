# Stage 1: Build application (node:21.6.1)
FROM node:21.6.1

WORKDIR /usr/local/zsv_app/app


# COPY ./src /usr/local/zsv_app/ src
COPY ./app /usr/local/zsv_app/app


RUN npm install
RUN npm run build

# Stage 2: Serve application with Nginx (nginx:alpine)
