<template>
	<div class="content-wrapper pb-0">
		<div class="page-header flex-wrap">
			<h3 class="mb-4">
				Admin Dashboard
				<br />
				<span class="pl-0 h6 pl-sm-2 text-muted d-inline-block"
					>Basic statistics on usage</span
				>
			</h3>
		</div>

		<div class="row falign-items-stretched">
			<div class=" col-lg-8 stretch-card grid-margin">
				<div class="row">
					<div
						class="col-xl-6 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3"
					>
						<div class="card bg-warning">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card">
										<p class="mb-0 color-card-head">
											Users
										</p>
										<h2 class="text-white">
											<i class="bi bi-people-fill"></i>
											{{ 0 }}.<span class="h5">00</span>
										</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"
									></i>
								</div>
							</div>
						</div>
					</div>
					<div
						class="col-xl-6 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3"
					>
						<div class="card bg-danger">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card text-white">
										<p class="mb-0 color-card-heatd">
											Subscription Plans
										</p>
										<h2 class="text-white">
											<i class="bi bi-card-checklist"></i>
											{{ 0 }}.<span class="h5">00</span>
										</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-cube-outline bg-inverse-icon-danger"
									></i>
								</div>
							</div>
						</div>
					</div>

					<div
						class="col-xl-6 col-md-6 stretch-card pb-sm-3 pb-lg-0"
					>
						<div class="card bg-success">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card">
										<p class="mb-0 color-card-head">
											Subscribed Users
										</p>
										<h2 class="text-white">{{ 0 }}</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-account-circle bg-inverse-icon-success"
									></i>
								</div>
							</div>
						</div>
					</div>

					<div
						class="col-xl-6 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3"
					>
						<div class="card bg-primary">
							<div class="card-body px-3 py-4">
								<div
									class="d-flex justify-content-between align-items-start"
								>
									<div class="color-card text-white">
										<p class="mb-0 color-card-head">
											Subscribed Amount
										</p>
										<h2 class="text-white">
											${{ 0 }}.<span class="h5">00</span>
										</h2>
									</div>
									<i
										class="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary"
									></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
