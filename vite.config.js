import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import child_process from 'child_process'

if (process.env.NODE_ENV) {
  var basepath = '';
} else {
  var basepath = './';
  process.env.VITE_DEV = "1";
  console.log(process.env);
  child_process.exec("electron .");
}

// https://vitejs.dev/config/
export default defineConfig({
  base: basepath,
  plugins: [vue()]
})
