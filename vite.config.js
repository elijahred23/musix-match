import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginProxy from 'vite-plugin-proxy';

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()]
})