<script setup lang="ts">
	import HelloWorld from "./components/HelloWorld.vue";
	import TaskManager from "./components/TaskManager.vue";
</script>

<template>
	<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	<TaskManager />
</template>

<style scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
