<template>
    <div class="textarea-block">
        <label class="textarea-block__label">
            <slot></slot>
        </label>
        <textarea
                rows="10"
                class="textarea-block__textarea"
                :class="{'error-input': error}"
                :placeholder="placeholder"
                :value="value"
                @input="$emit('input', $event.target.value)"></textarea>

        <h2 class="error-message">{{ error }}</h2>
    </div>
</template>

<script>
    export default {
        props: ['value', 'placeholder', 'error']
    }
</script>