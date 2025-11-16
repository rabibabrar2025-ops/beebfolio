import express from "express";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the dist/public directory
const distPath = resolve(__dirname, '..', 'dist', 'public');
if (existsSync(distPath)) {
  app.use(express.static(distPath));
}

// API routes would go here
// app.get('/api/example', (req, res) => {
//   res.json({ message: 'Hello from API' });
// });

// Catch-all route to serve index.html for client-side routing
app.get('*', (req, res) => {
  const indexPath = resolve(distPath, 'index.html');
  if (existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Build files not found. Please run npm run build first.');
  }
});

// Export the Express app for Vercel
export default app;
