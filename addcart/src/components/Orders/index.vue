<template>
	<div id="app">
		<v-header></v-header>
		<v-serve></v-serve>
	</div>
</template>

<script>
	import vHeader from './header.vue';
	import vServe from './serve.vue';
	export default {
		components:{
			vHeader,vServe
		}
	}
</script>

<style>
	
</style>