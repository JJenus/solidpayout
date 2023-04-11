<script setup>
	import axios from "axios";
	import { onMounted, provide, ref } from "vue";
	import Testimony from "../../components/admin/Testimony.vue";
	import * as filestack from "filestack-js";
	import { util } from "@/stores/utility";

	//CODES
	const env = import.meta.env;
	const apikey = env.VITE_FSHARE_KEY;
	const client = filestack.init(apikey);

	const testimonials = ref([]);

	const winners = ref([]);

	const form = ref({
		userName: "",
		testimony: "",
		rating: 0,
		imgUrl: null,
	});

	const formWon = ref({
		name: "",
		amount: "",
	});
	const imgFile = ref(null);
	const imgPreview = ref(
		"https://static.thenounproject.com/png/2532839-200.png"
	);

	const loading = ref(false);

	function submit($event = null) {
		const ele = document.querySelector("form");
		if (!ele.checkValidity()) return;
		loading.value = true;

		if (imgFile.value !== null) {
			saveImage();
			return;
		}

		let config = {
			method: "POST",
			data: form.value,
			url: `${env.VITE_BE_API}/testimonials`,
		};

		console.log(form.value);

		axios
			.request(config)
			.then((res) => {
				loadTestifiers();
				ele.reset();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	function selectImage() {
		const input = document.querySelector("#select-profile-image");
		input.click();
	}

	function saveImage() {
		client
			.upload(imgFile.value)
			.then((res) => {
				console.log("success: ", res);

				form.value.imgUrl = res.url;
				imgFile.value = null;
				imgPreview.value = util.resizeImg(res.url, 100);
				submit(null);
			})
			.catch((err) => {
				console.log(err);
				// alert.error("Failed", "Please check your connection.");
			});
	}

	function newImage(evt) {
		const input = evt.target;

		if (input.files && input.files[0]) {
			imgFile.value = input.files[0];
			imgPreview.value = URL.createObjectURL(imgFile.value);
		}
	}

	function submitWon($event) {
		if (!$event.target.checkValidity() || loading.value) return;
		loading.value = true;

		let config = {
			method: "POST",
			data: formWon.value,
			url: `${env.VITE_BE_API}/testimonials/won`,
		};

		console.log(form.value);

		axios
			.request(config)
			.then((res) => {
				loadWon();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	function loadTestifiers() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/testimonials`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				let data = res.data;
				testimonials.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	provide("testimonials", loadTestifiers);

	function loadWon() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/testimonials/won`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				let data = res.data;
				winners.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadTestifiers();
		// loadWon();
	});
</script>

<template>
	<div class="content-wrapper pb-0">
		<div class="page-header flex-wrap">
			<h3 class="mb-4">
				Testimonies
				<br />
				<span class="pl-0 h6 pl-sm-2 text-muted d-inline-block"
					>Add Testimonies Here.</span
				>
			</h3>
		</div>

		<div
			class="mt-4 d-flex flex-column align-items-center justify-content-center w-100"
		>
			<a href="#" @click="selectImage()" class="mb-4">
				<img
					v-if="imgPreview"
					width="100"
					height="100"
					:src="imgPreview"
					class="rounded-circle border border-dark"
				/>
				<span
					v-else
					class="m-3 d-inline-block border p-4 border-dark rounded-circle"
				>
					<i class="fe fe-user fs-2"></i>
				</span>
			</a>
			<div class="my-5">
				<form
					@submit.prevent="submit($event)"
					id="form"
					class="row g-3 needs-validation"
					novalidate
				>
					<input
						type="file"
						accept="image/png, image/jpeg"
						@change="newImage($event)"
						id="select-profile-image"
						class="d-none"
					/>
					<div class="col-md-6">
						<label for="validationCustom01" class="form-label"
							>Name</label
						>
						<input
							v-model="form.userName"
							type="text"
							class="form-control"
							id="validationCustom01"
							required
						/>
						<div class="valid-feedback">Looks good!</div>
					</div>

					<div class="col-md-6">
						<label for="validationCufddfdrstom01" class="form-label"
							>Rating</label
						>
						<select
							v-model="form.rating"
							class="form-select"
							id="validationCufddfdrstom01"
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<div class="valid-feedback">Looks good!</div>
					</div>

					<div class="col-md-12">
						<label for="validationCustom03" class="form-label"
							>Testimony</label
						>
						<textarea
							v-model="form.testimony"
							class="form-control"
							id="validationCustom03"
							required
							placeholder="The testimony"
							rows="4"
						></textarea>
						<div class="invalid-feedback">
							Field must not be empty.
						</div>
					</div>

					<div class="col-12">
						<button
							:class="loading ? 'disabled' : ''"
							class="btn btn-primary"
							type="submit"
						>
							<span v-if="!loading"> Save </span>
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
			<hr />
			<div class="row mt-3 w-100">
				<Testimony
					v-for="testimonial in testimonials"
					:testimony="testimonial"
				/>
			</div>
		</div>
	</div>
</template>
