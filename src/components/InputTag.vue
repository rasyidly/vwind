<template>
    <div>
        <span>
            <button v-for="(value, i) in modelValue" :key="i" @click.prevent="modelValue?.splice(i, 1)">
                <slot name="tag">{{ value }} <span>&times;</span></slot>
            </button>
        </span>
        <input type="text" v-model="newValue" @keydown.enter.prevent="addValue" @keydown.space="addValue">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const newValue = ref('')

const addValue = () => {
    props.modelValue.push(newValue.value.trim())
    newValue.value = ''
}
</script>