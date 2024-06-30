
import { defineStore } from 'pinia'
import {ref} from "vue";

export const processesStore = defineStore('processes', {
    state: () => ({
        processItems: [
            { status: 'completed', number: '14', providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '13:30' },
            { status: 'pending', number: '2', providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', number: '3', providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', number: '14', providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '13:30' },
            { status: 'pending', number: '2', providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', number: '3', providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', number: '14', providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '13:30' },
            { status: 'pending', number: '2', providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', number: '3', providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },{ status: 'completed', number: '14', providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '13:30' },
            { status: 'pending', number: '2', providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', number: '3', providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', number: '14', providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '13:30' },
            { status: 'pending', number: '2', providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', number: '3', providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', number: '14', providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '13:30' },
            { status: 'pending', number: '2', providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', number: '3', providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
        ]
    }),

    actions: {
        fetchProcesses() {
            axios
            return this.processItems
        }
    },

    getters: {

    },
})