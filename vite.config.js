import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
  build: {
    assetsDir: 'assets', // This tells Vite to put assets in a folder named 'assets' inside the output directory
    publicDir: 'src/assets', // Treat src/assets as public assets and copy them to the root of the output directory
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Ensure your entry point is correct
      },
    },
  },
})
