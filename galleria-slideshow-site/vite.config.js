import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: [sveltePreprocess({
      sass: true
    })]
  })]
})
