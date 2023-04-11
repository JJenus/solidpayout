<script setup>
	const props = defineProps({
		user: {
			required: true,
		},
		plans: {
			required: true,
		},
	});
</script>

<template>
	<div
		class="modal fade"
		:id="`admin-user-modal-${user.id}`"
		tabindex="-1"
		:aria-labelledby="`admin-user-modal-${user.id}`"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" >
						{{ user.name }}'s subscriptions
					</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div v-for="plan in plans" class="col-md-4">
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
