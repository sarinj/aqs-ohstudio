FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app ./
RUN npm ci --only=production
EXPOSE 3000


CMD ["npm", "start"]
