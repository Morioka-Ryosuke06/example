import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  svelteOptions: {
    kit: {
      // 他の設定...
      vite: {
        // グローバルな JavaScript ファイルを指定
        optimizeDeps: {
          include: ['./src/modules/main.js'],
        },
      },
    },
  },
});
