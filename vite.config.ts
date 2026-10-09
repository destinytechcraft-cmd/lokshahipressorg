import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'google-sites-proxy',
        configureServer(server) {
          server.middlewares.use('/api/embed-site', async (_req, res) => {
            try {
              const https = await import('https');
              https.get('https://sites.google.com/view/lokshahipressorg/home', (targetRes) => {
                let body = '';
                targetRes.on('data', (chunk) => (body += chunk));
                targetRes.on('end', () => {
                  const modified = body.replace(
                    '<head>',
                    '<head><base href="https://sites.google.com/view/lokshahipressorg/home">'
                  );
                  res.writeHead(200, {
                    'Content-Type': 'text/html; charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'no-cache',
                  });
                  res.end(modified);
                });
              });
            } catch {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Failed to proxy site');
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
