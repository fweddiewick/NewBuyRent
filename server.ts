import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import shared serverless handlers to prevent code duplication
// @ts-ignore
import propertyHandler from './api/property.js';
// @ts-ignore
import reportHandler from './api/report.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '10mb' }));

  // Register shared backend routes
  app.get('/api/property', (req, res) => {
    return propertyHandler(req, res);
  });

  app.post('/api/report', (req, res) => {
    return reportHandler(req, res);
  });

  if (!isProd) {
    // Vite dev server in middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SG Property Co-Pilot] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[SG Property Co-Pilot] Failed to start server:', err);
  process.exit(1);
});
