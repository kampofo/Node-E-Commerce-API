import express, { Express } from "express";

const app: Express = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send("<h1>Hello from TypeScript!</h1>");
});

app.listen(8080, () => {
	console.log("Server Listening on PORT: 8080");
});
