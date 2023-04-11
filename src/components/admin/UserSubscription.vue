<script setup>
	import axios from "axios";

	const env = import.meta.env;

	const props = defineProps({
		sub: {
			required: true,
		},
	});
	let subscription = props.sub;

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
		<div class="card-body pb-2">
			<div class="d-flex justify-content-between align-items-center">
				<h5 class="m-0 p-0">{{ sub.subscription.title }}</h5>
				<div>
					<span
						:class="isPending() ? 'bg-warning' : 'bg-success'"
						class="badge"
						>{{ status() }}</span
					>
				</div>
			</div>
			<p
				class="mt-3 fs-6 d-flex justify-content-between align-items-center"
			>
				<span> $ {{ sub.subscription.amount }} </span>
				<small class="fs-6">
					<small
						style="font-size: xx-small"
						class="badge bg-secondary"
					>
						{{ sub.subscription.type }}
					</small>
				</small>

				<a
					v-if="isPending()"
					@click="confirm()"
					class="btn btn-sm btn-outline-primary"
				>
					<i class="fe fe-check-2"></i>
					Confirm
				</a>
			</p>
		</div>
	</div>
</template>
