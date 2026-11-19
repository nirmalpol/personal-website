import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: { noExternal: ['react-helmet-async'] },
  // IMPORTANT: If deploying to https://username.github.io/repo-name/, change this to '/repo-name/'
  // If deploying to https://username.github.io/, keep it as '/'
  base: "/",
});
