<script setup>
	import axios from "axios";
	import { inject } from "vue";
	import { alert } from "../../stores/utility";

	const env = import.meta.env;
	const testimonials = inject("testimonials");

	const props = defineProps({
		testimony: {
			required: true,
		},
	});

	function delet() {
		let config = {
			method: "DELETE",
			url: `${env.VITE_BE_API}/testimonials/${props.testimony.id}`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				// window.location.href = "/dashboard/testimonials";
				alert.success();
				testimonials();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}
</script>

<template>
	<div class="col-md-6 col-12 mb-4 mb-lg-0 align-items-stretched">
		<!-- Card -->
		<div class="card shadow-lg">
			<!-- Card body -->
			<div class="card-body p-8 text-center">
				<a @click="delet()" class="btn ms-3 fs-4 text-danger">
					<i class="fa-solid fa-trash"></i>
				</a>
				<p class="lead text-dark mt-3">
					{{ testimony.testimony }}
				</p>
			</div>
			<!-- Card Footer -->
			<div class="card-footer bg-primary text-center border-top-0">
				<div class="mt-n8">
					<img
						width="64"
						:src="
							testimony.imgUrl ||
							'https://cdn-icons-png.flaticon.com/512/149/149071.png'
						"
						alt=""
						class="rounded-circle border-primary avatar-xl border border-4"
					/>
				</div>
				<div class="mt-2 text-white">
					<h3 class="text-white mb-0">
						{{ testimony.userName }}
					</h3>
					<p class="text-white-50 mb-1">
						Rating {{ testimony.rating || 5 }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
