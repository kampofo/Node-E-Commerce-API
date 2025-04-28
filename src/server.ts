import express, { Express } from "express";

import adminRoutes from '../src/routes/admin.routes';

const app: Express = express();

// app middlewares
app.use(express.json());

// routing middlewares
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
	res.send("<h1>Hello from TypeScript!</h1>");
});

app.listen(8080, () => {
	console.log("Server Listening on PORT: 8080");
});
