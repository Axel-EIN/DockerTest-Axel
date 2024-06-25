# Utilise l'image officielle
FROM node:16.13.2-alpine

# Définir le repertoire de travail dans le container ou /www
WORKDIR /www

# Copie package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Expose le port
EXPOSE 8000

# Démarrer l'application
CMD ["node", "server.js"]