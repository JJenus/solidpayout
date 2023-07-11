<script setup>
	import { inject } from "vue";
	import { user } from "../../stores/user.js";

	const appUser = inject("user");
</script>

<template>
	<nav
		style="min-height: 100vh"
		class="sidebar sticky-top vh-min sidebar-offcanvas"
		id="sidebar"
	>
		<div
			class="sidebar-brand-wrapper px-0 pt-3 d-flex align-items-center justify-content-center"
		>
			<a class="brand-logo-mini d-none" href="/">
				<div>
					<img
						src="/assets/images/favicon/favicon.ico"
						alt="logo"
						class="img-auto"
						width="40"
					/>
				</div>
			</a>
			<a class="brand-logo" href="/">
				<img
					src="/assets/images/favicon/favicon.ico"
					alt="logo"
					width="40"
				/>
			</a>
		</div>
		<ul class="nav">
			<li class="nav-item nav-profile">
				<a href="#" class="nav-link">
					<div class="nav-profile-image">
						<img
							width="40"
							:src="appUser.imgUrl || '/assets/img/avatar.jpeg'"
							alt="profile"
						/>
						<span class="login-status online"></span>
						<!--change to offline or busy as needed-->
					</div>
					<div class="nav-profile-text d-flex flex-column pr-3">
						<span class="font-weight-normal mb-1">Welcome</span>
						<span class="font-weight-medium">{{
							appUser.name
						}}</span>
					</div>
					<span
						class="badge badge-success d-inline-blocik d-none text-white ml-3 rounded-circle p-2"
						>1</span
					>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="picks">
					<i class="mdi mdi-crosshairs-gps menu-icon"></i>
					<span class="menu-title">Picks</span>
				</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="profile">
					<i class="mdi mdi-account menu-icon"></i>
					<span class="menu-title">Profile</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="plans">
					<i class="mdi mdi-format-list-checks menu-icon"></i>
					<span class="menu-title">Subscription Plans</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="security">
					<i class="mdi mdi-shield menu-icon"></i>
					<span class="menu-title">Security</span>
				</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" role="button" @click="user.logout()">
					<i class="mdi mdi-arrow-left-bold-circle menu-icon"></i>
					<span class="menu-title">Sign Out</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
	@import url("@/assets/css/imports.css");

	.vh-min {
		min-height: 100vh;
	}
</style>
