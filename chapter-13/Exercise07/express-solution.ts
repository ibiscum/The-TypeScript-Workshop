import express, { Request, Response } from 'express';
import { promises } from 'fs';
import { resolve } from 'path';
import escapeHtml from 'escape-html';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name) {
    await promises.appendFile(resolve(__dirname, 'names.txt'), `${name}\n`);
  }
  res.send(`Hello ${name ? escapeHtml(String(name)) : 'World'}!`);
});

app.listen(8888);
