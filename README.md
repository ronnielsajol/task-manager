# Task Manager

This is a project designed to manage tasks. It includes functionality to fetch tasks, add new tasks, update task statuses, and delete tasks.

## Setup

1. Clone the repository: `git clone https://gitlab.com/ronnielsajol/task-manager.git`
2. Install dependencies: `npm install`
3. Configure your MySQL database connection by creating a `.env` file with the following variables:
DB_HOST=your_database_host
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

4. Start the server: `npm start`

## Endpoints

- GET `/api/tasks`: Get all tasks.
- POST `/api/tasks`: Add a new task.
- PUT `/api/tasks/:id`: Update the status of a task.
- DELETE `/api/tasks/:id`: Delete a task.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Axios


---
