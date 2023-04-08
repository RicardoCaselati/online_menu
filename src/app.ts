import express from 'express';
import routes from './database/Routes/router';

const app = express();
app.use(express.json());
// Não remover essa rota
app.get('/', (_req, res) => res.json({ ok: true }));
app.use(routes);

export default app;