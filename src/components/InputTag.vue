<template>
    <div style="display: flex; flex-wrap: wrap;">
        <span>
            <button v-for="(value, i) in modelValue" :key="i" @click.prevent="modelValue?.splice(i, 1)">
                <slot name="tag">{{ value }} <span>&times;</span></slot>
            </button>
        </span>
        <input style="flex: 1;" type="text" v-model="newValue" @keydown.enter.prevent="addValue" @keydown.space="addValue">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const newValue = ref('')

const addValue = () => {
    if (props.modelValue.indexOf(newValue.value.trim()) < 0) {
        props.modelValue.push(newValue.value.trim())
    }
    newValue.value = ''
}
</script>