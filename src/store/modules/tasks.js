/* eslint-disable no-unused-vars */

export default {
    state: {
        tasks: []
    },

    mutations: {
        GET_ALL_TASKS(state, tasks) {
            state.tasks = tasks
        },

        CHANGE_TASK_POSITION(state, tasks) {
            state.tasks = tasks
        }
    },

    actions: {
        async addTask({commit}, form) {
            if (localStorage.tasks) {
                const json = JSON.parse(localStorage.tasks)
                json.push(form)
                localStorage.tasks = JSON.stringify(json)
            } else {
                localStorage.tasks = JSON.stringify([form])
            }
        },

        getAllTasks({ commit }) {
            if (localStorage.tasks) {
                const tasks = JSON.parse(localStorage.tasks)
                commit('GET_ALL_TASKS', tasks)
            } else {
                const tasks = [
                    {
                        title: 'Card 1',
                        description: 'Some text'
                    },

                    {
                        title: 'Card 2',
                        description: 'Some text'
                    },
                ]
                localStorage.tasks = JSON.stringify(tasks)
                commit('GET_ALL_TASKS', tasks)
            }
        },

        changeTaskPosition({ commit }, tasks) {
            localStorage.tasks = JSON.stringify(tasks)
            commit('CHANGE_TASK_POSITION', tasks)
        },
    },
}