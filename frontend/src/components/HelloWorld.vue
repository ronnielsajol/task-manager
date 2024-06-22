<script setup lang="ts">
	import { defineProps } from "vue";

	const props = defineProps({
		msg: String,
	});
</script>
<template>
	<div class="hello">
		<h1>{{ props.msg }}</h1>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
