
import { defineStore } from 'pinia'

interface Category {
    id: string,
    label: string,
    children?: Category | null
}

export const categoriesStore = defineStore('categories', {
    state: () => ({
        categories: [
            {
                id: 'TECH',
                label: 'Технологии',
                children: [{
                    id: 'COMPUTER_MONITORS',
                    label: 'Компьютерные мониторы',
                }, {
                    id: 'COMPUTER_MOUSES',
                    label: 'Компьютерные мыши',
                }],
            }, {
                id: 'SEX',
                label: 'Секс',
            }
        ] as Category[]
    }),

    actions: {
        fetchCategories() {
            return this.categories
        }
    },

    getters: {

    },
})