<script setup>
	import { ref } from "vue";

	const features = ref([
		{
			title: "Accurate Predictions",
			description:
				"Our team of experts analyzes every game to provide you with accurate predictions that you can trust.",
		},
		{
			title: "Comprehensive Coverage",
			description:
				"We cover a wide range of sports, including football, basketball, baseball, hockey, and more.",
		},
		{
			title: "Real-Time Updates",
			description:
				"We provide real-time updates on breaking news and injury reports to help you make informed decisions.",
		},
		{
			title: "Expert Analysis",
			description:
				"Our team of analysts includes former professional athletes, coaches, and sports journalists who bring a wealth of knowledge and experience to every prediction.",
		},
		{
			title: "User-Friendly Interface",
			description:
				"Our website is easy to navigate, and our picks are presented in a clear and concise manner, making it easy for you to find the information you need.",
		},
	]);
</script>

<template>
	<ul class="bullet-line-list ms-3">
		<li class="mb-4" v-for="feature in features">
			<h6>{{ feature.title }}</h6>
			<p>{{ feature.description }}</p>
		</li>
	</ul>
</template>

<style scoped>
	@import url("/assets/css/horizontal-layout-light/style.css");
</style>
