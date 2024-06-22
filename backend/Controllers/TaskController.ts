import mysql from "mysql2";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

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

const getTasks = (req: Request, res: Response) => {
	connection.query("SELECT * from tasks", (error, results) => {
		if (error) throw error;
		res.json(results);
	});
};

const addTask = (req: Request, res: Response) => {
	const task = req.body;
	connection.query("INSERT INTO tasks (title, status) VALUES (?, ?)", [task.title, task.status], (error, results) => {
		if (error) throw error;
		const insertId = (results as mysql.ResultSetHeader).insertId;
		res.status(201).json({ id: insertId });
	});
};

const updateTask = (req: Request, res: Response) => {
	const { id } = req.params;
	const { status } = req.body;
	connection.query("UPDATE tasks SET status = ? WHERE id = ?", [status, id], (error) => {
		if (error) throw error;
		res.sendStatus(204);
	});
};

const deleteTask = (req: Request, res: Response) => {
	const { id } = req.params;
	connection.query("DELETE FROM tasks WHERE id = ?", [id], (error) => {
		if (error) throw error;
		res.sendStatus(204);
	});
};

module.exports = {
	getTasks,
	addTask,
	updateTask,
	deleteTask,
};
