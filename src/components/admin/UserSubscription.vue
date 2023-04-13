<script setup>
	import axios from "axios";
	import { alert } from "../../stores/utility";
	import { inject, ref } from "vue";

	const env = import.meta.env;

	const props = defineProps({
		sub: {
			required: true,
		},
	});
	let subscription = props.sub;
	const loading = ref(false);

	const loadSubscriptions = inject("loadSubs");

	function confirm() {
		subscription.status = "active";

		console.log(subscription);

		let config = {
			method: "PUT",
			url: `${env.VITE_BE_API}/user-subscriptions`,
			data: subscription,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				const data = res.data;
				if (!data.error) subscription = res.data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	function del() {
		console.log(subscription);

		let config = {
			method: "DELETE",
			url: `${env.VITE_BE_API}/user-subscriptions/${subscription.id}`,
		};

		loading.value = true;

		axios
			.request(config)
			.then((res) => {
				console.log("deleted: ");
				loadSubscriptions();
				alert.success("Deleted");
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	function isPending() {
		if (subscription.status == "pending" || subscription.status == null) {
			return true;
		}
		return false;
	}

	function status() {
		return subscription.status || "pending";
	}
</script>

<template>
	<div
		:class="isPending() ? 'border-warning' : 'border-success'"
		class="card border"
	>
		<div class="card-body pb-2 position-relative">
			<div class="d-flex justify-content-between align-items-center">
				<h5 class="m-0 p-0">{{ sub.subscription.title }}</h5>
				<div
					class="ms-2 d-flex flex-column justify-content-end align-items-end"
				>
					<span
						:class="isPending() ? 'bg-warning' : 'bg-success'"
						class="badge"
						>{{ status() }}</span
					>
					<small class="fs-6">
						<small
							style="font-size: xx-small"
							class="badge bg-secondary"
						>
							{{ sub.subscription.type }}
						</small>
					</small>
				</div>
			</div>
			<div
				class="mt-3 fs-6 d-flex justify-content-between align-items-center"
			>
				<span> $ {{ sub.subscription.amount }} </span>

				<div class="d-flex ms-1">
					<a
						v-if="isPending()"
						@click="confirm()"
						class="btn btn-sm btn-outline-primary"
					>
						<i class="fe fe-check-2"></i>
						Confirm
					</a>
					<button
						@click="del()"
						class="p-0 px-1 ms-2 btn btn-outline-danger btn-sm"
					>
						<i class="fa-solid fa-trash-can"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
