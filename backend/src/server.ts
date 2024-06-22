import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import taskRouter from "../Routers/taskRouter";
import cors from "cors";

dotenv.config();

const app = express();

app.use(bodyParser.json());

const corsOptions = {
	origin: "http://localhost:8080", // Replace this with your frontend's origin
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api", taskRouter);

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is running in port 3000.");
});
