<script setup>
	import { inject, ref } from "vue";

	const toggleIcon = ref(false);
	const user = inject("user");

	function toggleMenu() {
		toggleIcon.value = !toggleIcon.value;
		const body = document.querySelector("body");
		if (toggleIcon.value) {
			body.classList.add("sidebar-icon-only");
		} else {
			body.classList.remove("sidebar-icon-only");
		}
	}
</script>

<template>
	<nav
		class="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row bg-light"
	>
		<div
			class="navbar-menu-wrapper d-flex align-items-stretch bg-light justify-content-between"
		>
			<a
				class="navbar-brand brand-logo-mini align-self-center d-lg-none"
				href="/app"
				><img src="/assets/logo.png" alt="logo" width="40"
			/></a>
			<a
				@click="toggleMenu()"
				class="btn-light d-none d-lg-block rounded py-0 fs-4 px-1 btn-iycon align-self-center mr-2"
				type="button"
				data-toggle="minimize"
			>
				<i v-if="toggleIcon" class="mdi mdi-menu"></i>
				<i v-else class="mdi mdi-backburger"></i>
			</a>

			<ul class="navbar-nav navbar-nav-right ml-lg-auto">
				<li class="nav-item nav-profile border-0">
					<a
						class="nav-link"
						id="profileDropdown"
						role="button"
						data-toggle="dropdown"
					>
						<span class="profile-name me-2">{{ user.name }}</span>
						<img
							class="nav-profile-img"
							alt="dp"
							:src="user.imgUrl || '/assets/img/avatar.jpeg'"
						/>
					</a>
				</li>
			</ul>
			<a
				class="btn-light d-lg-none rounded py-0 fs-4 px-1 btn-iycon align-self-center mr-2"
				type="button"
				data-toggle="offcanvas"
				@click="toggleMenu()"
			>
				<i v-if="!toggleIcon" class="mdi mdi-menu"></i>
				<i v-else class="mdi mdi-backburger"></i>
			</a>
		</div>
	</nav>
</template>

<style scoped>
	@import url("@/assets/css/imports.css");
</style>
