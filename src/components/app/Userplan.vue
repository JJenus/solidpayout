<script setup>
	import axios from "axios";

	const env = import.meta.env;

	const props = defineProps({
		plan: {
			required: true,
		},
        admin: {
			required: false,
		},
	});

	function delet() {
		let config = {
			method: "DELETE",
			url: `${env.VITE_BE_API}/subscriptions/${props.plan.id}`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}
</script>

<template>
	<div class="card mb-3 mb-sm-0">
		<div class="card-body py-3 px-4">
			<p class="m-0 survey-head d-flex justify-content-between">
				<span>{{ plan.title }}</span>
			</p>
			<div class="m-0 my-2 d-flex align-items-center">
				<h3 class="survey-value">${{ plan.amount }}</h3>

				<small class="small fs-sm text-muted"
					>/{{ plan.duration }}
				</small>
			</div>
			<p>{{ plan.description }}</p>
			<div
				class="d-flex justify-content-between align-items-end flot-bar-wrapper"
			>
				<div class="mr-2" v-if="admin">
					<!-- <p class="text m-0" v-if="!admin">Subscribe</p> -->
					<button class="btn btn-primary">activate</button>
				</div>
				<div>
					<span class="px-3 py-1 bg-secondary">active</span>
				</div>
			</div>
		</div>
	</div>
</template>
