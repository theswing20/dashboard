<template>
    <div class="wrapper">
        <form @submit.prevent="addTask()" class="form">
            <BaseInput
                    class="form__input"
                    v-model="form.title"
                    :placeholder="'Card-1'"
                    :error="error.title"
            >Название карточки:
            </BaseInput>

            <BaseTextarea
                    class="form__textarea"
                    v-model="form.description"
                    :placeholder="'Some text'"
                    :error="error.description"
            >Описания карточки
            </BaseTextarea>

            <div class="form__buttons">
                <BaseButton type="sumbit" class="form__button btn--green">Добавить</BaseButton>
                <BaseButton @click="$router.push('/')" class="form__button btn--red">Отмена</BaseButton>
            </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */

    import BaseInput from "../components/baseComponents/BaseInput";
    import BaseTextarea from "../components/baseComponents/BaseTextarea";
    import BaseButton from "../components/baseComponents/BaseButton";

    export default {
        components: {
            BaseInput,
            BaseTextarea,
            BaseButton
        },

        data() {
            return {
                form: {
                    title: '',
                    description: ''
                },

                error: {
                    title: '',
                    description: ''
                }
            }
        },

        methods: {
            addTask() {
                let title = this.form.title,
                    description = this.form.description

                if (!title)
                    this.error.title = 'Это поле не может быть пустым'
                else
                    this.error.title = ''

                if (!description)
                    this.error.description = 'Это поле не может быть пустым'
                else
                    this.error.description = ''

                if (!this.error.title && !this.error.description) {
                    this.$store.dispatch('addTask', this.form)
                        .then(() => {
                            this.$router.push('/')
                        })
                }

            }
        }

    }
</script>