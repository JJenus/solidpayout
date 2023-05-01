<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import Plan from "@/components/admin/Plan.vue";
	import { alert } from "../../stores/utility";

	const env = import.meta.env;
	const plans = ref([]);

	const form = ref({
		title: "",
		amount: 0,
		description: "",
		duration: "",
		type: "primary",
	});

	const loading = ref(false);

	function submit() {
		const ele = document.querySelector("form");
		if (!ele.checkValidity()) return;
		loading.value = true;

		let config = {
			method: "POST",
			data: form.value,
			url: `${env.VITE_BE_API}/subscriptions`,
		};

		console.log(form.value);

		axios
			.request(config)
			.then((res) => {
				loadPlans();
				ele.reset();
				alert.success("Created");
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	async function loadPlans() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/subscriptions?type=all`,
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
		validateForms();
	});

	function validateForms() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll(".needs-validation");

		// Loop over them and prevent submission
		Array.prototype.slice.call(forms).forEach(function (form) {
			form.addEventListener(
				"submit",
				function (event) {
					if (!form.checkValidity()) {
						event.preventDefault();
						event.stopPropagation();
					}

					form.classList.add("was-validated");
				},
				false
			);
		});
	}
</script>

<template>
	<div class="content-wrapper pb-0">
		<div class="page-header flex-wrap">
			<h3 class="mb-4">
				Subsciptions
				<br />
				<span class="pl-0 h6 pl-sm-2 text-muted d-inline-block"
					>Create subscriptions here</span
				>
			</h3>
		</div>

		<div class="mb-3">
			<form
				@submit.prevent="submit()"
				id="form"
				class="row g-3 needs-validation"
				novalidate
			>
				<div class="col-md-4">
					<label for="validationCustom01" class="form-label"
						>Title</label
					>
					<input
						v-model="form.title"
						type="text"
						class="form-control"
						id="validationCustom01"
						required
					/>
					<div class="valid-feedback">Looks good!</div>
				</div>
				<div class="col-md-4">
					<label for="validationCustom02" class="form-label"
						>Amount</label
					>
					<input
						v-model="form.amount"
						type="text"
						class="form-control"
						id="validationCustom02"
						required
					/>
					<div class="valid-feedback">Looks good!</div>
				</div>
				<div class="col-md-4">
					<label for="validationCustom04" class="form-label"
						>Duration</label
					>
					<select
						v-model="form.duration"
						class="form-select"
						id=""
						required
					>
						<option selected disabled value="">Choose...</option>
						<option>Daily</option>
						<option>Weekly</option>
						<option>Monthly</option>
						<option>Yearly</option>
					</select>
					<div class="invalid-feedback">
						Please select a valid duration.
					</div>
				</div>
				<div class="col-md-4">
					<label for="validationCustom01" class="form-label"
						>Type</label
					>
					<!-- radio-->
					<div class="d-flex">
						<div class="form-check me-3">
							<input
								v-model="form.type"
								class="form-check-input"
								type="radio"
								name="planType"
								id="flexRadioDefault1"
								:value="'primary'"
								checked
							/>
							<label
								class="form-check-label"
								for="flexRadioDefault1"
							>
								Primary
							</label>
						</div>
						<div class="form-check">
							<input
								v-model="form.type"
								class="form-check-input"
								type="radio"
								name="planType"
								id="flexRadioDefault2"
								:value="'personal'"
							/>
							<label
								class="form-check-label"
								for="flexRadioDefault2"
							>
								Personal
							</label>
						</div>
					</div>
				</div>

				<div class="col-md-8">
					<label for="validationCustom03" class="form-label"
						>Description</label
					>
					<textarea
						v-model="form.description"
						class="form-control"
						id="validationCustom03"
						required
						placeholder="Some kinf of description"
					></textarea>
					<div class="invalid-feedback">Field must not be empty.</div>
				</div>

				<div class="col-12">
					<button
						:class="loading ? 'disabled' : ''"
						class="btn btn-primary"
						type="submit"
					>
						<span v-if="!loading"> Create plan </span>
						<span v-else>
							<span
								class="spinner-border spinner-border-sm"
								role="status"
								aria-hidden="true"
							></span>
							Loading..
						</span>
					</button>
				</div>
			</form>
		</div>

		<div class="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
			<div v-for="(plan, i) in plans" :key="i" class="col">
				<Plan :admin="true" :plan="plan" />
			</div>
		</div>
		<div
			v-if="plans.length === 0"
			class="d-flex align-items-center justify-content-center fs-2"
		>
			No plans
		</div>
	</div>
</template>
