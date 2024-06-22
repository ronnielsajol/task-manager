import exp from "constants";
import express from "express";

const router = express.Router();

const { getTasks, addTask, updateTask, deleteTask } = require("../Controllers/TaskController");

router.get("/tasks", getTasks);
router.post("/tasks", addTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
