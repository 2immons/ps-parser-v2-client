
import { defineStore } from 'pinia'
import {ref} from "vue";
import ProcessItem from "~/components/ProcessItem.vue";

interface processItem {
    keyWordsArray: String[],
    categories: Number[],
    providers: Number[],
    minPrice: Number,
    maxPrice: Number,
    minBonus: Number,
    minSale: Number,
}

interface ProcessItemForList {
    status: string,
    id: number,
    providers: string[],
    categories: string[],
    time: string
}

export const processesStore = defineStore('processes', {
    state: () => ({
        processItems: [
            { status: 'completed', id: 14, providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '11:30' },
            { status: 'pending', id: 2, providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'in-queue', id: 3, providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', id: 14, providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '12:30' },
            { status: 'in-queue', id: 4, providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', id: 3, providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', id: 14, providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '16:30' },
            { status: 'pending', id: 2, providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', id: 3, providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'pending', id: 2, providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', id: 3, providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', id: 14, providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '33:30' },
            { status: 'pending', id: 2, providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '124:00' },
            { status: 'error', id: 3, providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
            { status: 'completed', id: 14, providers: ['Площадка 1', 'Площадка 2'], categories: ['Категория 1', 'Категория 2'], time: '43:30' },
            { status: 'pending', id: 2, providers: ['Площадка 3'], categories: ['Категория 3', 'Категория 4'], time: '12:00' },
            { status: 'error', id: 3, providers: ['Площадка 4', 'Площадка 5'], categories: ['Категория 5'], time: '10:45' },
        ] as ProcessItemForList[]
    }),

    actions: {
        createProcess(process: processItem) {
            alert(process.minSale)
        },

        fetchDownloadFile(id: Number) {
            alert("Файл для скачивания")
        },

        fetchProcesses() {
            return this.processItems
        }
    },

    getters: {

    },
})