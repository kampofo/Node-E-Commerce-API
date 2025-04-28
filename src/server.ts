import express, { Express } from "express";
import 'dotenv/config';

// db import
import { createTables } from './config/database';

// route imports
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


// create postgres tables and start express server
const startServer = async () => {
	try {
		await createTables();
		console.log('Tables are ready.');

		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error('Failed to start server', error);
		process.exit(1); // crash app if database setup fails
	}
};

startServer();