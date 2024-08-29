import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'


const deriveFileNameFromChunkInfo = (chunkInfo: { facadeModuleId: string | null }): string => {
  if (!chunkInfo.facadeModuleId) {
    return 'assets/js/[name]-[hash].js';
  }

  const basename = path.basename(chunkInfo.facadeModuleId);
  if (basename.startsWith('@')) {
    return 'assets/js/[name]-[hash].js';
  }

  const ext = path.extname(chunkInfo.facadeModuleId);
  const outputFileName = chunkInfo.facadeModuleId.replace(__dirname, 'assets/js').replace(ext, '.js');
  return outputFileName;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: deriveFileNameFromChunkInfo,
        entryFileNames: deriveFileNameFromChunkInfo,
        assetFileNames: 'assets/[ext]/[name].[ext]',
      },
    },
  },
})
