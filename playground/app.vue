<template>
	<div class="min-h-screen bg-gray-100">
		<div class="container mx-auto max-w-4xl py-16">
			<div class="bg-white rounded-xl p-6 space-y-4">
				<h2>Input tag</h2>
				<VInputTag class="form-input overflow-x-hidden" v-model="tags" placeholder="Add tags here ..." />
				<div>Value</div>
				<div class="rounded border p-2 flex flex-wrap gap-1">
					<pre>{{ tags }}</pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const tags = ref([])
</script>
