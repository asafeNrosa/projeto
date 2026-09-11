# Stage 1: build da aplicação Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx ng build --configuration production

# Stage 2: servir com Nginx (só os arquivos estáticos do browser)
FROM nginx:alpine
COPY --from=build /app/dist/projeto/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
