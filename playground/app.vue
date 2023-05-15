<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto max-w-xl py-16">
      <div class="bg-white rounded-xl p-6 space-y-4">
        <h2>Input tag</h2>
        <div>
          <InputTag class="rounded border" v-model="tags" />
        </div>
        <div>Value {{ tags }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputTag from '../src/components/InputTag.vue';

const tags = ref([])
</script>
