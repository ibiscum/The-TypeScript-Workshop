import express, { Request, Response } from 'express';
import { promises } from 'fs';
import { resolve } from 'path';
import escapeHtml from 'escape-html';
import rateLimit from 'express-rate-limit';

const app = express();

// Rate limiter: max 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.get('/', limiter, async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name) {
    await promises.appendFile(resolve(__dirname, 'names.txt'), `${name}\n`);
  }
  res.send(`Hello ${name ? escapeHtml(String(name)) : 'World'}!`);
});

app.listen(8888);
