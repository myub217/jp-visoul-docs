var defineConfig = require('vite').defineConfig;
var react = require('@vitejs/plugin-react');
var path = require('path');
var compression = require('vite-plugin-compression');
var dotenv = require('dotenv');
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
