FROM node:18

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo devDependencies para ts-node)
RUN npm install

# Copiar el esquema de Prisma
COPY prisma ./prisma

# Copiar el código fuente (incluyendo el cliente generado en Windows, se sobreescribirá)
COPY src ./src
COPY tsconfig.json ./

# Generar el cliente de Prisma para Linux (sobreescribe el de Windows)
RUN npx prisma generate

# Exponer el puerto
EXPOSE 3000

# Iniciar con ts-node
CMD ["npx", "ts-node", "src/index.ts"]

