import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

connection.connect((err) => {
	if (err) {
		console.error("Error connecting to MySQL", err.stack);
		return;
	}
	console.log("Connected to MySQL");
});

app.get("/tasks", (req: Request, res: Response) => {
	connection.query("SELECT * from tasks", (error, results) => {
		if (error) throw error;
		res.json(results);
	});
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is running in port 3000.");
});
