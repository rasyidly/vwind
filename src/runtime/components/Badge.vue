<template>
    <component :is="as">
        <slot>
        </slot>
    </component>
</template>

<script setup>
defineProps({
    as: {
        type: String,
        default: 'span'
    }
})
</script>