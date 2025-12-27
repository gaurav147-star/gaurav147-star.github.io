# Use Node.js LTS version
FROM node:18-alpine

# Install dependencies
# (No native deps needed for pure React+Tailwind)

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]