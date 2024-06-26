/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

/*
 * Handles paths that aren't handled by any other route handler.
 * It responds with `index.html` to support page refreshes with React Router.
 * This must be the _last_ route, just before errorMiddleware.
 */
// app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.get('/api/dictionary', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "dictionary"
    `;

    const result = await db.query(sql);

    if (!result.rows[0]) throw new ClientError(404, 'no terms found!');

    res.json(result.rows);
  } catch (e) {
    next(e);
  }
});

app.post('/api/addTermAndDefinition', async (req, res, next) => {
  try {
    const { term, definition } = req.body;
    const sql = `
    insert into "dictionary" ("term", "definition")
    values ($1, $2)
    returning "term","definition"
  `;

    const params = [term, definition];
    const result = await db.query(sql, params);
    const response = result.rows[0];
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

app.delete('/api/delete/:term', async (req, res, next) => {
  try {
    const term = req.params.term;

    if (!term) {
      throw new ClientError(400, 'term is needed');
    }

    const sql = `
    delete from "dictionary"
      where "term" = $1
      returning "term", "definition"
  `;

    const param = [term];
    const result = await db.query(sql, param);

    if (result.rows.length === 0) {
      throw new ClientError(400, 'no term found!');
    }
    const deletedTerm = result.rows;
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
