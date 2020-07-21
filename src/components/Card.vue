<template>
    <div class="card">
        <h2 class="card__title">{{ card.title }}</h2>
        <p class="card__description">{{ card.description }}</p>
    </div>
</template>

<script>
    export default {
        props: ['card']
    }
</script>