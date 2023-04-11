<script setup>
	import { onBeforeMount, onMounted, provide, ref } from "vue";
	import axios from "axios";
	import { user } from "@/stores/user";

	import { RouterView } from "vue-router";
	import SideBar from "../components/app/SideBar.vue";
	import NavBar from "../components/app/NavBar.vue";
	import Footer from "../components/app/Footer.vue";

	import "../stores/imports.js";

	const env = import.meta.env;
	const sessions = ref([]);
	const appUser = ref(user.getUser());

	provide("user", appUser);

	function loadSessions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.getUser().id}/sessions`,
		};

		axios
			.request(config)
			.then((response) => {
				const session = user.getSession();
				sessions.value = response.data;

				const check = sessions.value.find(
					(e) => e.deviceId == session.deviceId
				);

				if (!check) {
					user.logout();
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	async function loadUser() {
		// console.log("User id: ", user.getUser().id)
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/${user.getUser().id}`,
		};

		await axios
			.request(config)
			.then((response) => {
				appUser.value = response.data;
				// console.log("User: ", appUser.value);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	onMounted(() => {
		// loadSessions();
	});

	async function mountChat() {
		const plugin = document.createElement("script");
		plugin.setAttribute(
			"src",
			"//code.tidio.co/oje9p3zweqxnqqcawyqj6y0krt7adfbb.js"
		);
		plugin.async = true;
		document.head.appendChild(plugin);
	}

	onBeforeMount(async () => {
		// mountChat();
		await loadUser();
	});
</script>

<template>
	<div class="container-scroller">
		<SideBar></SideBar>
		<div class="container-fluid page-body-wrapper">
			<NavBar></NavBar>
			<div class="main-panel mb-0 position-relative">
				<RouterView class="vh-min pb-5 mb-5" />
				<Footer />
			</div>
			<!-- main-panel ends -->
		</div>
		<!-- page-body-wrapper ends -->
	</div>
</template>

<style scoped>
	@import url("../assets/css/imports.css");
</style>
