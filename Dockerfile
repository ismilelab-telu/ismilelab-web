FROM node:18-alpine AS build

WORKDIR /usr/web/ismile

COPY . .

RUN yarn install

ENV SKIP_PREFLIGHT_CHECK=true

RUN yarn build

FROM nginx:alpine

COPY --from=build /usr/web/ismile/dist /usr/share/nginx/html

# NGINX Conf
COPY ./nginx/nginx.conf /etc/nginx

# Copy the script to the container
COPY env.sh /docker-entrypoint.d/

# Make the script executable
RUN chmod +x /docker-entrypoint.d/env.sh

