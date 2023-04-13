<script setup>
	import { onBeforeMount, provide, ref } from "vue";
	import moment from "moment";
	import axios from "axios";
	import UserModal from "./UserModal.vue";
	import { alert } from "../../stores/utility";

	const env = import.meta.env;

	const props = defineProps({
		user: {
			required: true,
		},
		plans: {
			required: true,
		},
	});

	const assign = ref(false);

	const form = ref({
		userId: null,
		subscriptionId: null,
		length: 1,
	});

	const subscriptions = ref([]);
	const loading = ref(false);

	function submit(ele) {
		if (!ele.target.checkValidity()) return;
		loading.value = true;
		form.value.userId = props.user.id;
		console.log(form.value);

		let config = {
			method: "POST",
			data: form.value,
			url: `${env.VITE_BE_API}/user-subscriptions`,
		};

		axios
			.request(config)
			.then((res) => {
				// ele.target.reset();
				loadSubscriptions();
				alert.success();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	async function updateStatus() {
		if (props.user.status !== "new" && props.user.status !== null) return;

		const user = props.user;
		user.status = "active";

		let config = {
			method: "PUT",
			data: user,
			url: `${env.VITE_BE_API}/users`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log("update", res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async function loadSubscriptions() {
		// console.log("Loading subs");
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/user-subscriptions/${props.user.id}`,
		};

		axios
			.request(config)
			.then((res) => {
				// console.log(res);
				let data = res.data;
				subscriptions.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	provide("loadSubs", loadSubscriptions);

	function date(strDate) {
		return moment(strDate).format("MMM Do, YYYY");
	}

	function createdAt() {
		return moment(props.user.createdAt).format("MMM Do, YYYY");
	}

	function status() {
		return props.user.status || "New";
	}

	onBeforeMount(() => {
		loadSubscriptions();
	});
</script>

<template>
	<UserModal :user="user" :plans="subscriptions" />
	<div class="card p-3 mb-2">
		<div class="d-flex justify-content-between">
			<div class="d-flex flex-row align-items-center">
				<div class="icon">
					<img
						:src="user.imgUrl || '/assets/img/avatar.jpeg'"
						alt=""
						class="w-100"
					/>
				</div>
				<div class="ms-2 c-details">
					<h6 class="mb-0">{{ user.name }}</h6>
					<span>{{ date(user.createdAt) }}</span>
				</div>
			</div>
		</div>
		<div v-if="!assign">
			<div class="ps-2 py-3">{{ user.email }}</div>
			<div class="mt-0 table-responsive">
				<table class="table table-borderless">
					<tr>
						<td>Status:</td>
						<td>{{ status() }}</td>
					</tr>
				</table>
			</div>
			<button class="btn btn-primary w-100 mb-2" @click="assign = true">
				Assign plan
			</button>
			<button
				data-bs-toggle="modal"
				:data-bs-target="`#admin-user-modal-${user.id}`"
				class="btn btn-secondary w-100"
			>
				See plans
			</button>
		</div>

		<div v-else class="mt-2">
			<h6 class="mb-2 d-flex justify-content-between">
				<a class="text-dark me-2" role="button" @click="assign = false">
					<i class="bi bi-arrow-left-short fs-2"></i>
				</a>
				Add personal plan to user
			</h6>
			<form @submit.prevent="submit($event)">
				<label for="" class="label">Plans</label>
				<select
					v-model="form.subscriptionId"
					id="select-plan"
					class="form-select my-2"
					required
				>
					<option v-for="plan in plans" :value="plan.id">
						{{ plan.title }} ${{ plan.amount }}
					</option>
				</select>
				<button
					:class="loading ? 'disabled' : ''"
					type="submit"
					class="btn btn-outline-primary w-100 mt-2"
				>
					<span
						v-if="loading"
						class="spinner-border spinner-border-sm"
					></span>
					<span v-else>Save</span>
				</button>
			</form>
		</div>
	</div>
</template>
