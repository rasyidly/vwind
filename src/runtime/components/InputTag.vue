<template>
    <div style="display: flex; flex-wrap: wrap; gap: .25rem; cursor: text;" @click="$refs.input.focus()">
        <slot name="tags" :tags="modelValue">
            <VBadge as="button" v-for="(value, i) in modelValue" :key="i" style="display: inline-block; white-space: nowrap;" @click.prevent="modelValue?.splice(i, 1)">
                <slot name="tag">{{ value }} <span>&times;</span></slot>
            </VBadge>
        </slot>
        <input ref="input" style="flex: 1;" type="text" v-model="newValue" @keydown.enter.prevent="addValue" @keydown.space.prevent="addValue" @keydown.backspace="removeLast" :placeholder="placeholder">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['modelValue', 'placeholder'])
const emit = defineEmits(['update:modelValue'])

const newValue = ref('')

const removeLast = () => {
    if (newValue.value.length <= 0) props.modelValue.splice(-1);
}

const addValue = () => {
    if (props.modelValue.indexOf(newValue.value.trim()) < 0 && newValue.value.trim().length > 0) {
        props.modelValue.push(newValue.value.trim())
    }
    newValue.value = ''
}
</script>