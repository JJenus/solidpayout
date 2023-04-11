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
				<span v-if="admin" style="font-size: .8rem; padding: 1x;" class="bg-secondary text-capitalised text-white px-3 fs-xs rounded-3 ">{{ plan.type }}</span>
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
				<div class="mr-2">
					<p class="text m-0" v-if="!admin">Subscribe</p>
					<a v-else class="btn fs-5 text-danger" @click="delet()">
						<i class="bi bi-trash3"></i>
					</a>
				</div>
				<div>
					<button class="btn btn-primary">Join</button>
				</div>
			</div>
		</div>
	</div>
</template>
