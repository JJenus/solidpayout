<script setup>
	import { user } from "../../stores/user.js";
</script>

<template>
	<nav
		class="sidebar vh-min sidebar-offcanvas"
		id="sidebar"
		style="min-height: 100vh"
	>
		<div
			class="sidebar-brand-wrapper px-0 pt-3 d-flex align-items-center justify-content-center"
		>
			<a class="brand-logo-mini" href="/">
				<img
					src="/assets/logo.png"
					alt="logo"
					class="img-auto"
					height="10"
				/>
			</a>
			<a class="brand-logo" href="/">
				<img src="/assets/logo.png" alt="logo" width="64" />
			</a>
		</div>
		<ul class="nav">
			<li class="nav-item nav-profile">
				<a href="#" class="nav-link">
					<div class="nav-profile-image">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNM8w_wwY96T4iTcHM1nxVn_jCgz-jX7kIuA&usqp=CAU"
							alt="profile"
						/>
						<span class="login-status online"></span>
						<!--change to offline or busy as needed-->
					</div>
					<div class="nav-profile-text d-flex flex-column pr-3">
						<span class="font-weight-medium mb-2">Admin</span>
						<span class="font-weight-normal">Welcome</span>
					</div>
					<span
						class="badge badge-success d-inline-blocik text-white ml-3 rounded-3 p-2"
						>140</span
					>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="dashboard">
					<i class="mdi mdi-view-dashboard menu-icon"></i>
					<span class="menu-title">Dashboard</span>
				</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="users">
					<i class="mdi mdi-account-multiple menu-icon"></i>
					<span class="menu-title">Users</span>
				</a>
			</li>
			<li class="nav-item mb-5">
				<a class="nav-link" href="subscriptions">
					<i class="mdi mdi-clipboard-check menu-icon"></i>
					<span class="menu-title">Subscriptions</span>
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
