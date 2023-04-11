<script setup>
	import axios from "axios";
	import { onMounted, provide, ref } from "vue";
	import Navbar from "../components/product/Navbar.vue";
	import SwiperTag from "../components/product/SwiperTag.vue";
	import Features from "../components/product/Features.vue";
	import AuthModal from "../components/AuthModal.vue";

	const env = import.meta.env;

	const testimonials = ref([]);
	const signIn = ref(true);
	provide("authMode", signIn);

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

	onMounted(() => {
		loadTestifiers();
		console.log(signIn.value);
	});
</script>

<template>
	<AuthModal />
	<Navbar />
	<div
		class="container-fluid pt-0 pt-md-4 py-4 px-md-5"
		data-bs-spy="scroll"
		data-bs-target="#nav-scroll"
		data-bs-offset="0"
		data-bs-smooth-scroll="true"
		tabindex="0"
	>
		<div class="row align-items-md-stretch">
			<div class="col-md-6" id="home">
				<div class="h-100 p-5 pb-3">
					<h2 class="display-5 text-capitalised fw-bold">
						The Solid <br />
						Payouts
						<br />
						Pro Tipster
					</h2>
					<p class="mb-3">
						With TheSolidPayout, you'll never have to second-guess
						your sports betting picks again. Our reliable and
						accurate predictions, combined with our comprehensive
						coverage and expert analysis, make us the ultimate
						sports betting resource. Sign up today and start winning
						big!
					</p>
					<div class="mt-5 d-flex align-items-center">
						<button
							class="btn btn-primary rounded-pill px-4"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#authModal"
							@click="signIn = true"
						>
							Login
						</button>
						<span class="mx-3">OR</span>
						<button
							@click="signIn = false"
							class="btn btn-outline-primary rounded-pill px-4"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#authModal"
						>
							Signup <span class="d-none d-md-inline">Now</span>
						</button>
					</div>
				</div>
			</div>
			<div class="col-md-6 rounded-md-5 d-flex align-items-center">
				<div class="p-5 py-3 w-100">
					<SwiperTag />
				</div>
			</div>

			<div class="col-md-6 mt-4" id="features">
				<div class="p-5 py-3 w-100">
					<h1 class="h3">Features</h1>
					<p class="col-md-6"></p>
					<Features />
				</div>
			</div>

			<div class="col-md-6 mt-4" id="about">
				<div class="p-5 py-3 w-100">
					<h1 class="h3">About</h1>
					<p class="mb-4">
						At TheSolidPayout, we believe that successful sports
						betting is all about knowledge and strategy. That's why
						we've assembled a team of experienced analysts who use
						advanced data analytics and industry insights to provide
						you with the most accurate and reliable sports
						predictions. We're committed to helping you make the
						most of your sports betting experience, and we're
						dedicated to providing you with the information you need
						to succeed.
					</p>
					<div class="mt-5">
						<div class="card rounded-4 bg-pick">
							<div class="card-body">
								<div
									class="d-flex align-items-center justify-content-center"
								>
									<small>
										<i
											class="fa-solid blink_me fa-circle me-1 mb-2 text-success"
										></i>
									</small>
									<h1 class="text-center h5">Today</h1>
								</div>
								<div class="table-responsive">
									<table class="table">
										<thead>
											<tr>
												<th>Fixture</th>
												<th>Score</th>
												<th>Pick</th>
											</tr>
										</thead>
										<tbody class="d-none">
											<tr>
												<td>Chelsea - MK Dons</td>
												<td>
													<span
														class="badge bg-secondary"
														>hidden</span
													>
												</td>
												<td>
													<span
														class="badge bg-secondary"
														>login</span
													>
												</td>
											</tr>
											<tr>
												<td>Fernabache - Santos</td>
												<td>
													<span
														class="badge bg-secondary"
														>hidden</span
													>
												</td>
												<td>
													<span
														class="badge bg-secondary"
														>login</span
													>
												</td>
											</tr>

											<tr>
												<td>Sevilla - New Saints</td>
												<td>
													<span
														class="badge bg-secondary"
														>hidden</span
													>
												</td>
												<td>
													<span
														class="badge bg-secondary"
														>login</span
													>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="text-muted text-center">
									Login and view on dashboard
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="my-4 p-5 pb-0">
			<h1 class="h3">Testimonials</h1>
			<h5>Satisfied users all over the world</h5>
			<div
				class="row mt-5 g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch"
			>
				<div v-for="testimony in testimonials" class="col">
					<div class="card rounded-4 h-100">
						<div
							class="card-body px-4 py-4 h-100 d-flex flex-column justify-content-between"
						>
							<h4 class="mb-5">
								<i class="fa-solid fa-quote-left"></i>
							</h4>
							<div class="mb-5">
								<p>
									{{ testimony.testimony }}
								</p>
								<div class="d-flex">
									<i
										:class="
											testimony.rating >= 1
												? 'text-warning'
												: 'text-dark'
										"
										class="fa-solid fa-star me-2"
									></i>
									<i
										:class="
											testimony.rating >= 2
												? 'text-warning'
												: 'text-dark'
										"
										class="fa-solid fa-star me-2"
									></i>
									<i
										:class="
											testimony.rating >= 3
												? 'text-warning'
												: 'text-dark'
										"
										class="fa-solid fa-star me-2"
									></i>
									<i
										:class="
											testimony.rating >= 4
												? 'text-warning'
												: 'text-dark'
										"
										class="fa-solid fa-star me-2"
									></i>
									<i
										:class="
											testimony.rating >= 5
												? 'text-warning'
												: 'text-dark'
										"
										class="fa-solid fa-star me-2"
									></i>
								</div>
							</div>
							<div class="mt-4 d-flex align-items-center">
								<i
									v-if="testimony.imgUrl == null"
									class="fa-solid fa-user-circle me-2 fs-2"
								></i>
								<img
									v-else
									height="32"
									width="32"
									class="me-2 rounded-circle"
									:src="testimony.imgUrl"
									alt="photo"
								/>
								<span class="fw-bold">{{
									testimony.userName
								}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mb-4 p-5"></div>

		<footer class="pt-3 mt-4 text-muted border-top">&copy; 2022</footer>
	</div>
</template>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");
	.bg-pick {
		background-color: #dde4e6;
	}

	.bg-h {
		height: 75vh;
	}

	.blink_me {
		animation: blinker 1s linear infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
