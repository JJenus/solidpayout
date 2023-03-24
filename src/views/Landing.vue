<script setup>
	import { ref } from "vue";
	import Navbar from "../components/product/Navbar.vue";
	import SwiperTag from "../components/product/SwiperTag.vue";
	import Features from "../components/product/Features.vue";
</script>

<template>
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
						>
							Login
						</button>
						<span class="mx-3">OR</span>
						<button
							class="btn btn-outline-primary rounded-pill px-4"
							type="button"
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
										<tbody>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="my-4 p-5 pb-0">
			<h1 class="h3">Testimonials</h1>
			<h5>Satisfied users all over the world</h5>
			<div class="row mt-5">
				<div class="col-md-4 mb-3">
					<div class="card rounded-4">
						<div class="card-body px-5 py-4">
							<h4 class="mb-5">
								<i class="fa-solid fa-quote-left"></i>
							</h4>
							<div class="mb-5">
								<p>
									Simply follow the identity verification to
									verify your identity. This is essential for
									safety of the account.
								</p>
								<div class="d-flex">
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 teext-warning"
									></i>
								</div>
							</div>
							<div class="mt-4 d-flex align-items-center">
								<i
									class="fa-solid fa-user-circle me-2 fs-2"
								></i>
								<span class="fw-bold">Johny Walter</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-3">
					<div class="card rounded-4">
						<div class="card-body px-5 py-4">
							<h4 class="mb-5">
								<i class="fa-solid fa-quote-left"></i>
							</h4>
							<div class="mb-5">
								<p>
									Simply follow the identity verification to
									verify your identity. This is essential for
									safety of the account.
								</p>
								<div class="d-flex">
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 text-warning"
									></i>
									<i
										class="fa-solid fa-star me-2 teext-warning"
									></i>
								</div>
							</div>
							<div class="mt-4 d-flex align-items-center">
								<i
									class="fa-solid fa-user-circle me-2 fs-2"
								></i>
								<span class="fw-bold">Johny Walter</span>
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
