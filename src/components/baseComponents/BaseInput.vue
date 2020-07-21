<template>
    <div class="input-block">
        <label class="input-block__label">
            <slot></slot>
        </label>

        <input
                type="text"
                class="input-block__input"
                :class="{'error-input': error}"
                :placeholder="placeholder"
                :value="value"
                @input="$emit('input', $event.target.value)">

        <h2 class="error-message">{{ error }}</h2>
    </div>
</template>

<script>
    export default {
        props: ['value', 'placeholder', 'error']
    }
</script>