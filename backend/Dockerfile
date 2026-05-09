FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo devDependencies para ts-node)
RUN npm install

# Copiar el esquema de Prisma
COPY prisma ./prisma

# Generar el cliente de Prisma para Linux (dentro del contenedor)
RUN npx prisma generate

# Copiar el resto del código fuente (sin el cliente generado en Windows)
COPY src ./src
COPY tsconfig.json ./

# Exponer el puerto
EXPOSE 3000

# Iniciar directamente con ts-node (sin compilar)
CMD ["npx", "ts-node", "src/index.ts"]
