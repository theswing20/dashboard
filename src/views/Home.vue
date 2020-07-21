<template>
    <div class="wrapper">
        <div class="cards">
            <div class="cards__header">
                <BaseButton @click="goTo('/addCard')" class="cards__btn btn--green">Добавить</BaseButton>
                <BaseSwitch v-model="draggingIsActive">Переключатель для Drag&Drop</BaseSwitch>
            </div>

            <draggable
                    class="cards__items"
                    :list="taskList"
                    :disabled="draggingIsActive"
                    @change="changeTaskPosition">
                <Card
                        class="cards__item"
                        v-for="item in taskList"
                        :key="item.id"
                        :card="item"
                />
            </draggable>

        </div>
    </div>
</template>

<script>
    /* eslint-disable no-unused-vars */

    import BaseButton from "../components/baseComponents/BaseButton";
    import BaseSwitch from "../components/baseComponents/BaseSwitch";
    import Card from "../components/Card";
    import draggable from 'vuedraggable'

    export default {
        name: 'Home',
        components: {
            BaseButton,
            BaseSwitch,
            Card,
            draggable
        },

        data() {
            return {
                draggingIsActive: false,
                taskList: ''
            }
        },

        watch: {
            '$store.state.tasks.tasks'(newVal, oldVal) {
                this.taskList = newVal
            }
        },

        methods: {
            goTo(route) {
                this.$router.push(route)
            },

            changeTaskPosition() {
                this.$store.dispatch('changeTaskPosition', this.taskList)
            }
        },

        mounted() {
            this.$store.dispatch('getAllTasks')
        },
    }
</script>
