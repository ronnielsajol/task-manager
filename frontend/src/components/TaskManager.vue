<template>
	<div class="task-manager">
		<h1>Task Manager</h1>

		<form @submit.prevent="addTask">
			<input v-model="newTaskTitle" placeholder="Add a title for your task..." required />
			<button type="submit" class="btn" id="add">Add Task</button>
		</form>

		<ul>
			<li v-for="task in tasks" :key="task.id" class="task" :class="task.status ? 'task-done' : ''">
				<span :style="{ textDecoration: task.status ? 'line-through' : 'none' }">
					{{ task.title }}
				</span>
				<div>
					<button @click="toggleTaskStatus(task)" class="btn" id="update">Toggle Status</button>
					<button @click="deleteTask(task.id)" class="btn" id="delete">Delete</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import axios from "axios";
	import { ref } from "vue";

	interface Task {
		id: number;
		title: string;
		status: boolean;
		time_created: string;
	}

	const tasks = ref([] as Task[]);
	const newTaskTitle = ref("");

	const fetchTasks = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/tasks");
			tasks.value = response.data;
		} catch (error) {
			console.error("Error fetching tasks:", error);
		}
	};

	const addTask = async () => {
		try {
			const newTask = {
				title: newTaskTitle.value,
				status: false,
			};
			await axios.post("http://localhost:3000/api/tasks", newTask);
			fetchTasks();
			newTaskTitle.value = "";
		} catch (error) {
			console.error("Error adding task:", error);
		}
	};

	const toggleTaskStatus = async (task: Task) => {
		try {
			task.status = !task.status;
			await axios.put(`http://localhost:3000/api/tasks/${task.id}`, { status: task.status });
			fetchTasks();
		} catch (error) {
			console.error("Error updating task status:", error);
		}
	};

	const deleteTask = async (taskId: number) => {
		try {
			await axios.delete(`http://localhost:3000/api/tasks/${taskId}`);
			fetchTasks();
		} catch (error) {
			console.error("Error deleting task:", error);
		}
	};

	fetchTasks();
</script>

<style scoped>
	.task {
		border: 1px solid #ccc;
		border-radius: 12px;
		padding: 12px;
	}

	.task-done {
		text-decoration: line-through;
		background-color: #d3d3d3;
	}

	#add {
		background-color: #0074d9;
		color: white;
	}

	#update {
		background-color: #ffa500;
		color: white;
	}

	#delete {
		background-color: #ff4136;
		color: white;
	}
	.btn {
		border: 1px solid #ccc;
		border-radius: 12px;
		padding: 0.5rem 1rem;
		margin-left: 0.5rem;
		font-weight: 400;
	}

	.task-manager {
		max-width: 600px;
		margin: 0 auto;
	}

	form {
		display: flex;
		margin-bottom: 1rem;
	}

	form input {
		border: 1px solid #ccc;
		border-radius: 12px;
		padding: 12px;
		flex: 1;
		margin-right: 0.5rem;
	}

	form button {
		padding: 0.5rem 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	button {
		margin-left: 0.5rem;
	}
</style>
