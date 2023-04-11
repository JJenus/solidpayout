<script setup>
	import { onMounted, ref } from "vue";
	import User from "../../components/admin/User.vue";
	import axios from "axios";
	import { util } from "../../stores/utility.js";

	//CODES
	const env = import.meta.env;

	const users = ref([]);
	const plans = ref([]);
	const searchKey = ref("");

	function loadUsers() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response);
				users.value = response.data;
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {});
	}

	function search(evt) {
		util.search(".user", evt.target.value);
	}

	async function loadPlans() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/subscriptions?type=personal`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				let data = res.data;
				plans.value = data;
				loadUsers();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadPlans();
	});
</script>

<template>
	<div class="content-wrapper pb-0">
		<div class="page-header d-md-flex justify-content-between">
			<h3 class="mb-4">
				Users
				<br />
				<span class="pl-2 h6 pl-sm-2 text-muted d-inline-block"
					>View all Users</span
				>
			</h3>

			<div>
				<input
					@keyup="search($event)"
					type="text"
					class="form-control text-right"
					placeholder="Search users"
				/>
			</div>
		</div>
		<div
			class="mt-3 row g-3 row-cols-1 row-cols-md-3 align-items-stretched"
		>
			<div v-for="user in users" class="col">
				<User :user="user" :plans="plans" />
			</div>
		</div>
	</div>
</template>

<style>
	.icon {
		width: 50px;
		height: 50px;
		background-color: #eee;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 39px;
	}
</style>
