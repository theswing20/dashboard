<template>
    <div class="wrapper">
        <header class="header">
            <h1 @click="goTo('/')" class="header__logo">Dashboard</h1>
        </header>
    </div>
</template>

<script>
    export default {
        methods: {
            goTo(route) {
                this.$router.push(route)
            }
        }
    }
</script>