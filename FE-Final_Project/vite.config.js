// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FE-Final_Project/', 
  plugins: [react()],
  server: {     
    port: 3000, 
  },
});