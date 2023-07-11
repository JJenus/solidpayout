<script setup>
	import { ref } from "vue";

	const links = ref([
		{
			name: "Home",
			active: true,
			icon: "fa-solid fa-house",
			id: "home",
		},
		{
			name: "Features",
			active: false,
			icon: "fa-solid fa-layer-group",
			id: "features",
		},
		{
			name: "About",
			active: false,
			icon: "fa-solid  fa-address-book",
			id: "about",
		},
	]);

	function activateLink(alink) {
		for (let link of links.value) {
			link.active = false;
		}
		links.value[alink].active = true;
	}

	const toggled = ref(false);
</script>
<template>
	<header class="sticky-top pt-3 bg-body-tertiary">
		<div class="container-fluid px-md-5 px-3">
			<nav class="navbar navbar-expand-lg flex justify-content-between">
				<a
					class="text-decoration-none link-dark d-flex align-items-end"
					href="#"
				>
					<img
						src="/assets/logo-nbg.png"
						alt="logo"
						class="me-2"
						width="50"
					/>
					<span class="fs-2">SolidPayout</span>
				</a>
				<div class="">
					<div class="collapse navbar-collapse p-3">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li
								v-for="(link, index) in links"
								class="nav-item px-2"
							>
								<a
									:class="
										link.active ? 'btn-outline-primary' : ''
									"
									class="btn btn-sm px-4 rounded-pill"
									@click="activateLink(index)"
									:href="'#' + link.id"
								>
									{{ link.name }}
								</a>
							</li>
						</ul>
					</div>
				</div>
				<button
					class="btn d-md-none btn-light"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
					@click="toggled = !toggled"
				>
					<i v-if="toggled" class="bi bi-x-lg"></i>
					<i v-else class="bi bi-ui-radios-grid"></i>
				</button>
			</nav>
			<div class="d-md-none">
				<div
					class="collapse navbar-collapse p-3"
					id="navbarTogglerDemo01"
				>
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li
							v-for="(link, index) in links"
							:class="
								link.active
									? 'border-bottom border-primary text-primary'
									: ''
							"
							class="nav-item nav-link"
							@click="activateLink(index)"
						>
							<a
								:href="'#' + link.id"
								class="text-decoration-none fs-6"
								style="color: inherit;"
							>
								<i :class="link.icon" class="me-2"></i>
								{{ link.name }}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>
