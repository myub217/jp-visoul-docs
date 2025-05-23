const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('path');
const compression = require('vite-plugin-compression');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  plugins: [
    react(),
    compression()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  },
  define: {
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV),
    __API_URL__: JSON.stringify(process.env.API_URL || '')
  },
  base: './'
});