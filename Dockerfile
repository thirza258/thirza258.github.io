# Dockerfile

# Stage 1: Build the React application
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Capture VITE env variables during build time
ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_PUBLIC_KEY
ENV VITE_SERVICE_ID=$VITE_SERVICE_ID
ENV VITE_TEMPLATE_ID=$VITE_TEMPLATE_ID
ENV VITE_PUBLIC_KEY=$VITE_PUBLIC_KEY

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the build output to replace the default nginx contents.
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]