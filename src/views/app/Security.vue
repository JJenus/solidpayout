<script setup>
	import { ref } from "vue";

	const changePass = ref({
		currentPassword: "",
		newPassword: "",
	});
	const loading = ref(false);

	function submit(evt) {}
</script>
<template>
	<div class="content-wrapper pb-0">
		<div class="page-header flex-wrap">
			<h3 class="mb-4">Security</h3>
		</div>

		<!-- Password -->
		<h2 class="h5 text-primary mb-4">Password</h2>
		<form
			@submit.prevent="submit($event)"
			class="needs-validation border-bottom pb-3 pb-lg-4"
			novalidate
		>
			<div class="row">
				<div class="col-sm-6 mb-4">
					<label for="cp" class="form-label fs-base"
						>Current password</label
					>
					<div class="password-toggle">
						<input
							type="password"
							id="cp"
							class="form-control form-control-lg"
							v-model="changePass.currentPassword"
							required
						/>

						<div
							class="invalid-tooltip position-absolute top-100 start-0"
						>
							Incorrect password!
						</div>
					</div>
				</div>
			</div>
			<div class="row pb-2 my-3">
				<div class="col-sm-6 mb-4">
					<label for="np" class="form-label fs-base"
						>New password</label
					>
					<div class="password-toggle">
						<input
							type="password"
							id="np"
							class="form-control form-control-lg"
							v-model="changePass.newPassword"
							required
						/>

						<div
							class="invalid-tooltip position-absolute top-100 start-0"
						>
							Incorrect password!
						</div>
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<label for="cnp" class="form-label fs-base"
						>Confirm new password</label
					>
					<div class="password-toggle">
						<input
							type="password"
							id="cnp"
							class="form-control form-control-lg"
							v-model="changePass.confirmPassword"
							required
						/>

						<div
							class="invalid-tooltip position-absolute top-100 start-0"
						>
							Passwords don't match!
						</div>
					</div>
				</div>
			</div>
			<div class="d-flex mb-3">
				<button type="reset" class="btn btn-secondary me-3">
					Cancel
				</button>
				<button
					:class="loading ? 'disabled' : ''"
					type="submit"
					class="btn btn-primary"
				>
					<span v-if="!loading"> Save changes </span>
					<span v-else>
						<span
							class="spinner-grow spinner-grow-sm"
							role="status"
							aria-hidden="true"
						></span>
						Please wait...
					</span>
				</button>
			</div>
		</form>
	</div>
</template>


<style scoped>
	@import url("@/assets/css/imports.css");
</style>