import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginProxy from 'vite-plugin-proxy';

export default defineConfig({
 plugins: [react()]
})