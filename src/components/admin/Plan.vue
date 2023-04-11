<script setup>
	import axios from "axios";
	import { inject, ref } from "vue";
	import { alert } from "../../stores/utility";

	const env = import.meta.env;

	const props = defineProps({
		plan: {
			required: true,
		},
		admin: {
			required: false,
		},
	});

	const user = inject("user");
	const loading = ref(false);

	const form = ref({
		userId: null,
		subscriptionId: null,
		length: 1,
	});

	function join() {
		loading.value = true;
		form.value.userId = user.value.id;
		form.value.subscriptionId = props.plan.id;

		// console.log(form.value);

		let config = {
			method: "POST",
			data: form.value,
			url: `${env.VITE_BE_API}/user-subscriptions`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				alert.success("Success", "Chat support to activate");
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
		startPointer();
	}

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
	<div class="card mb-3 rounded-3 h-100 shadow">
		<div
			class="card-body py-3 px-4 h-100 d-flex flex-column justify-content-between"
		>
			<div>
				<p class="m-0 survey-head d-flex justify-content-between">
					<span>{{ plan.title }}</span>
					<span
						v-if="admin"
						style="font-size: 0.8rem; padding: 1x"
						class="bg-secondary text-capitalised text-white px-3 fs-xs rounded-3"
						>{{ plan.type }}</span
					>
				</p>
				<div class="m-0 my-2 d-flex align-items-center">
					<h3 class="survey-value">${{ plan.amount }}</h3>

					<small class="small fs-sm text-muted"
						>/{{ plan.duration }}
					</small>
				</div>
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
				<div v-if="!admin">
					<button
						:class="loading ? 'disabled' : ''"
						@click="join()"
						class="btn btn-primary"
					>
						<span
							v-if="loading"
							class="spinner-border spinner-border-sm"
						></span>
						<span v-else>Start</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
