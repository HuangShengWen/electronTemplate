import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:'../uidist'
  },
  base:'',//不要更改
  plugins: [vue()],
})
