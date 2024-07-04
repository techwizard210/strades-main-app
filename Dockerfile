# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:lts as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
# Stage 1: Build the Nuxt app
RUN npx nuxi generate

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:stable
COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY --from=builder /app/.nuxt/dist/client/_nuxt /usr/share/nginx/html/_nuxt
