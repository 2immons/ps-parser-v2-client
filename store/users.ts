
import { defineStore } from 'pinia'
import {ref} from "vue";

export const usersStore = defineStore('users', {
    state: () => ({

    }),

    actions: {
        registerUser(registrationData: Object) {
            console.log(registrationData)
        },

        loginUser(registrationData: Object) {
            console.log(registrationData)
        }
    },

    getters: {

    },
})