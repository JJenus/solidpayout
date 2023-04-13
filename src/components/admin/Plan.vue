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

		const userMessage = `Hello ${user.value.name}, please confirm your request.`;
		const planMessage = `SUBSCRIPTION \n\nPlan: ${props.plan.title} \nAmount: $${props.plan.amount}`;
		console.log(userMessage, planMessage);
		// return;
		axios
			.request(config)
			.then((res) => {
				console.log(res);
				alert.success("Success", "Chat support to activate");
				setTimeout(() => {
					window.tidioChatApi.open();
					// console.log(message);
					window.tidioChatApi.messageFromOperator(userMessage);
					window.tidioChatApi.messageFromOperator(planMessage);
				}, 3000);
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
				<div
					class="m-0 d-flex align-items-start justify-content-between"
				>
					<div>
						<span>{{ plan.title }}</span>
					</div>
					<div class="ms-2">
						<div
							v-if="admin"
							style="font-size: 0.6rem"
							class="bg-secondary text-white px-2 rounded-3"
						>
							{{ plan.type }}
						</div>
					</div>
				</div>
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
