<script setup>
	import { onMounted, ref } from "vue";
	import User from "../../components/admin/User.vue";
	import axios from "axios";
	import { util } from "../../stores/utility.js";
	import { computed } from "@vue/reactivity";

	//CODES
	const env = import.meta.env;

	const users = ref([]);
	const plans = ref([]);
	const userSubs = ref([]);

	const totalSubsAmount = computed(() => {
		return userSubs.value.reduce((p, sub) => {
			const amount = sub.subscription.amount.replace("$", "");
			return p + Number(amount);
		}, 0);
	});

	async function loadUsers() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/users/`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response);
				users.value = response.data.filter((user) => {
					if (user.roles[0].name !== "ADMIN") return user;
				});
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {});
	}

	async function loadUserSubs() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/user-subscriptions`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response);
				userSubs.value = response.data;
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {});
	}

	async function loadPlans() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/subscriptions`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				let data = res.data;
				plans.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadPlans();
		loadUsers();
		loadUserSubs();
	});
</script>

<template>
	<div class="content-wrapper pb-0">
		<div class="page-header flex-wrap">
			<h3 class="mb-4">
				Admin Dashboard
				<br />
				<span class="pl-0 h6 pl-sm-2 text-muted d-inline-block"
					>Basic statistics on usage</span
				>
			</h3>
		</div>

		<div class="row falign-items-stretched">
			<div class="col-lg-8 stretch-card grid-margin">
				<div class="row">
					<div
						class="col-xl-6 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3"
					>
						<div class="card bg-warning">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card">
										<p class="mb-0 color-card-head">
											Users
										</p>
										<h2 class="text-white">
											<i class="bi bi-people-fill"></i>
											{{ users.length }}.<span class="h5"
												>00</span
											>
										</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"
									></i>
								</div>
							</div>
						</div>
					</div>
					<div
						class="col-xl-6 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3"
					>
						<div class="card bg-danger">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card text-white">
										<p class="mb-0 color-card-heatd">
											Subscription Plans
										</p>
										<h2 class="text-white">
											<i class="bi bi-card-checklist"></i>
											{{ plans.length }}.<span class="h5"
												>00</span
											>
										</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-cube-outline bg-inverse-icon-danger"
									></i>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-6 col-md-6 stretch-card pb-sm-3 pb-lg-0">
						<div class="card bg-success">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card">
										<p class="mb-0 color-card-head">
											Total User Subscriptions
										</p>
										<h2 class="text-white">
											{{ userSubs.length }}
										</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-account-circle bg-inverse-icon-success"
									></i>
								</div>
							</div>
						</div>
					</div>

					<div
						class="col-xl-6 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3"
					>
						<div class="card bg-primary">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card text-white">
										<p class="mb-0 color-card-head">
											Subscribed Amount
										</p>
										<h2 class="text-white">
											${{ totalSubsAmount }}.<span
												class="h5"
												>00</span
											>
										</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary"
									></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
