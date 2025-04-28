import express, { Express } from "express";

import adminRoutes from './routes/admin.routes';

const app: Express = express();
const PORT = process.env.PORT || 8080;

// app middlewares
app.use(express.json());

// routing middlewares
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
	res.send("<h1>Hello from TypeScript!</h1>");
});

app.listen(PORT, () => {
	console.log(`Server Listening on PORT: ${PORT}`);
});
