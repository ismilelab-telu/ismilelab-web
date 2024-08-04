FROM node:18-alpine AS build

WORKDIR /usr/web/ismile

COPY . .

# Using Corepack
RUN corepack enable && corepack install

RUN yarn install

ARG SKIP_PREFLIGHT_CHECK=true

# Set API URL Placeholder
ARG VITE_API_BASE_URL=VITE_API_BASE_URL_PLACEHOLDER

RUN yarn build

# Production Image
FROM nginx:alpine

COPY --from=build /usr/web/ismile/dist /usr/share/nginx/html

# NGINX Conf
COPY ./nginx/nginx.conf /etc/nginx

# Copy the script to the container
COPY env.sh /docker-entrypoint.d/

# Make the script executable
RUN chmod +x /docker-entrypoint.d/env.sh

