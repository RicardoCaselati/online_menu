import express from 'express';
// import routes from './Routes/Routes';

const app = express();
app.use(express.json());
// Não remover essa rota
app.get('/', (req, res) => res.json({ ok: true }));
// app.use(routes);

export default app;