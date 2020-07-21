<template>
    <div class="switch">
        <h2 class="switch__title">
            <slot></slot>
        </h2>
        <label class="switch__label">
            <input
                    type="checkbox"
                    :checked="value"
                    @change="$emit('input', $event.target.checked)">
            <span class="slider round"></span>
        </label>
    </div>
</template>

<script>
    export default {
        props: ['value']
    }
</script>